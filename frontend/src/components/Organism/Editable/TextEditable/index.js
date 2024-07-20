
import { useState } from 'react';
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { Editor, EditorState, RichUtils, ContentState } from "draft-js";
import { useDispatch, useSelector } from 'react-redux';
import { appSelector } from '../../../../container/App/reducer';

const TextEditable = ({ left, top ,id , openModel }) => {
   const initialContentState = ContentState.createFromText("Default text");
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContentState)
  );

  const dispatch = useDispatch()
  const appState = useSelector(appSelector)
  const { componentStyle } = appState;

  

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

 

  const handleOpenModel = (e) => {
    e.stopPropagation()
   dispatch(openModel({ id }));
  }
  
  // const customStyle = `${componentStyle[id]?.backgroundColor ? `bg-[${componentStyle[id].backgroundColor}] ` : ''}
  //             ${componentStyle[id]?.fontSize ? `text-[${componentStyle[id].fontSize}px] ` : ''}
  //             ${componentStyle[id]?.textColor ? `text-[${componentStyle[id].textColor}]` : ''}`.trim();
  const customStyle = {
    backgroundColor: componentStyle[id]?.backgroundColor,
    fontSize: `${componentStyle[id]?.fontSize}px`,
    color: componentStyle[id]?.textColor,
  };


  return (
    <div
      style={{ position: "absolute", left, top }}
      className="text-component border border-gray-500 rounded-t-lg overflow-hidden"
    >
      <div className="relative">
        <div className="flex gap-2 bg-slate-200 w-[100px]">
          <button onClick={onBoldClick} className="font-bold p-1">
            B
          </button>
          <button onClick={onItalicClick} className="italic p-1">
            I
          </button>
          <button
            onClick={onUnderlineClick}
            className="underline-offset-1 underline p-1"
          >
            U
          </button>
        </div>

        <div style={customStyle}>
          <Editor
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={setEditorState}
            // style={{
            //   backgroundColor: ,
            //   fontSize: componentStyle[id]?.fontSize,
            //   color: componentStyle[id]?.textColor,
            // }}
          />
        </div>
        <FiEdit
          className="absolute right-0 top-0 text-slate-700 mr-1 mt-1 cursor-pointer"
          onClick={handleOpenModel}
        />
      </div>
    </div>
  );
};

TextEditable.propTypes = {
    left: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    openModel: PropTypes.func.isRequired,
};

export default TextEditable;
