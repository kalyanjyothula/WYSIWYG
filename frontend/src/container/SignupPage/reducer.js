/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration: {},
  loading: false,
  errorMsg: "",
};

const signupReducer = createSlice({
  name: "signupPage",
  initialState: initialState,
  reducers: {
    createAccount(state, { payload }) {
      return { ...state, registration: payload, loading: true, errorMsg: "" };
    },
    createAccountSuccess(state, { payload }) {
      return { ...state, loading: false, userInfo: payload, errorMsg: "" };
    },
    createAccountFail(state, { payload }) {
      return { ...state, loading: false, errorMsg: payload };
    },
  },
});

export const { createAccount, createAccountSuccess, createAccountFail } =
  signupReducer.actions;

export const signupPageSelector = (state) => state.signupPage;

export default signupReducer.reducer;
