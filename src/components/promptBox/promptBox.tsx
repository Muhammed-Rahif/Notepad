import React, { useContext } from "react";
import { FindContext } from "../../contexts/findContext";
import "./promptBox.scss";
import $ from "./jquery";

const PromptBox = () => {
  const { cancel, setCancel } = useContext(FindContext);
  return (
    <div
      style={{ visibility: cancel ? "visible" : "hidden" }}
      className="promptContainer"
    >
      <input
        type="text"
        placeholder="Find Word..."
        className="promptInput"
        onChange={event => {
          ($("#text-area") as any).highlightWithinTextarea({
            highlight: event.target.value,
          });
        }}
      />
      <button className="promptCancel" onClick={() => setCancel(false)}>
        X
      </button>
    </div>
  );
};

export default PromptBox;
