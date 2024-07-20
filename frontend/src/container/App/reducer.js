import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "app",
  initialState: {
    userInfo: "",
    isAuthenticated: false,
    loading: false,
    selectedId: "",
    isOpen: false,
    componentStyle: {}
  },
  reducers: {
    getUserInfo(state) {
      return { ...state, loading: true, isAuthenticated: false };
    },
    getUserInfoFail(state) {
      return { ...state, loading: false, isAuthenticated: false };
    },
    setUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: payload,
        isAuthenticated: true,
        loading: false,
        errorMsg: "",
      };
    },
    userLogOut(state) {
      return { ...state, errorMsg: "" };
    },
    googleLoginInfo(state, { payload }) {
      return { ...state, googleLoginInfo: payload, errorMsg: "" };
    },
    googleLoginInfoSuccess(state, { payload }) {
      return {
        ...state,
        userInfo: { payload },
        isAuthenticated: true,
        errorMsg: "",
        loading: false,
      };
    },
    googleLoginInfoFail(state) {
      return {
        ...state,
        errorMsg: "Login Failed",
        isAuthenticated: false,
        loading: false,
      };
    },
    openStyleModel(state, { payload }) {
      return { ...state, isOpen: payload?.id ? true : false, selectedId: payload?.id };
    },
    updateComponentStyle(state, { payload }) {
      return {
        ...state,
        componentStyle: { ...state.componentStyle, [payload.id]: { ...payload.props } },
        isOpen: false, selectedId: ""
      };
     }
  },
});

export const {
  getUserInfo,
  setUserInfo,
  googleLoginInfo,
  getUserInfoFail,
  userLogOut,
  googleLoginInfoSuccess,
  googleLoginInfoFail,
  openStyleModel,
  updateComponentStyle,
} = userReducer.actions;

export const appSelector = (state) => state.app;

export default userReducer.reducer;
