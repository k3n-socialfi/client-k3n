import styled from "styled-components";
import { Button } from "@mui/material";

export const StyleButton = styled(Button)<ICustomButtonProps>`
  border-radius: 50px;
  text-transform: inherit;
  color: ${(props: any) =>
    props.theme.colors[props.colorBt] ?? props.theme.colors.whiteText};
  border-color: ${(props: any) =>
    props.theme.colors[props.borderColorBt] ?? props.theme.colors.whiteText};
  background-color: ${(props: any) =>
    props.theme.colors[props.backgroundColorBt] ??
    props.theme.colors.primaryEnabledBt};
  &:hover {
    color: ${(props: any) =>
      props.theme.colors[props.colorBtHover] ?? props.theme.colors.whiteText};
    border-color: ${(props: any) =>
      props.theme.colors[props.borderColorBtHover] ??
      props.theme.colors.whiteText};
    background-color: ${(props: any) =>
      props.theme.colors[props.backgroundColorBtHover] ??
      props.theme.colors.primaryEnabledBt};
  }
  &:active {
    color: ${(props: any) => props.theme.colors.whiteText};
    border-color: ${(props: any) => props.theme.colors.pinkText};
    background-color: ${(props: any) => props.theme.colors.primaryPressedBt};
  }
  &:disabled {
    opacity: 0.5;
    color: ${(props: any) =>
      props.theme.colors[props.colorBt] ?? props.theme.colors.whiteText};
    border-color: ${(props: any) =>
      props.theme.colors[props.borderColorBt] ?? props.theme.colors.whiteText};
    background-color: ${(props: any) =>
      props.theme.colors[props.backgroundColorBt] ??
      props.theme.colors.primaryEnabledBt};
  }
`;
