import React, { useEffect } from "react";
import AlertBox from "./components/AlertBox/AlertBox";
import MenuBar from "./components/MenuBar/MenuBar";
import Shortcuts from "./components/Shortcuts/Shortcuts";
import WorkArea from "./components/WorkArea/WorkArea";
import TitleBar from "./components/TitleBar/TitleBar";
import { handleOpenFileChange, UserPreference } from "./helpers";
import "./App.scss";
import FindPrompt from "./components/FindPrompt/FindPrompt";

function App() {
  useEffect(() => {
    new UserPreference().setTheme();
  }, []);

  return (
    <Shortcuts>
      <TitleBar />
      <MenuBar />
      <WorkArea />
      <AlertBox />
      <input
        type="file"
        name="open-file"
        id="open-file"
        hidden
        accept="text/plain"
        onChange={handleOpenFileChange}
      />
      <FindPrompt />
    </Shortcuts>
  );
}

export default App;
