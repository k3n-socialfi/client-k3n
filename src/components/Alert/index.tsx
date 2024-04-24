"use client";
import React from "react";
import { useAlert } from "@/contexts/AlertContext";
import { Snackbar, Alert } from "@mui/material";
import styled from "styled-components";
import {
  IconCloseAlert,
  IconError,
  IconInformation,
  IconSuccess,
  IconWarning,
} from "@/assets/icons";

interface IAlert {
  autoHide?: number;
  vertical?: "top" | "bottom";
  horizontal?: "center" | "left" | "right";
}

interface IPropAlert {
  color?: string;
}

export default function CustomAlert({
  autoHide = 2000,
  vertical = "top",
  horizontal = "right",
}: IAlert) {
  const { open, message, type, setAlert, title } = useAlert();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    // if (reason === "clickaway") {
    setAlert(false);
    // }
  };

  const alertItem = {
    success: {
      color: "#6BDF61",
      icon: <IconSuccess />,
    },
    error: {
      color: "#FF5656",
      icon: <IconError />,
    },
    warning: {
      color: "#ff9519",
      icon: <IconWarning />,
    },
    info: {
      color: "#5296D5",
      icon: <IconInformation />,
    },
  };
  const newAlert = type && alertItem[type];

  return (
    <>
      {message && (
        <SnackBarCustom
          open={open}
          autoHideDuration={autoHide}
          onClose={handleClose}
          anchorOrigin={{
            vertical: vertical,
            horizontal: horizontal,
          }}
        >
          <ContainerAlert color={newAlert?.color}>
            <AlertIcon>{newAlert?.icon}</AlertIcon>
            <AlertContent>
              <AlertTitle color={newAlert?.color}>{title}</AlertTitle>
              <AlertMessage>{message}</AlertMessage>
            </AlertContent>
            <AlertClose onClick={handleClose}>
              <IconCloseAlert />
            </AlertClose>
          </ContainerAlert>
        </SnackBarCustom>
      )}
    </>
  );
}

const SnackBarCustom = styled(Snackbar)`
  z-index: 1000;
  width: 300px;
  height: auto;
  background: transparent;
`;

const ContainerAlert = styled.div<IPropAlert>`
  height: 100%;
  width: 100%;
  padding: 10px;
  background: #393939;
  border-left: 2px solid;
  border-left-color: ${(props) => props.color};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const AlertIcon = styled.div`
  width: 10%;
`;

const AlertContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const AlertClose = styled.div`
  cursor: pointer;
  width: 10%;
`;
const AlertTitle = styled.div<IPropAlert>`
  color: ${(props) => props.color};
  font-size: 18px;
`;
const AlertMessage = styled.div`
  color: #b9b9b9;
  font-size: 13px;
  font-weight: 500;
`;
