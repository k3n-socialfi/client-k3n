"use client";
import * as React from "react";
import { StyleBox, StyleButton } from "./style";

const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <StyleBox
      borderBottomBox={props.borderBottomBox}
      borderColorBox={props.borderColorBox}
    >
      <StyleButton
        borderBt={props.borderBt}
        borderColorBt={props.borderColorBt}
        colorBt={props.colorBt}
      >
        {props.nameMenu}
      </StyleButton>
    </StyleBox>
  );
};

export default Menu;
