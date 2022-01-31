import React from "react";
import "./TitleBar.scss";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { toggleFullscreen } from "../../helpers";
import PromptBox from "../promptBox/promptBox";

function TitleBar() {
  return (
    <div id="title-bar" data-testid="title-bar">
      <section className="title-section">
        <img src="assets/images/logo.png" alt="Notepad" width="20px" />
        <p className="title">Untitled.txt - Notepad</p>
      </section>
      <section className="btn-section">
        <button className="btn">
          <VscChromeMinimize />
        </button>
        <button className="btn" onClick={toggleFullscreen}>
          <VscChromeMaximize />
        </button>
        <button className="btn btn-cls" onClick={window.close}>
          <VscChromeClose />
        </button>
      </section>
      <PromptBox />
    </div>
  );
}

export default TitleBar;
