// import React from "react";
import PropTypes from "prop-types";

function RadioGroup({ label, options, handleSelect }) {
  return (
    <div className="py-2">
      <h1 className="font-ubuntu text-body1 font-bold">{label}</h1>
      <div className="pl-1 pt-1 ">
        {options.map(({ label, id, groupName }) => (
          <div className="flex items-center " key={id}>
            <input
              id={id}
              type="radio"
              value={label === "clear" ? "" : label}
              name={groupName}
              className="w-4 h-4 text-blue-600
                bg-gray-100 border-gray-300 cursor-pointer"
              onClick={handleSelect}
            />
            <label
              htmlFor={id}
              className="w-full py-1 ml-2 text-sm font-medium 
                text-gray-900 capitalize cursor-pointer"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default RadioGroup;
