import React from "react";
import { Route, Routes } from "react-router-dom";;
import HomePage from "../HomePage";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../Dashboard";
import StylePrompt from "../../components/Organism/StylePrompt";
import { appSelector } from "./reducer";

// import "./App.css";

function App() {

  const appState = useSelector(appSelector)

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route> */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
      <StylePrompt
        isOpen={appState.isOpen}
        selectedComponentId={appState.selectedId}
      />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
