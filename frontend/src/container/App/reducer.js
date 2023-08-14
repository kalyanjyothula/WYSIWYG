import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "app",
  initialState: {
    userInfo: "",
    isAuthenticated: false,
    loading: false,
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
    getSearchSuggestions(state, { payload }) {
      return { ...state, searchText: payload };
    },
    getSearchSuggestionsSuccess(state, { payload }) {
      return { ...state, searchSuggestions: [...payload] };
    },
    getSearchSuggestionsFail(state) {
      return { ...state, searchSuggestions: [] };
    },
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
  getSearchSuggestions,
  getSearchSuggestionsSuccess,
  getSearchSuggestionsFail,
} = userReducer.actions;

export const appSelector = (state) => state.app;

export default userReducer.reducer;
