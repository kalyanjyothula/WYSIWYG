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
    getFavoriteTrips(state, action) {
      console.log("called getFavoriteTrips");
    },
    getFavoriteTripsSuccess(state, { payload }) {
      return { ...state, favoriteTrips: [...payload.trips] };
    },
    getFavoriteTripsFail(state, { payload }) {
      return { ...state };
    },
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
    addToFavoriteTrip(state, { payload }) {
      if (!state.favoriteTrips.includes(payload)) {
        state.favoriteTrips.push(payload);
        return state;
      } else {
        const fav = state.favoriteTrips.filter((ele) => ele !== payload);
        return { ...state, favoriteTrips: [...fav] };
      }
    },
  },
});

export const {
  addToFavoriteTrip,
  getFavoriteTrips,
  getFavoriteTripsFail,
  getFavoriteTripsSuccess,
  getHomePageData,
  getHomePageDataFail,
  getHomePageDataSuccess,
} = homePageReducer.actions;

export const homePageSelector = (state) => state.homePage; // name of the reducer in store

export default homePageReducer.reducer;
