// import React from "react";
import PropTypes from "prop-types";

function Button({
  type,
  name,
  text,
  onClick,
  height,
  width,
  customStyle,
  loading,
}) {
  return onClick ? (
    <button
      type={type}
      name={name}
      onClick={onClick}
      className={`h-[${height}] w-[${width}] py-2 px-4
      rounded-md text-body1 tracking-[1px]
      text-white font-ubuntu font-bold ${customStyle}`}
    >
      {text}
    </button>
  ) : (
    <button
      type={type}
      name={name}
      className={`h-[${height}] w-[${width}] py-2 px-4
       rounded-md text-body1 tracking-[1px]
       text-white font-ubuntu font-bold ${customStyle} relative ${
        loading && "bg-slate-400 text-slate-400"
      }`}
      disabled={loading}
    >
      {text}
      {/* <div
        className={`h-6 w-6 border-slate-300 absolute top-2 
        left-[calc(50%-12px)] rounded-2xl border-4 animate-spin`}
      ></div> */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-6 w-6 text-white absolute top-2 left-[calc(50%-12px)]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;
