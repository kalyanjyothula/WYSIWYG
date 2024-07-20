import axios from "axios";
import {
  call, put,
  takeLatest
} from "redux-saga/effects";

import {

  getHomePageData,
  getHomePageDataFail,
  getHomePageDataSuccess,
} from "./reducer";


export function* getHomePageDataAsync() {
  try {
    const url = "/api";
    const {
      data: { success, data },
    } = yield call(axios, {
      method: "GET",
      url: url,
    });
    if (success) {
      yield put(getHomePageDataSuccess(data));
    } else yield put(getHomePageDataFail());
  } catch (error) {
    yield put(getHomePageDataFail());
    console.log(error);
  }
}

export const homePageSaga = [
  takeLatest(getHomePageData.type, getHomePageDataAsync),
];
