
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header, Footer, Toolbar, Canvas } from "../../components/Organism";

function Dashboard() {

  const [previewMode, setPreviewMode] = useState(false);

  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };


  return (
    <div className="">
      <Header customStyles="shadow-md !bg-white z-60" />
      <DndProvider backend={HTML5Backend}>
        <button onClick={togglePreviewMode} className="preview-button">
          {previewMode ? "Back to Design" : "Preview"}
        </button>
        <div className="flex min-h-[600px]">
          <Toolbar />
          <Canvas />
        </div>
      </DndProvider>
      <Footer />
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
