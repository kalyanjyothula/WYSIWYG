import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { getUser } from './reducer';
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
// import ItemView from "../ItemView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "../SignupPage";
import FavTripPage from "../FavTripPage";
import SearchResultPage from "../SearchResultPage";
import TripPage from "../TripPage";
import { appSelector, getUserInfo } from "./reducer";
import ProfilePage from "../ProfilePage";
// import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(appSelector);
  useEffect(() => {
    if (!isAuthenticated) dispatch(getUserInfo());
  }, [dispatch, isAuthenticated]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/fav-trips" element={<FavTripPage />}></Route>
        <Route path="/search/:key" element={<SearchResultPage />}></Route>
        <Route path="/trip/:id" element={<TripPage />}></Route>
        <Route path="/view/:id" element={<ProfilePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>
        {/* <Route path="/itemView/:id" element={<ItemView />}></Route> */}
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
