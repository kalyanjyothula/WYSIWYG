import axios from "axios";

import { takeLatest, call, put } from "redux-saga/effects";
import {
  createAccount,
  createAccountFail,
  createAccountSuccess,
} from "./reducer";

export function* createAccountAsync({ payload }) {
  try {
    const url = "/api/user/register";
    const { data } = yield call(axios, { method: "POST", data: payload, url });
    console.log(data);
    if (data.success) {
      yield put(
        createAccountSuccess({
          id: data._id,
          mobile: data.mobile,
          email: data.email,
          token: data.token,
        })
      );
      yield (window.location.href = "/");
    } else yield put(createAccountFail(data.message));
  } catch (error) {
    const r = 2 + 3;
    console.log(r);
    yield put(createAccountFail(error.response.data.message));
    console.log(error);
  }
}

export const signupPageSaga = [
  takeLatest(createAccount.type, createAccountAsync),
];
