"use client";
import Button, { ButtonProps } from "@mui/material/Button";
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

interface ICustomButtonProps extends ButtonProps {
  colorBt?: string;
  borderRadius?: string;
  borderColorBt?: string;
  backgroundColorBt?: string;
  colorBtHover?: string;
  borderColorBtHover?: string;
  backgroundColorBtHover?: string;
  colorBtPressed?: string;
  borderColorBtPressed?: string;
  backgroundColorBtPressed?: string;
  backgroundColorBtDisElevated?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const ButtonCustom: React.FC<ICustomButtonProps> = ({
  colorBt,
  borderRadius,
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
  isLoading = false,
  fullWidth,
  disabled,
  ...props
}) => {
  return isLoading ? (
    <LoadingButton
      {...props}
      loading={isLoading}
      sx={{
        borderRadius: `${borderRadius}`,
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
    </LoadingButton>
  ) : (
    <Button
      {...props}
      fullWidth={fullWidth ?? false}
      disabled={disabled ?? false}
      sx={{
        borderRadius: `${borderRadius}`,
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
  );
};

export const ButtonPrimary: React.FC<ICustomButtonProps> = ({
  children,
  isLoading,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="contained"
      color="primary"
      borderRadius={props.borderRadius ?? "50px"}
      colorBt={props.colorBt ?? "primary.whiteText"}
      backgroundColorBt={props.backgroundColorBt ?? "primary.enabled"}
      backgroundColorBtHover={props.backgroundColorBtHover ?? "primary.hover"}
      borderColorBt="primary.enabled"
      colorBtHover="primary.whiteText"
      borderColorBtHover="primary.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="primary.pressed"
      backgroundColorBtPressed="primary.pressed"
      isLoading={isLoading}
      fullWidth={props.fullWidth ?? false}
      disabled={props.disabled ?? false}
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonSecondary: React.FC<ICustomButtonProps> = ({
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="outlined"
      color={props.color ?? "secondary"}
      borderRadius={props.borderRadius ?? "50px"}
      colorBt={props.colorBt ?? "primary.pinkText"}
      backgroundColorBt={props.backgroundColorBt ?? "secondary.enabled"}
      backgroundColorBtHover={props.backgroundColorBtHover ?? "secondary.hover"}
      borderColorBt={props.borderColorBt ?? "primary.enabled"}
      borderColorBtHover={props.borderColorBtHover ?? "primary.hover"}
      colorBtHover="primary.pinkText"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="secondary.pressed"
      backgroundColorBtPressed="secondary.pressed"
      isLoading={isLoading}
      fullWidth={props.fullWidth ?? false}
      disabled={props.disabled ?? false}
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonText: React.FC<ICustomButtonProps> = ({
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="outlined"
      color="textCustom"
      borderRadius={props.borderRadius ?? "50px"}
      colorBt={props.colorBt ?? "primary.pinkText"}
      borderColorBt={props.borderColorBt}
      backgroundColorBt={props.backgroundColorBt}
      colorBtHover="primary.pinkText"
      borderColorBtHover="textCustom.hover"
      backgroundColorBtHover="textCustom.hover"
      colorBtPressed="primary.whiteText"
      borderColorBtPressed="textCustom.pressed"
      backgroundColorBtPressed="textCustom.pressed"
      isLoading={isLoading}
      fullWidth={props.fullWidth ?? false}
      disabled={props.disabled ?? false}
    >
      {children}
    </ButtonCustom>
  );
};

export const ButtonElevated: React.FC<ICustomButtonProps> = ({
  backgroundColorBtDisElevated,
  isLoading,
  children,
  ...props
}) => {
  return (
    <ButtonCustom
      {...props}
      variant="contained"
      color="elevated"
      borderRadius={props.borderRadius ?? "50px"}
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
      isLoading={isLoading}
      fullWidth={props.fullWidth ?? false}
      disabled={props.disabled ?? false}
    >
      {children}
    </ButtonCustom>
  );
};
