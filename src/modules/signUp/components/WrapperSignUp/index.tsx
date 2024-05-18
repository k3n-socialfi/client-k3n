"use client";
import { IconThunder, IconXAccountConnected } from "@/assets/icons";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Image from "next/image";
import logoK3N from "@/assets/images/Logo.png";
import { useRouter } from "next/navigation";
import Hexagon from "../Hexagon";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

type Props = {
  children: ReactNode;
  showPoint?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
};

const WrapperSignUp = ({
  children,
  showPoint = false,
  showTitle = false,
  showDescription = false,
}: Props) => {
  const { push } = useRouter();
  const { dataPersonal } = useMyProfileContext();

  return (
    <Container>
      <Logo onClick={() => push("/")}>
        <Image src={logoK3N} title="logo" alt="logo k3n" layout="fill" />
      </Logo>
      <Title>
        <h4>{showTitle ? "Create your account" : "Login"}</h4>
        <h6>
          {showDescription ? "" : "Connect to K3N using the options below"}
        </h6>
      </Title>
      {showPoint && (
        <PointCustom>
          <LinePoint>
            <Hexagon srcIMG={dataPersonal?.twitterInfo?.avatar} />
            <PointNumber>
              <IconThunder width={20} height={20} />
              <Typography variant="h5" color={"#FFF"}>
                {dataPersonal?.twitterInfo?.totalPoints ?? 0}
              </Typography>
            </PointNumber>
          </LinePoint>
        </PointCustom>
      )}

      <Child>{children}</Child>
    </Container>
  );
};

export default WrapperSignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 65px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  flex-wrap: nowrap;
  h4 {
    font-size: clamp(24px, 4vw, 56px);
    font-weight: 700;
    line-height: 67px;
    color: #fff;
    text-align: center;
    @media (max-width: 428px) {
      line-height: 30px;
    }
  }
  h6 {
    font-size: clamp(12px, 4vw, 24px);
    font-weight: 600;
    line-height: 29px;
    color: #fff;
    text-align: center;
    @media (max-width: 428px) {
      line-height: 15px;
    }
  }
  @media (max-width: 668px) {
    flex-wrap: wrap;
    text-align: center;
  }
`;

const PointCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoIconX = styled.div`
  cursor: pointer;
`;

const LinePoint = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Child = styled.div`
  width: 100%;
`;

const PointNumber = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
  z-index: 2;
  height: 80px;
  width: 276px;
  cursor: pointer;
  @media (max-width: 460px) {
    height: 45px;
    width: 150px;
  }
`;
