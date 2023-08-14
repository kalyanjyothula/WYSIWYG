import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorMsg: "",
  tripData: null,
  similarTrips: [],
  nearBy: [],
  routes: [],
  trip: {},
};

const tripPageReducer = createSlice({
  name: "tripPage",
  initialState: initialState,
  reducers: {
    getTripData(state, { payload }) {
      return {
        ...state,
        loading: true,
        id: payload,
        errorMsg: "",
        routes: [],
        nearBy: [],
        similarTrips: [],
      };
    },
    getTripDataSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        trip: payload.trip,
        similarTrips: payload.similarTrips,
        nearBy: payload.nearBy,
        routes: payload.routes,
        errorMsg: "",
      };
    },
    getTripDataFail(state) {
      return {
        ...state,
        loading: false,
        errorMsg: "Something Went Wrong!",
        routes: [],
        nearBy: [],
        similarTrips: [],
      };
    },
  },
});

export const { getTripData, getTripDataSuccess, getTripDataFail } =
  tripPageReducer.actions;

export const tripPageSelector = (state) => state.tripPage;

export default tripPageReducer.reducer;
