import { useState } from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector } from "../../../../container/App/reducer";


const ButtonEditable = ({ left, top, id , openModel }) => {
  const [buttonText, setButtonText] = useState("Click Me");
  const [showInput, setShowInput] = useState(false);
   const dispatch = useDispatch();
   const appState = useSelector(appSelector);
   const { componentStyle } = appState;

  const handleTextChange = (event) => {
    setButtonText(event.target.value);
  };

  const handleMouseEnter = () => {
    setShowInput(true)
  }

   const handleMouseLeave = () => {
     setShowInput(false);
   };

  console.log(componentStyle)

  const customStyle = {
    backgroundColor: componentStyle[id]?.backgroundColor,
    fontSize: `${componentStyle[id]?.fontSize}px`,
    color: componentStyle[id]?.textColor,
  };

  const handleOpenModel = (e) => {
    e.stopPropagation();
    dispatch(openModel({ id }));
  };

  return (
    <div
      style={{ position: "absolute", left, top, ...customStyle }}
      className="min-h-40 w-fit p-3 border-slate-600 border-1 bg-blue-500 rounded-md text-white"
    >
      <div
        className="relative h-full w-full "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="text"
          value={buttonText}
          onChange={handleTextChange}
          className={`h-full w-full min-h-40 min-w-[100px] text-black ${
            !showInput && "hidden"
          }`}
        />
        <button className={`${showInput && "hidden"}`}>{buttonText}</button>
      </div>
      <FiEdit
        className="absolute right-0 top-0 text-black mr-1 mt-1 cursor-pointer"
        onClick={handleOpenModel}
      />
    </div>
  );
};

ButtonEditable.propTypes = {
  left: PropTypes.string,
  top: PropTypes.string,
  id: PropTypes.string.isRequired,
  openModel: PropTypes.func.isRequired,
};

export default ButtonEditable;
