"use client";
import * as React from "react";
import { ButtonProps } from "@mui/material/Button";
import { Stack } from "@mui/material";
import { StyleButton } from "./style";

interface ICustomButtonProps extends ButtonProps {
  colorBt?: string;
  borderColorBt?: string;
  boxShadowBt?: string;
}

const ButtonCustom: React.FC<ICustomButtonProps> = ({
  colorBt,
  borderColorBt,
  boxShadowBt,
  children,
  ...props
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <StyleButton
        {...props}
        colorBt={colorBt}
        borderColorBt={borderColorBt}
        boxShadowBt={boxShadowBt}
      >
        {children}
      </StyleButton>
    </Stack>
  );
};

export default ButtonCustom;
