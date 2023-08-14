/* eslint-disable no-undef */
import { useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import { Footer, Header, TripCard } from "../../components/Organism";
// import tripData from "../../data/tripPage";
import { GiBus } from "react-icons/gi";
import { FaCaravan } from "react-icons/fa";
import { WiTrain } from "react-icons/wi";
// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./slick-custom.css";
import imgUrl from "../../images/tripCards/nature/hogenakkal.jpeg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTripData, tripPageSelector } from "./reducer";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import PageLoading from "../../components/Organism/PageLoading";
// import imgUrl from "../../images/tripCards/nature/athirappilly.jpeg";
// import PropTypes from 'prop-types';
// const center = { lat: 37.7749, lng: -122.4194 };
function TripPage() {
  // const {
  //   trip01: {
  //     // title,
  //     // description,
  //     // images,
  //     // routes,
  //   },
  // } = tripData;

  const settings = {
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: false,
  };
  const nearLocationsSettings = {
    speed: 300,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };
  const [currentLocation, setCurrentLocation] = useState(null);
  const [directionServicesResponse, setDirectionsServiceResponse] =
    useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const { trip, similarTrips, nearBy, loading, routes } =
    useSelector(tripPageSelector);
  useEffect(() => {
    // console.log(id);
    dispatch(getTripData(id));
  }, [id, dispatch]);

  // eslint-disable-next-line no-unused-vars
  const calculateDistance = useCallback(
    // eslint-disable-next-line no-unused-vars
    async (latitude, longitude, _waypoints = []) => {
      const directionServices = new google.maps.DirectionsService();
      const result = await directionServices.route({
        // origin: `${latitude}${longitude}`,
        origin: `17.686815,83.218483`,
        destination: new window.google.maps.LatLng(18.3273, 82.8775),
        travelMode: window.google.maps.TravelMode.DRIVING,
        // waypoints: waypoints,
        // optimizeWaypoints: true,
      });
      console.log(result, "result", directionServicesResponse);
      if (result) setDirectionsServiceResponse(result);
    },
    [directionServicesResponse]
  );

  const updateCurrentLocation = useCallback(async (pos) => {
    setCurrentLocation({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
    // const res = await calculateDistance(
    //   pos.coords.latitude,
    //   pos.coords.longitude,
    //   [{ location: `17.4580388,82.8356112`, stopover: false }]
    // );
    // console.log(res);
  }, []);

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => updateCurrentLocation(pos),
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true }
      );
    }
  }, [updateCurrentLocation]);

  const padToTwoDigits = (num) => {
    return num.toString().padStart(2, 0);
  };

  if (loading) return <PageLoading />;
  return (
    <div>
      <Header customStyles="shadow-md !bg-white z-60" showSearch />
      <div className=" px-1">
        <div className="grid grid-cols-5 gap-x-2 onlyMobile:flex onlyMobile:flex-col">
          <Slider {...settings} className="col-span-4">
            {trip &&
              trip?.images?.map((src, index) => (
                <div key={src + index} className="w-full h-[80vh]">
                  <img
                    src={src}
                    alt="src"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
          </Slider>
          {trip.images && (
            <div className="flex flex-col gap-y-2">
              <div className="flex-1 onlyMobile:hidden max-h-[190px]">
                <img
                  src={trip?.images[0]}
                  alt="side-1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 onlyMobile:hidden max-h-[190px]">
                <img
                  src={trip?.images[1]}
                  alt="side-1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 relative">
                <Link
                  to={`/view/${id}`}
                  className=" text-h7 text-center absolute inset-0 h-full
              flex justify-center items-center text-bold text-white
              bg-transparent cursor-pointer z-10 max-h-[190px]"
                >
                  +10 More
                </Link>
                <img
                  src={trip?.images[2]}
                  alt="side-1"
                  className="w-full h-full absolute inset-0 backdrop:blur-sm"
                />
              </div>
            </div>
          )}
        </div>
        <div className="px-4 pt-2 bg-primaryBackground">
          <div className="text-h4 font-one text-center underline underline-offset-4">
            {trip?.mdTitle}
          </div>
          <div className="pb-2">
            <h1 className="text-h7 font-one capitalize underline underline-offset-2">
              Have you heard !
            </h1>
            {trip?.fullDescription?.map((content, index) => (
              <p
                key={index + content}
                className={`text-body1 font-ubuntu py-2 ${
                  index > 5 && "hidden"
                }`}
              >
                {content}
              </p>
            ))}
          </div>
          <div className="pb-2">
            <h1 className="text-h7 font-one capitalize underline underline-offset-2">
              What is the best way to reach . . . ?
            </h1>
            <div>
              {routes?.map(({ route, _id }, index) => (
                <div key={_id}>
                  <div
                    className="self-start text-h7 font-one capitalize pr-2 
                  underline underline-offset-4"
                  >
                    Route : {index + 1}
                  </div>
                  <div className="flex gap-2 items-end flex-wrap px-4">
                    <div className="flex gap-x-2 items-center py-6 onlyMobile:flex-wrap">
                      <div className="text-h8 text-red-500 ">Your Location</div>

                      <div className="flex gap-2 onlyMobile:my-2">
                        <div className="relative">
                          <span
                            className="underline underline-offset-4 
                          text-body1 font-ubuntu px-2 whitespace-nowrap capitalize"
                          >
                            {`  Information Unavailable `}
                          </span>
                          {/* {mediumOfTransport === "BUS" && ( */}
                          {/* <GiBus className=" h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+5px)]" /> */}
                          {/* )}
                          {mediumOfTransport === "TRAIN" && (
                            <WiTrain className=" h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+1px)]" />
                          )}
                          {mediumOfTransport === "DRIVING" && (
                            <FaCaravan className=" h-6 w-6 absolute left-[calc(50%-20px)] top-[calc(50%+12px)]" />
                          )} */}
                        </div>
                      </div>
                    </div>
                    {route.map(
                      (
                        {
                          arrival,
                          // destination,
                          distance,
                          mediumOfTransport,
                          travelTime,
                        },
                        index
                      ) => (
                        <div
                          key={arrival + index}
                          className="flex gap-x-2 items-center py-6 onlyMobile:flex-wrap"
                        >
                          <div className="text-h8 text-red-500 ">{arrival}</div>
                          {distance && travelTime ? (
                            <div className="flex gap-2 onlyMobile:my-2">
                              <div className="relative">
                                <span
                                  className="underline underline-offset-4 
                          text-body1 font-ubuntu px-2 whitespace-nowrap"
                                >
                                  {distance} Kms,{" "}
                                  {travelTime >= 60
                                    ? `${padToTwoDigits(
                                        Math.floor(travelTime / 60)
                                      )}:${padToTwoDigits(travelTime % 60)} hrs`
                                    : `${padToTwoDigits(travelTime)} mins`}
                                </span>
                                {mediumOfTransport === "BUS" && (
                                  <GiBus className=" h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+5px)]" />
                                )}
                                {mediumOfTransport === "TRAIN" && (
                                  <WiTrain className=" h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+1px)]" />
                                )}
                                {mediumOfTransport === "DRIVING" && (
                                  <FaCaravan className=" h-6 w-6 absolute left-[calc(50%-20px)] top-[calc(50%+12px)]" />
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-4">
            <h1 className="text-h6 font-one underline underline-offset-2 pb-4">
              Navigating with Route Maps
            </h1>
            {!isLoaded ? (
              <div
                role="status"
                className="flex items-center h-[600px] w-[600px] justify-center max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="h-[600px] w-full">
                <GoogleMap
                  center={currentLocation}
                  zoom={15}
                  mapContainerClassName="map-container"
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                >
                  <MarkerF position={currentLocation} />
                  {directionServicesResponse && (
                    <DirectionsRenderer
                      directions={directionServicesResponse}
                    />
                  )}
                </GoogleMap>
              </div>
            )}
          </div>
        </div>
        {nearBy?.length > 0 && (
          <div className="relative pt-10 bg-primaryBackground px-4">
            <h1
              className="text-h7 font-one capitalize pb-4 
          underline underline-offset-2"
            >
              Exploring Nearby Gems: Unveiling Local Points of Interest
            </h1>
            <Slider {...nearLocationsSettings}>
              {nearBy?.map(
                ({
                  _id: id,
                  smTitle,
                  mdDescription,
                  likes,
                  review,
                  cardImage,
                }) => (
                  <TripCard
                    key={id}
                    id={id}
                    image={cardImage || imgUrl}
                    title={smTitle}
                    description={mdDescription}
                    likesCount={likes}
                    reviewCount={review}
                    path={`/trip/${id}`}
                    customStyles="2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]"
                  />
                )
              )}
            </Slider>
          </div>
        )}
        {similarTrips?.length > 0 && (
          <div className="relative py-10 bg-primaryBackground px-4">
            <h1
              className="text-h7 font-one capitalize pb-4 
          underline underline-offset-2"
            >
              Echoes of Enchantment: Discovering Similar Experiences in Nearby
              Locations
            </h1>
            <Slider {...nearLocationsSettings}>
              {similarTrips.map(
                ({
                  _id: id,
                  smTitle,
                  smDescription,
                  likes,
                  review,
                  cardImage,
                }) => (
                  <TripCard
                    key={id}
                    image={cardImage || imgUrl}
                    id={id}
                    path="/"
                    title={smTitle}
                    description={smDescription}
                    likesCount={likes}
                    reviewCount={review}
                    customStyles="2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]"
                  />
                )
              )}
            </Slider>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

TripPage.propTypes = {};

export default TripPage;
