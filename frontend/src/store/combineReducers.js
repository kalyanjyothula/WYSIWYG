import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../container/App/reducer";
import homePageReducer from "../container/HomePage/reducer";

export const reducer = combineReducers({
  app: userReducer,
  homePage: homePageReducer,
});
