// import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import homePageData from "./../../data/homepage";

function HeroBanner() {
  const { image } = homePageData.heroBanner;
  return (
    <div
      className="h-[calc(100vh-200px)] relative 
            after:absolute after:h-full after:w-full after:inset-0
            after:bg-black after:opacity-20"
    >
      <img
        src={image}
        alt="heroBanner"
        className="block object-cover h-full w-full"
      />
      <div className="z-10 bg-red">Hi</div>
    </div>
  );
}

HeroBanner.propTypes = {};

export default HeroBanner;
