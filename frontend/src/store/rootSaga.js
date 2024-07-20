import { all } from "redux-saga/effects";
import { AppSaga } from "../container/App/saga";
import { homePageSaga } from "../container/HomePage/saga";

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([
    ...AppSaga,
    ...homePageSaga,
  ]);
  // yield takeLatest(getUser.type, getUserSaga);
}
