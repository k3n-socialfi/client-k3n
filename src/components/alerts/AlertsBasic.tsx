// ** MUI Imports
import Alert from "@mui/material/Alert";

export default function InputAlertsBasic({ children, ...props }: any){
  return (
      <Alert {...props}>{children}</Alert>
  );
};

