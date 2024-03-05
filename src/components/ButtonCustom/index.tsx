"use client";
import * as React from "react";
import { ButtonProps } from "@mui/material/Button";
import { Stack } from "@mui/material";
import { StyleButton } from "./style";
import { theme } from "@/assets/styleGlobal";
import { ThemeProvider } from "styled-components";

interface ICustomButtonProps extends ButtonProps {
  colorBt?: string;
  borderColorBt?: string;
  backgroundColorBt?: string;
  colorBtHover?: string;
  borderColorBtHover?: string;
  backgroundColorBtHover?: string;
}

const ButtonCustom: React.FC<ICustomButtonProps> = ({
  colorBt,
  borderColorBt,
  backgroundColorBt,
  colorBtHover,
  borderColorBtHover,
  backgroundColorBtHover,
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <StyleButton
          {...props}
          colorBt={colorBt}
          borderColorBt={borderColorBt}
          backgroundColorBt={backgroundColorBt}
          colorBtHover={colorBtHover}
          borderColorBtHover={borderColorBtHover}
          backgroundColorBtHover={backgroundColorBtHover}
        >
          {children}
        </StyleButton>
      </Stack>
    </ThemeProvider>
  );
};

export default ButtonCustom;
