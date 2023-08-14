import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getTripData, getTripDataFail, getTripDataSuccess } from "./reducer";

export function* getTripDataAsync({ payload }) {
  try {
    const url = "/api/trip";
    const { data } = yield call(axios, {
      method: "POST",
      url: url,
      data: { id: payload },
    });
    if (data.success) {
      yield put(getTripDataSuccess(data.data));
    } else yield put(getTripDataFail());
  } catch (error) {
    yield put(getTripDataFail());
    console.log(error);
  }
}

export const tripPageSaga = [takeLatest(getTripData.type, getTripDataAsync)];
