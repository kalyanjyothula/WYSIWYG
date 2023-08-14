import { useState } from "react";
import PropTypes from "prop-types";

function RangeSlider({ min, max, steps }) {
  const [rangeValue, setRangeValue] = useState(0);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
    console.log(rangeValue);
  };
  return (
    <div className="py-2">
      <label
        htmlFor="steps-range"
        className="block mb-4 text-body1 font-bold text-gray-900  font-ubuntu"
      >
        Budget Range
      </label>
      {/* <p className='text-body1 font-ubuntu'>
        {' '}
        fare &lt; <span className='font-bold'>{rangeValue}</span>
      </p> */}
      <input
        id="steps-range"
        type="range"
        min={min || 0}
        max={max || 50000}
        onChange={handleRangeChange}
        value={rangeValue || 1000}
        step={steps || 100}
        className={` relative w-full h-2 bg-gray-400 rounded-lg appearance-none 
        cursor-pointer after:content-[attr(value)] after:w-fit after:h-[40px] 
        after:absolute  after:font-ubuntu after:-top-12 after:right-0 after:text-black
        after:text-center after:shadow-md after:p-2 after:bg-white after:rounded-lg`}
      />
    </div>
  );
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  steps: PropTypes.string,
};

export default RangeSlider;
