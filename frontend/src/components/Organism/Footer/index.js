// import React from 'react';
// import PropTypes from 'prop-types';
import homePageData from "../../../data/homepage";
import { FaFacebookF, FaTwitter, FaRegCopyright } from "react-icons/fa";

function Footer() {
  const { questions } = homePageData.footer;
  // console.log(questions);
  return (
    <div>
      <div className="bg-secondaryBackground grid grid-cols-3 gap-x-4 gap-y-2 px-10 onlyMobile:px-4 py-20 onlyMobile:grid-cols-1">
        {questions.map(({ id, title, description }) => (
          <div className="p-2" key={id}>
            <h1 className="text-h7 font-ubuntu pb-4">{title}</h1>
            <p className="text-body4 font-ubuntu leading-4 pr-4">
              {description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-10 onlyMobile:px-4 py-16 bg-black items-center">
        <div className="flex gap-x-8 onlyMobile:gap-x-4">
          <FaTwitter className="h-8 w-8 text-white" />
          <FaFacebookF className="h-8 w-8 text-white" />
        </div>
        <div className=" text-white ">
          <div className="flex gap-x-2 items-center">
            <FaRegCopyright className="h-4 w-4" />
            <p className="text-h8 inline-block font-ubuntu uppercase">
              {new Date().getFullYear().toString()} Beyond PVT. LTD
            </p>
          </div>
          <h1 className="text-h8 font-ubuntu leading-4 text-right">India.</h1>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
