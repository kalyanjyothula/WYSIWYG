import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { appSelector } from "../App/reducer";
import {
  deleteFavoriteTrip,
  fetchUserFavTrips,
  fetchUserFavTripsFail,
  fetchUserFavTripsSuccess,
} from "./reducer";

export function* fetchUserFavTripsAsync() {
  try {
    const {
      userInfo: { email, token },
    } = yield select(appSelector);
    const url = "/api/trip/user-fav-trips";
    const { data } = yield call(axios, {
      method: "POST",
      url: url,
      data: { email: email },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    // console.log(data);
    if (data.success) {
      yield put(
        fetchUserFavTripsSuccess({
          favoriteTrips: data.trips,
          recommendedTrips: data.recommendedTrips,
          similarTrips: data.similarTrips,
          favoriteTripsIDs: data.favTripsList,
        })
      );
    } else yield put(fetchUserFavTripsFail());
  } catch (error) {
    yield put(fetchUserFavTripsFail());
    console.log(error);
  }
}

export function* deleteFavoriteTripAsync({ payload }) {
  try {
    const url = "/api/fav-trips/remove-favTrip";
    const {
      userInfo: { token, email },
    } = yield select(appSelector);
    const { data } = yield call(axios, {
      method: "DELETE",
      url,
      data: { id: payload, email: email },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    console.log(data, "data");
  } catch (error) {
    console.log(error);
  }
}

export const favoriteTripPageSaga = [
  takeLatest(fetchUserFavTrips.type, fetchUserFavTripsAsync),
  takeLatest(deleteFavoriteTrip.type, deleteFavoriteTripAsync),
];
