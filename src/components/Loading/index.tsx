import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useLoading } from "@/contexts/LoadingContext";
import styled from "styled-components";

export default function CustomLoading() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && (
        <Loading>
          <CircularProgress
            sx={{
              width: "75px !important",
              height: "75px !important",
              color: "#F0116A",
            }}
          />
        </Loading>
      )}
    </>
  );
}

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
