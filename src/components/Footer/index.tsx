"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logoK3N from "@/assets/images/Logo.png";
import { IconDiscord, IconTwitter } from "@/assets/icons";
import styled from "styled-components";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Container>
      <Content>
        <Left>
          <ImageCustom>
            <Image src={logoK3N} title="logo" alt="logo k3n" layout="fill" />
          </ImageCustom>
          <Info>
            <Typography>Privacy policy</Typography>
            <Typography>Terms of use</Typography>
            <Typography>Terms of Sale</Typography>
            <Typography>@2024 Ken</Typography>
          </Info>
        </Left>
        <ListIcon>
          <IconTwitter />
          <IconDiscord />
        </ListIcon>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin: 50px -50px -50px;
  padding: 12px 80px;
  background-color: #000;
  @media (max-width: 768px) {
    margin: 16px -16px -16px;
  }
`;

const Content = styled(Stack)`
  display: flex;
  justify-content: space-between;
  flex-direction: row !important;
  min-width: 100px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column !important;
    flex-wrap: wrap;
  }
`;

const Left = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageCustom = styled.div`
  position: relative;
  height: 65px;
  width: 200px;
  @media (max-width: 460px) {
    height: 45px;
    width: 150px;
  }
`;

const Info = styled(Stack)`
  display: flex;
  flex-direction: row !important;
  white-space: nowrap;
  color: #949292;
  gap: 20px;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column !important;
    flex-wrap: wrap;
  }
`;

const ListIcon = styled(Stack)`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  white-space: nowrap;
  gap: 20px;
`;
