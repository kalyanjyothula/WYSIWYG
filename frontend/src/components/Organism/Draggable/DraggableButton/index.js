import { useDrag } from "react-dnd";

const DraggableButton = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BUTTON",
    item: { type: "BUTTON"},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2.5 cursor-grab bg-slate-300 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      Button
    </div>
  );
};

export default DraggableButton;
