import {
  // useState,
  useEffect
} from "react";
// import PropTypes from 'prop-types';
// import { FiSearch } from "react-icons/fi";
import { Header, Footer } from "../../components/Organism";
// import homePageData from "./../../data/homepage";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./slick-custom.css";
import {
  // addToFavoriteTrip,
  getFavoriteTrips,
  // getHomePageData,
  // homePageSelector,
} from "./reducer";
import {
  appSelector,
  // getSearchSuggestions
} from "../App/reducer";
import PageLoading from "../../components/Organism/PageLoading";
// import defaultImage from "../../images/tripCards/nature/araku.jpeg";

function HomePage() {
  // const { tripCards } = homePageData;
  // const categoryKeys = Object.keys(tripCards);
  // const settings = {
  //   speed: 300,
  //   infinite: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1366,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: "unslick",
  //     },
  //   ],
  // };
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, userInfo } =
    useSelector(appSelector);
  // const [searchText, setSearchText] = useState("");
  // const [showSuggestions, setShowSuggestions] = useState(false);

  // const {
  //   favoriteTrips,
  //   homepageData,
  //   loading: homeLoading,
  // } = useSelector(homePageSelector);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(
        getFavoriteTrips({ email: userInfo.email, token: userInfo.token })
      );
    }
  }, [dispatch, isAuthenticated, userInfo.email, userInfo.token]);

  // useEffect(() => {
  //   if (homepageData?.length <= 0) dispatch(getHomePageData());
  // }, [dispatch, homepageData]);

  // const handleSearchTextChange = (e) => {
  //   e.stopPropagation();
  //   const { value } = e.target;
  //   setSearchText(value);
  //   setShowSuggestions(true);
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   navigate(`/search/${searchText}`);
  // };

  // const handleAddFavorite = (e, id) => {
  //   e.preventDefault();
  //   dispatch(addToFavoriteTrip(id));
  // };

  // useEffect(() => {
  //   const timer = setTimeout(
  //     () => dispatch(getSearchSuggestions(searchText)),
  //     100
  //   );
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [dispatch, searchText]);

  if (loading) return <PageLoading />;

  return (
    <div>
      {/* <div
        className="bg-heroBannerGradient w-full h-[70vh] 
      bg-no-repeat bg-center bg-cover flex flex-col"
      >
        <Header />
      </div> */}
      <Header customStyles="shadow-md !bg-white z-60" />
      <div className="min-h-[600px] onlyMobile:min-h-[400px] flex justify-center items-center flex-col px-4 py-4">
        <h1 className="text-h0 text-center font-ubuntu pt-4 font-bold onlyMobile:text-h6">
          Welcome to {' '}
          <span className="text-primaryBlue font-bold underline underline-offset-4">
            SeeWrite
          </span> {' '}
          – Where Creativity Meets Convenience.
        </h1>
        <p className="text-h8 text-center font-ubuntu pt-8">
          Feel free to customize app with your actual application name. This
          sentence aims to be inviting and convey the essence of what users can
          expect from your app.
        </p>
      </div>
      <Footer />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
