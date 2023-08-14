import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  appSelector,
  getSearchSuggestions,
  getSearchSuggestionsFail,
  getSearchSuggestionsSuccess,
  getUserInfo,
  getUserInfoFail,
  googleLoginInfo,
  googleLoginInfoFail,
  setUserInfo,
  userLogOut,
} from "./reducer";
import axios from "axios";

export function* getUserSaga() {
  try {
    const url = "/api/user/getMe";
    const {
      data: { success, mobile, email, token, id },
    } = yield call(axios, { method: "GET", url });
    if (success) {
      yield put(
        setUserInfo({ mobile: mobile, email: email, token: token, id: id })
      );
    } else yield put(getUserInfoFail());
  } catch (error) {
    console.log(error);
    yield put(getUserInfoFail());
  }
}

export function* userLogOutAsync() {
  try {
    const url = "/api/user/logout";
    const {
      userInfo: { email, token },
    } = yield select(appSelector);
    const {
      data: { success },
    } = yield call(axios, {
      method: "POST",
      url,
      data: { email },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (success) window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}

export function* googleLoginInfoAsync({ payload }) {
  try {
    const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${payload.access_token}`;
    const {
      data: { email },
    } = yield call(axios, { method: "GET", url });
    if (email) {
      const url = "/api/user/register";
      const { data } = yield call(axios, {
        method: "POST",
        data: {
          email: email,
          mobile: parseInt(
            Math.random() * (9999999999 - 1000000000 + 1 + 1000000000)
          ),
          password: `${email} ${payload.access_token}`,
        },
        url,
      });
      if (data.success)
        yield put(
          setUserInfo({
            mobile: data.mobile,
            email: email,
            token: data.token,
            id: data.id,
          })
        );
      else yield put(googleLoginInfoFail());
    } else yield put(googleLoginInfoFail());
  } catch (error) {
    yield put(googleLoginInfoFail());
    console.log(error);
  }
}

export function* getSearchSuggestionsAsync({ payload }) {
  // console.log(payload, "pa");
  try {
    if (payload) {
      const url = "/api/trip/search-suggestion";
      const { data } = yield call(axios, {
        method: "POST",
        url: url,
        data: { text: payload },
      });
      if (data.success) yield put(getSearchSuggestionsSuccess(data.search));
      else yield put(getSearchSuggestionsFail());
    }
  } catch (error) {
    yield put(getSearchSuggestionsFail());
    console.log(error);
  }
}

export const AppSaga = [
  takeLatest(getUserInfo.type, getUserSaga),
  takeLatest(userLogOut.type, userLogOutAsync),
  takeLatest(googleLoginInfo.type, googleLoginInfoAsync),
  takeLatest(getSearchSuggestions.type, getSearchSuggestionsAsync),
];
