"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logoK3N from "@/assets/images/Logo.png";
import { IconDiscord, IconTwitter } from "@/assets/icons";
import styled from "styled-components";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <StyleContainer>
      <Stack
        sx={{
          minWidth: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <Stack sx={{ display: "flex" }}>
          <Image
            height={65}
            width={200}
            src={logoK3N}
            title="logo"
            alt="logo k3n"
          />
          <Stack
            sx={{
              display: "flex",
              gap: 3,
              padding: "5px 10px",
              color: "#949292",
            }}
            direction="row"
          >
            <Typography>Privacy policy</Typography>
            <Typography>Terms of use</Typography>
            <Typography>Terms of Sale</Typography>
            <Typography>@2024 Ken</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "5px 10px",
          }}
        >
          <IconTwitter />
          <IconDiscord />
        </Stack>
      </Stack>
    </StyleContainer>
  );
}

const StyleContainer = styled.div`
  padding: 12px 40px;
  background-color: #000;
`;
