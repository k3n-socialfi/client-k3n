import { IconCertification, IconLightning } from "@/assets/icons";
import { ButtonSecondary } from "@/components/ButtonCustom";
import { Avatar, Stack, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export interface IMyRankingProps {}

export default function MyRanking(props: IMyRankingProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      {isOpen ? (
        <>
          <Info>
            <Avatar />
            <Account>
              <Name>
                <Typography color={"#FFF"}>jayden Dang</Typography>
                <IconCertification />
              </Name>
              <Typography variant="body2" color={"#82EBFF"}>
                Tiktok KOLs
              </Typography>
            </Account>
          </Info>
          <Point>
            <Typography variant="h4" color={"#F23581"} fontWeight={"700"}>
              1,408
            </Typography>
            <Typography color={"#B9BDD1"}>
              of total 1,892 <br /> Land NFT stackers
            </Typography>
          </Point>
          <Total>
            <Typography color={"#B9BDD1"}>Total point</Typography>
            <Stack sx={{ display: "flex", gap: "5px", flexDirection: "row" }}>
              <IconLightning />
              <Typography variant="h4" fontWeight={"700"} color={"#FFF"}>
                250
              </Typography>
            </Stack>
          </Total>
        </>
      ) : (
        <>
          <Typography color={"#B9BDD1"}>
            Please sign in to view your ranking...
          </Typography>
          <ButtonSecondary onClick={() => setIsOpen(true)}>
            Connect Wallet
          </ButtonSecondary>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
  background-color: #404356;
  border-radius: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Account = styled.div``;
const Name = styled.div`
  display: flex;
  gap: 5px;
`;
const Point = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
`;
const Total = styled.div``;
