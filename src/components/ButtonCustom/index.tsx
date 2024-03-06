"use client";
import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Stack } from "@mui/material";

interface ICustomButtonProps extends ButtonProps {
  colorBt?: string;
  borderColorBt?: string;
  backgroundColorBt?: string;
  colorBtHover?: string;
  borderColorBtHover?: string;
  backgroundColorBtHover?: string;
  colorBtPressed?: string;
  borderColorBtPressed?: string;
  backgroundColorBtPressed?: string;
  backgroundColorBtDisElevated?: string;
}

export const ButtonCustom: React.FC<ICustomButtonProps> = ({
  colorBt,
  borderColorBt,
  backgroundColorBt,
  colorBtHover,
  borderColorBtHover,
  backgroundColorBtHover,
  colorBtPressed,
  borderColorBtPressed,
  backgroundColorBtPressed,
  backgroundColorBtDisElevated,
  children,
  ...props
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        {...props}
        sx={{
          borderRadius: "50px",
          textTransform: "inherit",
          color: `${colorBt}`,
          borderColor: `${borderColorBt}`,
          backgroundColor: `${backgroundColorBt}`,
          ":hover": {
            color: `${colorBtHover}`,
            borderColor: `${borderColorBtHover}`,
            backgroundColor: `${backgroundColorBtHover}`,
          },
          ":active": {
            color: `${colorBtPressed}`,
            borderColor: `${borderColorBtPressed}`,
            backgroundColor: `${backgroundColorBtPressed}`,
          },
          ":disabled": {
            opacity: 0.5,
            color: `${colorBt}`,
            borderColor: `${borderColorBt}`,
            backgroundColor: `${
              backgroundColorBtDisElevated ?? backgroundColorBt
            }`,
          },
        }}
      >
        {children}
      </Button>
    </Stack>
  );
};

export const ButtonPrimary: React.FC<ICustomButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="contained"
      color="primary"
      colorBt="primary.whiteText"
      borderColorBt="primary.enabled"
      backgroundColorBt="primary.enabled"
      colorBtHover="primary.whiteText"
      borderColorBtHover="primary.hover"
      backgroundColorBtHover="primary.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="primary.pressed"
      backgroundColorBtPressed="primary.pressed"
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonSecondary: React.FC<ICustomButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="outlined"
      color="secondary"
      colorBt="primary.pinkText"
      borderColorBt="primary.enabled"
      backgroundColorBt="secondary.enabled"
      colorBtHover="primary.pinkText"
      borderColorBtHover="primary.hover"
      backgroundColorBtHover="secondary.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="secondary.pressed"
      backgroundColorBtPressed="secondary.pressed"
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonText: React.FC<ICustomButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="outlined"
      color="textCustom"
      colorBt="primary.pinkText"
      borderColorBt="textCustom.enabled"
      backgroundColorBt="textCustom.enabled"
      colorBtHover="primary.pinkText"
      borderColorBtHover="textCustom.hover"
      backgroundColorBtHover="textCustom.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="textCustom.pressed"
      backgroundColorBtPressed="textCustom.pressed"
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonElevated: React.FC<ICustomButtonProps> = ({
  backgroundColorBtDisElevated,
  children,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="contained"
      color="elevated"
      colorBt="primary.whiteText"
      borderColorBt="primary.enabled"
      backgroundColorBt="primary.enabled"
      colorBtHover="primary.whiteText"
      borderColorBtHover="primary.hover"
      backgroundColorBtHover="primary.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="primary.pressed"
      backgroundColorBtPressed="primary.pressed"
      backgroundColorBtDisElevated={`${backgroundColorBtDisElevated}`}
    >
      {children}
    </ButtonCustom>
  );
};
