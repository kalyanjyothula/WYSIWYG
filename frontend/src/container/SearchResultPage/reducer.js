import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorMsg: "",
  result: [],
  filter: {
    theme: "",
    duration: "",
    weather: "",
    country: "",
    city: "",
    accommodation: [],
    activities: [],
  },
};

const searchPageReducer = createSlice({
  name: "searchPage",
  initialState: initialState,
  reducers: {
    getSearchResult(state) {
      return { ...state, loading: true, errorMsg: "", result: [] };
    },
    getSearchResultSuccess(state, { payload }) {
      return { ...state, loading: false, errorMsg: "", result: [...payload] };
    },
    getSearchResultFail(state) {
      return {
        ...state,
        loading: false,
        errorMsg: "Something Went Wrong !",
        result: [],
      };
    },
    handleFilterChange(state, { payload }) {
      const { name, value } = payload;
      if (name === "accommodation" || name === "activities") {
        const { filter } = state;
        if (filter[name].includes(value)) {
          const newData = filter[name].filter((item) => item !== value);
          return {
            ...state,
            filter: {
              ...state.filter,
              [name]: [...newData],
            },
          };
        } else
          return {
            ...state,
            filter: {
              ...state.filter,
              [name]: [...state.filter[name], value],
            },
          };
      } else return { ...state, filter: { ...state.filter, [name]: value } };
    },
  },
});

export const {
  getSearchResult,
  getSearchResultSuccess,
  getSearchResultFail,
  handleFilterChange,
} = searchPageReducer.actions;

export const searchPageResultSelector = (state) => state.searchPage;

export default searchPageReducer.reducer;
