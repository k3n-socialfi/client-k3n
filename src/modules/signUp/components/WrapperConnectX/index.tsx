"use client";
import { IconThunder, IconXAccountConnected } from "@/assets/icons";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";
import Image from "next/image";

type Props = {
  children: ReactNode;
  showConnected?: boolean;
};

const WrapperConnectX = ({ children, showConnected = false }: Props) => {
  const { dataPersonal } = useFetchDataMyProfile();
  return (
    <Container>
      {showConnected && (
        <ConnectedX>
          <LineX>
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
          </LineX>
          <LineX>
            <Image
              src={dataPersonal?.twitterInfo?.avatar ?? ""}
              alt="avatar"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <Points>
              <IconThunder width={20} height={20} />
              <Typography variant="h5" color={"#FFF"}>
                {dataPersonal?.twitterInfo?.totalPoints}
              </Typography>
            </Points>
          </LineX>
        </ConnectedX>
      )}

      <Child>{children}</Child>
    </Container>
  );
};

export default WrapperConnectX;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ConnectedX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoIconX = styled.div`
  cursor: pointer;
`;

const LineX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Child = styled.div``;

const Points = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;