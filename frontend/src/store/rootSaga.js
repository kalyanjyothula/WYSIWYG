import { all } from "redux-saga/effects";
import { AppSaga } from "../container/App/saga";
import { homePageSaga } from "../container/HomePage/saga";
import { signupPageSaga } from "../container/SignupPage/saga";
import { loginPageSaga } from "../container/LoginPage/saga";
import { favoriteTripPageSaga } from "../container/FavTripPage/saga";
import { searchResultSaga } from "../container/SearchResultPage/saga";
import { tripPageSaga } from "../container/TripPage/saga";

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([
    ...AppSaga,
    ...homePageSaga,
    ...signupPageSaga,
    ...loginPageSaga,
    ...favoriteTripPageSaga,
    ...searchResultSaga,
    ...tripPageSaga,
  ]);
  // yield takeLatest(getUser.type, getUserSaga);
}
