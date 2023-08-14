import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../container/App/reducer";
import homePageReducer from "../container/HomePage/reducer";
import signupPageReducer from "../container/SignupPage/reducer";
import loginPageReducer from "../container/LoginPage/reducer";
import favTripPageReducer from "../container/FavTripPage/reducer";
import searchPageReducer from "../container/SearchResultPage/reducer";
import tripPageReducer from "../container/TripPage/reducer";

export const reducer = combineReducers({
  app: userReducer,
  homePage: homePageReducer,
  signupPage: signupPageReducer,
  loginPage: loginPageReducer,
  favTripPage: favTripPageReducer,
  searchPage: searchPageReducer,
  tripPage: tripPageReducer,
});
