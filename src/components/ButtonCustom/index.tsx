import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Stack } from "@mui/material";

interface ICustomButtonProps extends ButtonProps {
  // Định nghĩa các props tùy chỉnh nếu cần
}

const ButtonCustom: React.FC<ICustomButtonProps> = ({ children, ...props }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button {...props}>{children}</Button>
    </Stack>
  );
};

export default ButtonCustom;
