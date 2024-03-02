import { Box, Button } from "@mui/material";
import * as React from "react";

interface IMenuProps {
  borderBottomBox?: string | number;
  borderColorBox?: string | number;
  borderButton?: string | number;
  borderColorButton?: string | number;
  colorButton?: string;
  nameMenu: string;
}

const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <Box
      sx={{
        borderBottom: props.borderBottomBox ?? 4,
        borderColor: props.borderColorBox ?? "#000",
      }}
    >
      <Button
        sx={{
          border: props.borderButton ?? "1px solid",
          borderColor: props.borderColorButton ?? "#000",
          color: props.colorButton ?? "#000",
          borderBottom: "none",
          borderRadius: "10px 10px 0 0",
        }}
      >
        {props.nameMenu}
      </Button>
    </Box>
  );
};

export default Menu;
