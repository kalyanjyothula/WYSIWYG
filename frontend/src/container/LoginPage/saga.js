import axios from "axios";

import { call, put, takeLatest } from "redux-saga/effects";
import { googleLoginInfoFail, setUserInfo } from "../App/reducer";
import { userLogin } from "./reducer";

export function* userLoginAsync({ payload }) {
  try {
    const url = "/api/user/login";
    const { data } = yield call(axios, {
      method: "POST",
      url: url,
      data: { ...payload },
    });
    if (data.success)
      yield put(
        setUserInfo({
          _id: data.id,
          mobile: data.mobile,
          email: data.email,
          token: data.token,
        })
      );
    else yield put(googleLoginInfoFail());
  } catch (error) {
    yield put(googleLoginInfoFail());
    console.log(error);
  }
}

export const loginPageSaga = [takeLatest(userLogin.type, userLoginAsync)];
