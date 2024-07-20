/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteTrips: [],
  homepageData: [],
};

const homePageReducer = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    getHomePageData(state) {
      return { ...state, loading: true, errorMsg: "" };
    },
    getHomePageDataSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        errorMsg: "",
        homepageData: [...payload],
      };
    },
    getHomePageDataFail(state) {
      return { ...state, loading: false, errorMsg: "Something Went Wrong !" };
    },
  },
});

export const {
  getHomePageData,
  getHomePageDataFail,
  getHomePageDataSuccess,
} = homePageReducer.actions;

export const homePageSelector = (state) => state.homePage; // name of the reducer in store

export default homePageReducer.reducer;
