import styled from "styled-components";
import { Button } from "@mui/material";

export const StyleButton = styled(Button)<ICustomButtonProps>`
  border-radius: 50px;
  text-transform: inherit;
  color: ${(props: any) =>
    props.theme.colors.button[props.colorBt] ??
    props.theme.colors.button.white};
  border-color: ${(props: any) =>
    props.theme.colors.button[props.borderColorBt] ??
    props.theme.colors.button.white};
  background-color: ${(props: any) =>
    props.theme.backgrounds.button[props.backgroundColorBt] ??
    props.theme.backgrounds.button.primaryEnabled};
  &:hover {
    color: ${(props: any) =>
      props.theme.colors.button[props.colorBtHover] ??
      props.theme.colors.button.white};
    border-color: ${(props: any) =>
      props.theme.colors.button[props.borderColorBtHover] ??
      props.theme.colors.button.white};
    background-color: ${(props: any) =>
      props.theme.backgrounds.button[props.backgroundColorBtHover] ??
      props.theme.backgrounds.button.primaryEnabled};
  }
  &:active {
    color: ${(props: any) => props.theme.colors.button.white};
    border-color: ${(props: any) => props.theme.colors.button.pink};
    background-color: ${(props: any) =>
      props.theme.backgrounds.button.primaryPressed};
  }
  &:disabled {
    opacity: 0.5;
    color: ${(props: any) =>
      props.theme.colors.button[props.colorBt] ??
      props.theme.colors.button.white};
    border-color: ${(props: any) =>
      props.theme.colors.button[props.borderColorBt] ??
      props.theme.colors.button.white};
    background-color: ${(props: any) =>
      props.theme.backgrounds.button[props.backgroundColorBt] ??
      props.theme.backgrounds.button.primaryEnabled};
  }
`;
