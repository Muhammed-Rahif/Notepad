import React, { useContext, useState } from "react";
import {
  downloadFile,
  insertTimeAndDate,
  isDarkTheme,
  newFile,
  selectAllOfInput,
  toggleTheme,
} from "../../helpers";
import "./MenuBar.scss";
import {MdOutlineDone} from "react-icons/md"
import { AiOutlineFontSize } from "react-icons/ai";
import { AiOutlineInfo } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";
import { AlertBoxContext } from "../../contexts/Context";

function MenuBar() {
  const [showFile, setShowFile] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const { setAlertBox } = useContext(AlertBoxContext);

  return (
    <div id="menu-bar" data-testid="menu-bar">
      {/* File */}
      <div className="dropdown">
        <button
          className="btn"
          onClick={() => setShowFile(!showFile)}
          onMouseEnter={() => setShowFile(true)}
          onMouseLeave={() => setShowFile(false)}
          onBlur={() => {
            setTimeout(() => setShowFile(false), 150);
          }}
        >
          File
        </button>
        <div
          className="dropdown-content"
          style={{ display: showFile ? "block" : "none" }}
          onMouseEnter={() => setShowFile(true)}
          onMouseLeave={() => setShowFile(false)}

        >
          <button className="menu-btn btn" onClick={() => newFile({})}>
            New <kbd>Alt + N</kbd>
          </button>
          <button
            className="menu-btn btn"
            onClick={() => newFile({ newWindow: true })}
          >
            New Window <kbd>Ctrl + Shift + N</kbd>
          </button>
          <button
            className="menu-btn btn"
            onClick={() => {
              const openFileELem = document.getElementById("open-file");
              openFileELem?.click();
            }}
          >
            Open <kbd>Ctrl + O</kbd>
          </button>
          <button
            className="menu-btn btn"
            onClick={() => {
              const textAreaElem: HTMLTextAreaElement = document.getElementById(
                "text-area"
              ) as HTMLTextAreaElement;
              downloadFile(textAreaElem.value, "Untitled.txt", "text/plain");
            }}
          >
            Save <kbd>Ctrl + S</kbd>
          </button>
          <hr />

          <button
            className="menu-btn btn"
            onClick={() => {
              setAlertBox({
                title: "Exit",
                body: "Are sure to want exit?",
                buttons: [
                  {
                    text: "No",
                    onClick: () => {
                      setAlertBox(null);
                    },
                  },
                  {
                    text: "Yes",
                    onClick: () => {
                      setAlertBox(null);
                      window.close();
                    },
                  },
                ],
              });
            }}
          >
            Exit <kbd>Ctrl + E</kbd>
          </button>
        </div>
      </div>

      {/* Edit */}
      <div className="dropdown">
        <button
          className="btn"
          onClick={() => setShowEdit(!showEdit)}
          onMouseEnter={() => setShowEdit(true)}
          onMouseLeave={() => setShowEdit(false)}
          onBlur={() => {
            setTimeout(() => setShowEdit(false), 150);
          }}
        >
          Edit
        </button>
        <div
          className="dropdown-content"
          style={{ display: showEdit ? "block" : "none" }}
          onMouseEnter={() => setShowEdit(true)}
          onMouseLeave={() => setShowEdit(false)}
        >
          <button className="menu-btn btn">
            Undo <kbd>Ctrl + Z</kbd>
          </button>
          <hr />

          <button className="menu-btn btn">
            Cut <kbd>Ctrl + X</kbd>
          </button>
          <button className="menu-btn btn">
            Copy <kbd>Ctrl + C</kbd>
          </button>
          <button className="menu-btn btn">
            Paste <kbd>Ctrl + P</kbd>
          </button>
          <button className="menu-btn btn">
            Delete <kbd>Del</kbd>
          </button>
          <hr />

          <button className="menu-btn btn">
            Find <kbd>Ctrl + F</kbd>
          </button>
          <button className="menu-btn btn">
            Go to <kbd>Ctrl + G</kbd>
          </button>
          <hr />

          <button
            className="menu-btn btn"
            onClick={() =>
              selectAllOfInput(
                document.getElementById("text-area") as HTMLTextAreaElement
              )
            }
          >
            Select All <kbd>Ctrl + A</kbd>
          </button>
          <button
            className="menu-btn btn"
            onClick={() => {
              insertTimeAndDate(
                document.getElementById("text-area") as HTMLTextAreaElement
              );
            }}
          >
            Time/Date <kbd>F5</kbd>
          </button>
          <hr />

          <button className="menu-btn btn">
            Font{" "}
            <p>
              <AiOutlineFontSize />
            </p>
          </button>
        </div>
      </div>

      {/* View */}
      <div className="dropdown">
        <button
          className="btn"
          onClick={() => setShowView(!showView)}
          onMouseEnter={() => setShowView(true)}
          onMouseLeave={() => setShowView(false)}

          onBlur={() => {
            setTimeout(() => setShowView(false), 150);
          }}
        >
          View
        </button>
        <div
          className="dropdown-content"
          style={{ display: showView ? "block" : "none" }}
          onMouseEnter={() => setShowView(true)}
          onMouseLeave={() => setShowView(false)}

        >
          <button className="menu-btn btn">
            Fullscreen{" "}
            <p>
              <MdOutlineDone />
            </p>
          </button>
          <button className="menu-btn btn" onClick={toggleTheme}>
            Dark Mode <p>{isDarkTheme() && <MdOutlineDone />}</p>
          </button>
        </div>
      </div>

      {/* Help */}
      <div className="dropdown">
        <button
          className="btn"
          onClick={() => setShowHelp(!showHelp)}
          onMouseEnter={() => setShowHelp(true)}
          onMouseLeave={() => setShowHelp(false)}

          onBlur={() => {
            setTimeout(() => setShowHelp(false), 150);
          }}
        >
          Help
        </button>
        <div
          className="dropdown-content"
          style={{ display: showHelp ? "block" : "none" }}
          onMouseEnter={() => setShowHelp(true)}
          onMouseLeave={() => setShowHelp(false)}

        >
          <button className="menu-btn btn">
            Send Feedback
            <p>
              <RiFeedbackLine />
            </p>
          </button>
          <button className="menu-btn btn">
            About Notepad
            <p>
              <AiOutlineInfo />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
