import React, { useEffect,useState } from "react";
import AlertBox from "./components/AlertBox/AlertBox";
import MenuBar from "./components/MenuBar/MenuBar";
import Shortcuts from "./components/Shortcuts/Shortcuts";
import WorkArea from "./components/WorkArea/WorkArea";
import TitleBar from "./components/TitleBar/TitleBar";
import { handleOpenFileChange, UserPreference } from "./helpers";
import "./App.scss";
import { FindContext } from "./contexts/findContext";

function App() {
  useEffect(() => {
    new UserPreference().setTheme();
  }, []);
  const [cancel,setCancel] = useState(false)
  
  const value = {cancel,setCancel}
  return (
    <FindContext.Provider value={value}>
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
    </Shortcuts>
    </FindContext.Provider>
  ); 
}

export default App;
