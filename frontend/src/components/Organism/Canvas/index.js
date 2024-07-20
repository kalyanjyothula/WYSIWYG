import { useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { TextEditable, ButtonEditable, ImageEditable } from "../Editable";
import { openStyleModel } from "../../../container/App/reducer";



const Canvas = () => {
  const [components, setComponents] = useState([]);
  const [ bgColor, setbgColor] = useState('#fff')

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["TEXT", "IMAGE", "BUTTON"],
      drop: (item, monitor) => {
        console.log("accept", item)
        const offset = monitor.getSourceClientOffset();
        console.log(offset)
        const id = uuidv4();
      setComponents((prevComponents) => [
        ...prevComponents,
        { id, type: item.type, left: offset.x > 184 ? offset.x  - 184 : 0, top: offset.y > 109? offset.y - 109 : 0  },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
    
  // console.log(components, "selected")

  const handleChangeColor = (e) => {
    setbgColor(e.target.value)
  }
  

  return (
    <div ref={ drop } className="canvas relative border border-red-900 h-full w-full min-h-[600px]"
    style={ {background: bgColor ? bgColor: '#fff'}}>
      <input type="color" name="bg"  onChange={handleChangeColor} className="absolute right-0 top-0" />
      {isOver && <div className="absolute top-0 left-0 bg-white h-full w-full pointer-events-none" />}
      {components.map((component, index) => {
        switch (component.type) {
          case "TEXT":
            return (
              <TextEditable
                key={ index }
                id={component.id }
                left={component.left}
                top={ component.top }
                openModel={openStyleModel}
              />
            );
          case "IMAGE":
            return (
              <ImageEditable
                key={index}
                id={component.id}
                openModel={openStyleModel}
                left={component.left}
                top={component.top}
              />
            );
          case "BUTTON":
            return (
              <ButtonEditable
                key={index}
                id={component.id}
                openModel={openStyleModel}
                left={component.left}
                top={component.top}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Canvas;
