import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loginInfo: "",
  errorMsg: "",
};

const loginPageReducer = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    userLogin(state, { payload }) {
      return { ...state, loading: true, loginInfo: payload, errorMsg: "" };
    },
  },
});

export const { userLogin } = loginPageReducer.actions;

export const loginPageSelector = (state) => state.loginPage;

export default loginPageReducer.reducer;
