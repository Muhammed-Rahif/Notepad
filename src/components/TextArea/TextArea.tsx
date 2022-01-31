import React, {
  useEffect,
  useState,
  KeyboardEvent,
  ChangeEvent,
  MouseEvent,
} from "react";
import {
  enableTabIndentation,
  getColumnIndex,
  getLineNumber,
  setToLocalStorage,
  getFromLocalStorage,
  UserPreference,
} from "../../helpers";
import "./TextArea.scss";

function TextArea() {
  const [linesNum, setLineNum] = useState(1);
  const [columnIndex, setColumnIndex] = useState(0);
  const [textAreaContent, setTextAreaContent] = useState(() => {
    return getFromLocalStorage("notepad_textarea_content") || "";
  });
  
  function handleTextAreaChange(
    event:
      | ChangeEvent<HTMLTextAreaElement>
      | KeyboardEvent<HTMLTextAreaElement>
      | MouseEvent<HTMLTextAreaElement>
  ) {
    setLineNum(getLineNumber(event.target as HTMLTextAreaElement));
    setColumnIndex(getColumnIndex(event.target as HTMLTextAreaElement));
    setTextAreaContent((event.target as HTMLTextAreaElement).value);
    setToLocalStorage(
      "notepad_textarea_content",
      event.target as HTMLTextAreaElement
    );
  }
  
  useEffect(() => {
    let textAreaElem: HTMLTextAreaElement = document.getElementById(
      "text-area"
    ) as HTMLTextAreaElement;
    enableTabIndentation(textAreaElem);
    new UserPreference().setFontSettings();
  }, []);
  
  
 
  return (
    <>
      <textarea
        name="text-area"
        id="text-area"
        autoFocus
        spellCheck="false"
        value={textAreaContent}
        onKeyUp={handleTextAreaChange}
        onKeyDown={handleTextAreaChange}
        onKeyPress={handleTextAreaChange}
        onChange={handleTextAreaChange}
        onFocus={handleTextAreaChange}
        onMouseUp={handleTextAreaChange}
        data-testid="text-area"
      />
      <div className="details-tab">
        <div className="line-number">
          <p data-testid="line-index">
            Ln {linesNum}, Col {columnIndex}
          </p>
        </div>
        <div className="extra-details"></div>
      </div>
    </>
  );
}

export default TextArea;
