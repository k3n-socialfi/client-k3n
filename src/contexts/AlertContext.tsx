"use client";
import React, { createContext, useState, useContext } from "react";

interface IChildren {
  children: React.ReactNode;
}

interface IAlertContextType {
  open: boolean;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  setAlert: (
    open: boolean,
    title?: string,
    message?: string,
    type?: "success" | "error" | "warning" | "info",
  ) => void;
  setAlertSuccess: (title: string, message: string) => void;
  setAlertError: (title: string, message: string) => void;
  setAlertClose: () => void;
}

const AlertContext = createContext<IAlertContextType>({
  open: false,
  title: "",
  message: "",
  type: "info",
  setAlert: () => undefined,
  setAlertSuccess: () => undefined,
  setAlertError: () => undefined,
  setAlertClose: () => undefined,
});

const AlertProvider = ({ children }: IChildren) => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "warning" | "info">(
    "info",
  );

  const setAlert = (
    alertOpen: boolean,
    alertTitle?: string,
    alertMessage?: string,
    alertType?: "success" | "error" | "warning" | "info",
  ) => {
    setOpen(alertOpen);
    setTitle(alertTitle || "");
    setMessage(alertMessage || "");
    setType(alertType || "info");
  };
  const setAlertSuccess = (title: string, message: string) => {
    setAlert(true, title, message, "success");
    setTimeout(() => {
      setAlert(false, "");
    }, 3000);
  };
  const setAlertError = (title: string, message: string) => {
    setAlert(true, title, message, "error");
    setTimeout(() => {
      setAlert(false, "");
    }, 3000);
  };
  const setAlertClose = () => {
    setAlert(false, "");
  };
  return (
    <AlertContext.Provider
      value={{
        open,
        title,
        message,
        type,
        setAlert,
        setAlertClose,
        setAlertError,
        setAlertSuccess,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
const useAlert = () => {
  return useContext(AlertContext);
};

export { AlertProvider, useAlert };
