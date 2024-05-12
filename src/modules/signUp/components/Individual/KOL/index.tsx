"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import FormCreateIndividual from "../../FormCreateIndividual";
import { IconThunder } from "@/assets/icons";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";

type Props = {};

const KOL = (props: Props) => {
  const [screen, setScreen] = useState(-1);
  const { dataPersonal } = useFetchDataMyProfile();

  const handleNextScreen = () => {
    setScreen((prev) => prev + 1);
  };

  switch (screen) {
    case 0:
      return (
        <Container>
          <Box>
            <Name>
              <Typography variant="h5" color={"#82EBFF"}>
                Your Shill Score
              </Typography>
            </Name>
            <Score>
              <IconThunder width={48} height={48} />
              <Typography variant="h4" color={"#FFF"}>
                {dataPersonal?.twitterInfo?.totalPoints}
              </Typography>
            </Score>
          </Box>
          <FormCreateIndividual showConnected={() => false} />
        </Container>
      );
    default:
      return (
        <Container>
          <Box>
            <Name>
              <Typography variant="h4" color={"#82EBFF"}>
                Your Shill Score
              </Typography>
            </Name>
            <Score>
              <IconThunder width={48} height={48} />
              <Typography variant="h4" color={"#FFF"}>
                100
              </Typography>
            </Score>
          </Box>
          <Typography variant="h5" color={"#FFF"}>
            Your Shill Score is not sufficient to register as KOLs.
          </Typography>
          <Typography
            variant="h4"
            color={"#82EBFF"}
            sx={{ cursor: "pointer" }}
            onClick={handleNextScreen}
          >
            Register as a user
          </Typography>
        </Container>
      );
  }
};

export default KOL;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 80px;
  border-radius: 16px;
  background-color: #191d24;
  border: 2px solid #fff;
  gap: 22px;
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  color: #fff;
`;

const Score = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
