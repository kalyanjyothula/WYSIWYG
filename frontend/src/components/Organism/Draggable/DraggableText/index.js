
import { useDrag } from "react-dnd";

const DraggableText = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TEXT",
    item: { type: "TEXT"},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
          ref={ drag }
          className={`p-2.5 cursor-grab bg-slate-300 ${isDragging ? "opacity-50": 'opacity-100'}`}
    >
      Text
    </div>
  );
};

export default DraggableText;
