import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSearchResult,
  getSearchResultFail,
  getSearchResultSuccess,
} from "./reducer";

export function* getSearchResultAsync({ payload }) {
  console.log(payload, "ap");
  try {
    const url = "/api/trip/search-result";
    const { data } = yield call(axios, {
      method: "Post",
      url: url,
      data: { key: payload },
    });
    if (data.success) yield put(getSearchResultSuccess(data.data));
    else yield put(getSearchResultFail());
  } catch (error) {
    yield put(getSearchResultFail());
    console.log(error);
  }
}

export const searchResultSaga = [
  takeLatest(getSearchResult.type, getSearchResultAsync),
];
