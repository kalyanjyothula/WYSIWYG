/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import favtripData from "../../data/favTripspage";
import Slider from "react-slick";
import {
  TripCard,
  FavTripCard,
  Footer,
  Header,
} from "../../components/Organism";
import { useDispatch, useSelector } from "react-redux";
import { appSelector } from "../App/reducer";
import {
  deleteFavoriteTrip,
  favoriteTripsSelector,
  fetchUserFavTrips,
} from "./reducer";
import PageLoading from "../../components/Organism/PageLoading";
import imageUrl from "../../images/tripCards/nature/araku.jpeg";

// import PropTypes from 'prop-types';

function FavTripPage() {
  const settings = {
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
  const dispatch = useDispatch();
  const { isAuthenticated, loading: appLoading } = useSelector(appSelector);
  const {
    loading,
    favoriteTrips,
    similarTrips,
    recommendedTrips,
    favoriteTripsIDs,
  } = useSelector(favoriteTripsSelector);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserFavTrips());
    }
  }, [dispatch, isAuthenticated]);

  const handleDeleteFavTrips = (e, id) => {
    e.stopPropagation();
    dispatch(deleteFavoriteTrip(id));
  };

  if (loading || appLoading) return <PageLoading />;
  return (
    <div className="relative">
      <Header customStyles="shadow-md !bg-white z-60" />
      <div className="py-4 px-10 onlyMobile:px-4">
        {favoriteTrips.length > 0 ? (
          favoriteTrips?.map(
            ({
              _id,
              image,
              tripName,
              mdDescription,
              likes,
              review,
              cardImage,
            }) => (
              <FavTripCard
                key={_id}
                id={_id}
                title={tripName}
                description={mdDescription}
                likesCount={likes}
                image={cardImage || imageUrl}
                review={review}
                showDelete={true}
                handleDelete={(e) => handleDeleteFavTrips(e, _id)}
                path={"/trip/" + _id}
              />
            )
          )
        ) : (
          <div className="h-[300px] text-h1 flex justify-center items-center">
            No FavoriteTrips added !
          </div>
        )}
      </div>
      {favoriteTrips.length > 0 ? (
        <div className="px-10 py-1 onlyMobile:px-4 bg-primaryBackground">
          <div className="py-2">
            <h1 className="text-h7 font-one">{`Similar Experiences`}</h1>
            <p className="text-body pb-4 font-ubuntu">
              {`Traveller's Choice for the best experience.`}
            </p>
            <div className="relative">
              <Slider {...settings}>
                {similarTrips?.map(
                  ({
                    _id,
                    image,
                    tripName,
                    smDescription,
                    likes,
                    review,
                    cardImage,
                  }) => {
                    if (!favoriteTripsIDs?.includes(_id))
                      return (
                        <TripCard
                          key={_id}
                          id={_id}
                          path={"/trip/" + _id}
                          image={cardImage || imageUrl}
                          title={tripName}
                          description={smDescription}
                          likesCount={likes}
                          reviewCount={review}
                          disableHeart
                          customStyles="2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]"
                        />
                      );
                  }
                )}
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {favoriteTrips.length > 0 ? (
        <div className="px-10 py-1 onlyMobile:px-4 bg-primaryBackground">
          <div className="py-2">
            <h1 className="text-h7 font-one capitalize">{`recommended for You`}</h1>
            <p className="text-body pb-4 font-ubuntu">
              {`Traveller's Choice for the best experience.`}
            </p>
            <div className="relative">
              <Slider {...settings}>
                {recommendedTrips?.map(
                  ({
                    _id,
                    // image,
                    tripName,
                    smDescription,
                    likes,
                    review,
                    cardImage,
                  }) => {
                    if (!favoriteTripsIDs?.includes(_id))
                      return (
                        <TripCard
                          key={_id}
                          id={_id}
                          path={"/trip/" + _id}
                          image={cardImage || imageUrl}
                          title={tripName}
                          description={smDescription}
                          likesCount={likes}
                          reviewCount={review}
                          disableHeart
                          customStyles="2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]"
                        />
                      );
                  }
                )}
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

FavTripPage.propTypes = {};

export default FavTripPage;
