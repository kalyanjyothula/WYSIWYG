// import React from "react";
// import PropTypes from "prop-types";

function PageLoading() {
  return (
    <div className="h-screen bg-white z-10 flex justify-center items-center text-center">
      <div className="flex justify-center items-center pl-4 pr-4">
        <div
          className="border border-[#eef3f4] 
        rounded-[50%] bg-[#fdfdfd] shadow-lg w-[248px] h-[248px] 
        relative flex justify-center items-center mt-10 ml-auto mb-20 
        onlyMobile:w-[148px] onlyMobile:h-[148px] onlyMobile:mt-20"
        >
          <div
            className="animate-spin rounded-[50%] 
           border-4 border-l-[#4c4cf1] border-t-[#4c4cf1] 
           absolute -left-10 -right-10 -bottom-10 -top-10  before:absolute 
           before:w-[10px] before:h-[10px] before:border-[6px] 
           before:shadow-lg before:border-[#4c4cf1]
           before:top-[36px] before:right-[42px] before:rounded-[50%]
           onlyMobile:before:top-[24px] onlyMobile:before:right-[24px]"
          ></div>
          <h1 className="font-one text-h6 self-center">
            Beyond
            <p className="font-ubuntu text-caption text-[10px] uppercase font-bold">
              Loading ...
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}

PageLoading.propTypes = {};

export default PageLoading;
