import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Stack } from "@mui/material";

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
      <Button
        {...props}
        sx={{
          borderRadius: "10px",
          textTransform: "inherit",
          fontWeight: "bold",
          boxShadow: boxShadowBt ?? "0",
          color: colorBt ?? "#000",
          borderColor: borderColorBt ?? "#000",
        }}
      >
        {children}
      </Button>
    </Stack>
  );
};

export default ButtonCustom;
