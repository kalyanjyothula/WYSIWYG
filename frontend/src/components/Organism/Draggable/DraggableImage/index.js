import { useDrag } from "react-dnd";

const DraggableImage = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "IMAGE",
    item: { type: "IMAGE"},
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
      Image
    </div>
  );
};

export default DraggableImage;
