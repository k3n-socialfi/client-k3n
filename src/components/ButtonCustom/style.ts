import styled from "styled-components";
import { Button } from "@mui/material";

export const StyleButton = styled(Button)<ICustomButtonProps>`
  border-radius: 10px;
  text-transform: inherit;
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
  border-color: ${(props) => props.borderColorBt || "#000"};
  box-shadow: ${(props) => props.boxShadow || "0"};
  &:hover {
    border-color: ${(props) => props.borderColorBt || "#000"};
  }
`;
