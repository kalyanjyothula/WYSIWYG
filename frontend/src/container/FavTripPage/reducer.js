import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteTrips: [],
  loading: false,
};

const favoriteTripsReducer = createSlice({
  name: "favoriteTrips",
  initialState: initialState,
  reducers: {
    fetchUserFavTrips(state) {
      return { ...state, loading: true, errorMsg: "" };
    },
    fetchUserFavTripsSuccess(state, { payload }) {
      return { ...state, loading: false, errorMsg: "", ...payload };
    },
    fetchUserFavTripsFail(state) {
      return { ...state, loading: false, errorMsg: "Something Went Wrong !" };
    },
    deleteFavoriteTrip(state, { payload }) {
      const tmp = state.favoriteTrips.filter(({ _id }) => _id !== payload);
      return {
        ...state,
        favoriteTrips: [...tmp],
      };
    },
  },
});

export const {
  fetchUserFavTrips,
  fetchUserFavTripsFail,
  fetchUserFavTripsSuccess,
  deleteFavoriteTrip,
} = favoriteTripsReducer.actions;

export const favoriteTripsSelector = (state) => state.favTripPage;

export default favoriteTripsReducer.reducer;
