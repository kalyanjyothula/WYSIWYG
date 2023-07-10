import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { appSelector } from "../App/reducer";
import {
  addToFavoriteTrip,
  getFavoriteTrips,
  getFavoriteTripsFail,
  getFavoriteTripsSuccess,
} from "./reducer";

export function* addToFavoriteTripAsync({ payload }) {
  try {
    const url = "/api/fav-trips/add-fav";
    const {
      userInfo: { email, token },
    } = yield select(appSelector);
    const {
      data: { success },
    } = yield call(axios, {
      method: "POST",
      url: url,
      data: { email: email, trip: payload },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}

export function* getFavoriteTripsAsync({ payload }) {
  try {
    const url = "/api/fav-trips";
    const {
      data: { success, favTrips },
    } = yield call(axios, {
      method: "POST",
      url: url,
      data: { email: payload.email },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${payload.token}`,
      },
    });
    if (success) {
      yield put(getFavoriteTripsSuccess({ trips: favTrips.trips }));
    } else yield put(getFavoriteTripsFail());
  } catch (error) {
    yield put(getFavoriteTripsFail());
    console.log(error);
  }
}

export const homePageSaga = [
  takeLatest(addToFavoriteTrip.type, addToFavoriteTripAsync),
  takeLatest(getFavoriteTrips.type, getFavoriteTripsAsync),
];
