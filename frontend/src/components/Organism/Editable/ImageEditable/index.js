/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector } from "../../../../container/App/reducer";

const ImageEditable = ({ left, top, id, openModel }) => {
  const [imageSrc, setImageSrc] = useState("https://dummyimage.com/150x150");
  const [showInput, setShowInput] = useState(false);


  const handleMouseEnter = () => {
    setShowInput(true);
  };

  const handleMouseLeave = () => {
    setShowInput(false);
  };

  const dispatch = useDispatch();
  const appState = useSelector(appSelector);
  const { componentStyle } = appState;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModel = (e) => {
    e.stopPropagation();
    dispatch(openModel({ id }));
  };

  return (
    <div style={{ position: "absolute", left, top }}>
      <div
        className={`relative w-full h-full min-w-[150px] min-h-[150px] ${showInput && 'border flex items-center'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imageSrc}
          alt="Uploaded"
          width="150"
          height="150"
          style={{ componentStyle }}
          className={`${showInput && "hidden"}`}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={`h-full w-full min-h-40 min-w-[100px] text-black ${
            !showInput && "hidden"
          }`}
        />
      </div>
      <FiEdit
        className="absolute right-0 -top-6 text-black mr-1 mt-1 cursor-pointer"
        // onClick={handleOpenModel}
      />
    </div>
  );
};

ImageEditable.propTypes = {
  left: PropTypes.string,
  top: PropTypes.string,
  id: PropTypes.string.isRequired,
  openModel: PropTypes.func.isRequired,
};

export default ImageEditable;
