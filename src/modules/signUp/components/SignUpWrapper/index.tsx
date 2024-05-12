"use client";
import { IconXAccountConnected } from "@/assets/icons";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { useShowConnectedXContext } from "../../contexts/ShowConnectedXContext";

type Props = {
  children: ReactNode;
};

const SignUpWrapper = ({ children }: Props) => {
  const { open } = useShowConnectedXContext();

  return (
    <Wrapper>
      <Content>
        <h4>Create your account</h4>
        <h6>Connect to K3N using the options below</h6>
      </Content>
      {open && (
        <ConnectedX>
          <LogoIconX>
            <IconXAccountConnected />
          </LogoIconX>
          <Typography
            variant="body1"
            color={"#82EBFF"}
            sx={{ cursor: "pointer" }}
          >
            X account connected successfully
          </Typography>
        </ConnectedX>
      )}
      <Sections>{children}</Sections>
    </Wrapper>
  );
};

export default SignUpWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  h4 {
    font-size: clamp(24px, 4vw, 56px);
    font-weight: 700;
    line-height: 67px;
    color: #fff;
  }
  h6 {
    font-size: clamp(12px, 4vw, 24px);
    font-weight: 600;
    line-height: 29px;
    color: #fff;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ConnectedX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const LogoIconX = styled.div`
  cursor: pointer;
`;
const Sections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
