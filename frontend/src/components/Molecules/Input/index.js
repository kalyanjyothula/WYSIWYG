// import React from 'react';
import PropTypes from "prop-types";
import "./input.css";

function InputField({ label, type, name, placeholder, onChange, ...rest }) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      {label && <p className="text-h9 font-ubuntu">{label} </p>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full h-12 border px-2 rounded-md font-ubuntu"
        {...rest}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
