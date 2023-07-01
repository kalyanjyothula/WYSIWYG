import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, options }) {
  return (
    <div className='w-full py-2'>
      <label
        htmlFor={label}
        className='block text-body1 font-bold
         text-gray-900 font-ubuntu py-2'
      >
        {label}
      </label>
      <select
        id={label}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-body1 
        rounded-lg block w-full p-2.5'
      >
        <option selected>Choose {label}</option>
        {options.map(({ id, itemName }) => (
          <option key={id} value={itemName}>
            {itemName}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default Select;
