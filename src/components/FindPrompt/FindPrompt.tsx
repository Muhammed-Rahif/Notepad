import React, { useContext, useEffect } from "react";
import "./FindPrompt.scss";
import { GrFormSearch } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import $ from "../../helpers/jquery";
import { FindPromptContext } from "../../contexts/Context";

function FindPrompt() {
  const { showPrompt, setShowPrompt } = useContext(FindPromptContext);

  useEffect(() => {
    showPrompt && $("#find-input").focus();
    showPrompt &&
      ($("#text-area") as any).highlightWithinTextarea({
        highlight: [
          { highlight: $("#find-input").val(), className: "highlight" },
        ],
      });

    !showPrompt && ($("#text-area") as any).highlightWithinTextarea("destroy");
  }, [showPrompt]);

  return (
    <div
      className="find-prompt"
      style={{
        opacity: showPrompt ? 1 : 0,
        pointerEvents: showPrompt ? "auto" : "none",
      }}
    >
      <input
        type="text"
        placeholder="Find"
        id="find-input"
        onChange={e =>
          ($("#text-area") as any).highlightWithinTextarea({
            highlight: [{ highlight: e.target.value, className: "highlight" }],
          })
        }
        autoComplete="off"
      />
      <button style={{ marginRight: 0 }}>
        <GrFormSearch size={20} color="var(--font-color)" />
      </button>
      <button onClick={e => setShowPrompt(false)}>
        <IoIosClose size={20} color="var(--font-color)" />
      </button>
    </div>
  );
}

export default FindPrompt;
