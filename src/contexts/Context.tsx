import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AlertBox, AlertBoxContextType } from "../types/AlertBox";
import { DrawModeContextType, DrawPadRefContextType } from "../types/DrawPad";
import { FindPromptContextType } from "../types/FindPrompt";

export const AlertBoxContext = createContext<AlertBoxContextType>(
  {} as AlertBoxContextType
);

export const DrawModeContext = createContext<DrawModeContextType>(
  {} as DrawModeContextType
);

export const DrawPadRefContext = createContext<DrawPadRefContextType>(
  {} as DrawPadRefContextType
);

export const FindPromptContext = createContext<FindPromptContextType>(
  {} as FindPromptContextType
);

function Context({ children }: { children: ReactNode }) {
  const [alertBox, setAlertBox] = useState<AlertBox>(null);
  const [drawMode, setDrawMode] = useState<boolean>(false);
  const [drawPadRef, setDrawPadRef] = useState({});
  const [showPrompt, setShowPrompt] = useState(false);

  // This function will also set 'isDrawMode' property in localStorage
  const setDrawModeTo = (isDrawMode: boolean) => {
    setDrawMode(isDrawMode);
    localStorage.setItem("isDrawMode", JSON.stringify(isDrawMode));
  };

  useEffect(() => {
    const isDrawMode: string = localStorage.getItem("isDrawMode") || "false";
    if (isDrawMode === "true") setDrawModeTo(true);
    else if (isDrawMode === "false") setDrawModeTo(false);
    else setDrawModeTo(false);
  }, []);

  return (
    <AlertBoxContext.Provider value={{ alertBox, setAlertBox }}>
      <DrawModeContext.Provider
        value={{ drawMode, setDrawMode: setDrawModeTo }}
      >
        <DrawPadRefContext.Provider value={{ drawPadRef, setDrawPadRef }}>
          <FindPromptContext.Provider value={{ setShowPrompt, showPrompt }}>
            {children}
          </FindPromptContext.Provider>
        </DrawPadRefContext.Provider>
      </DrawModeContext.Provider>
    </AlertBoxContext.Provider>
  );
}

export default Context;
