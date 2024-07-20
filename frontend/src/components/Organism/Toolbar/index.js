/* eslint-disable no-unused-vars */
import { useDrag } from "react-dnd";
import {DraggableText, DraggableImage, DraggableButton } from "../Draggable";



const Toolbar = () => {

  return (
      <div className="w-[200px] p-2.5 bg-white 
            flex flex-col gap-2 border-gray-200 border">
          <DraggableText />
          <DraggableButton />
          <DraggableImage />
    </div>
  );
};

export default Toolbar;
