// import React from "react";
// import PropTypes from "prop-types";
import { Header } from "../../components/Organism";
import imgUrl from "../../images/under-construction.jpeg";

function ProfilePage() {
  return (
    <div>
      <Header customStyles="shadow-md bg-white" />
      <div className="w-full h-full">
        <img src={imgUrl} alt="img" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default ProfilePage;
