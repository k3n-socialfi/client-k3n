// ** MUI Imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function AlertsDescription({ title, children, ...props }: any){
  return (
    <Alert {...props} title={title}>
        <AlertTitle>{title}</AlertTitle>
        <div>{children}</div>
    </Alert>
  );
};