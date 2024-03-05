import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const StyleBox = styled(Box)<IMenuProps>`
  border-bottom: ${(props) => props.borderBottomBox || "4px solid"};
  border-color: ${(props) => props.borderColorBox || "#000"};
`;

export const StyleButton = styled(Button)<IMenuProps>`
  border: ${(props) => props.borderBt || "1px solid"};
  border-color: ${(props) => props.borderColorBt || "#000"};
  color: ${(props) => props.colorBt || "#000"};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
`;
