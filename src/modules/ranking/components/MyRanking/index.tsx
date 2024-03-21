import { IconCertification, IconLightning } from "@/assets/icons";
import { ButtonSecondary } from "@/components/ButtonCustom";
import { Avatar, Stack, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export interface IMyRankingProps {}

export default function MyRanking(props: IMyRankingProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <>
          <Info>
            <Avatar alt="" src={""} sx={{ width: 56, height: 56 }} />
            <Account>
              <Name>
                <Typography color={"#FFF"}>Elena</Typography>
                <IconCertification />
              </Name>
              <Typography variant="body2" color={"#82EBFF"}>
                Researcher - Builder
              </Typography>
            </Account>
          </Info>
          <Point>
            <Slider>
              <StyleTop>
                <CrossBar></CrossBar>
                <StyleMilestone></StyleMilestone>
              </StyleTop>
              <StyleBottom>
                <Typography variant="h6" color={"#B9BDD1"} fontWeight={"700"}>
                  0
                </Typography>
                <Typography
                  variant="h6"
                  color={"#F23581"}
                  fontWeight={"700"}
                  sx={{ marginLeft: "120px" }}
                >
                  9,901
                </Typography>
              </StyleBottom>
            </Slider>
            <Typography color={"#82EBFF"}>You have 9,901 points</Typography>
          </Point>
          <Total>
            <Typography color={"#B9BDD1"}>Total point</Typography>
            <Stack sx={{ display: "flex", gap: "5px", flexDirection: "row" }}>
              <IconLightning />
              <Typography variant="h4" fontWeight={"700"} color={"#FFF"}>
                9,901
              </Typography>
            </Stack>
          </Total>
        </>
      ) : (
        <>
          <Typography color={"#B9BDD1"}>
            Please connect your wallet to view your ranking.
          </Typography>
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
const Account = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.div`
  display: flex;
  gap: 5px;
`;
const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: #fff;
`;
const Total = styled.div``;

const CrossBar = styled.div`
  width: 200px;
  border-radius: 20px;
  height: 8px;
  background-image: linear-gradient(to right, #f23581, #a1f0ff);
`;

const StyleMilestone = styled.div`
  position: absolute;
  height: 22px;
  width: 8px;
  background-color: #fff;
  border-radius: 20px;
  top: -5px;
  right: 50px;
`;

const Slider = styled.div`
  position: relative;
`;

const StyleBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const StyleTop = styled.div``;
