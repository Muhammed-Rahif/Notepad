import React from "react";
import "./MenuBar.scss";
import File from "./MenuItems/File";
import Edit from "./MenuItems/Edit";
import View from "./MenuItems/View";
import Help from "./MenuItems/Help";
import Mode from "./MenuItems/Mode";

function MenuBar() {
  return (
    <div id="menu-bar" data-testid="menu-bar">
      <File />
      <Edit />
      <Mode />
      <View />
      <Help />
      
    </div>
  );
}

export default MenuBar;
