import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, openStyleModel, updateComponentStyle } from "../../../container/App/reducer";
import {Button} from '../../Molecules';

const StylePrompt = ({ selectedComponentId, isOpen }) => {


    const dispatch = useDispatch()
    const appStore = useSelector(appSelector)
    const [style, setStyle] = useState(appStore ? appStore.componentStyle[selectedComponentId] : null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
    };
        
    const handleCloseModel = (e) => {
    e.stopPropagation();
    dispatch(openStyleModel({ id: "" }));
    };

    const handleChangeModel = (e) => { 
        e.stopPropagation()
    }
    
    const applyStyle = () => {
        console.log("Apply style", selectedComponentId, style);
        dispatch(updateComponentStyle({id: selectedComponentId, props: style}))
    }


  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 h-full w-full z-50 bg-stone-800 bg-opacity-25 ${
        !isOpen && "hidden"
      }`}
      onClick={handleCloseModel}
    >
      <div className="flex justify-center items-center h-full">
        <div
          className="flex flex-col  h-fit p-10 max-w-[750px] w-full bg-white rounded-lg"
          onClick={handleChangeModel}
        >
          <h3 className="text-center font-bold underline pb-4">Edit Styles</h3>
          <label className="pb-4">
            Font Size:
            <input
              type="number"
              name="fontSize"
              className="pl-4 border-2 rounded-lg ml-2"
              value={style?.fontSize || ""}
              onChange={handleChange}
            />
          </label>
          <label className="pb-4">
            Background Color:
            <input
              type="color"
              name="backgroundColor"
              className=" border-2 rounded-lg ml-2"
              value={style?.backgroundColor || ""}
              onChange={handleChange}
            />
          </label>
          <label className="pb-4">
            Text Color:
            <input
              type="color"
              name="textColor"
              className=" border-2 rounded-lg ml-2"
              value={style?.textColor || ""}
              onChange={handleChange}
            />
          </label>
          <Button
            type="button"
            name="apply"
            onClick={applyStyle}
            customStyle="self-center bg-blue-600 min-h-8 w-fit text-center cursor-pointer"
            text="Apply"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

StylePrompt.propTypes = {
    selectedComponentId: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default StylePrompt;
