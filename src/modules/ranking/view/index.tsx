"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyRanking from "../components/MyRanking";
import TableTopRanking from "@/components/TableTopRanking";
import styled from "styled-components";
import { IconBoxArrowRight } from "@/assets/icons";
import { useMyProfileContext } from "@/contexts/MyProfileConext";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";
import SkeletonMyRanking from "@/components/Skeleton/MyRanking";
import { useTableRankingContext } from "@/contexts/TableTopRanking";

export interface IRankingProps { }

export default function Ranking(props: IRankingProps) {
  const { dataRanking, isLoading, error } = useTableRankingContext();

  const { dataPersonal } = useMyProfileContext();

  const accessToken = localStorage.getItem("accessToken");

  return (
    <Container>
      <MyRankingTop>
        <Typography variant="h3" marginLeft={"20px"} fontWeight={"700"}>
          My Ranking
        </Typography>
        <TurnBack>
          <Typography color={"#F23581"}>Turn back</Typography>
          <IconBoxArrowRight />
        </TurnBack>
      </MyRankingTop>
      {isLoading && accessToken ? (
        <SkeletonMyRanking />
      ) : (
        <MyRanking dataPersonal={dataPersonal} />
      )}
      <Typography
        variant="h3"
        marginLeft={"20px"}
        fontWeight={"700"}
        color="#FFF"
      >
        Top 100 Ranking
      </Typography>
      {isLoading ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
          <SkeletonTableTopRanking key={row} />
        ))
      ) : (
        <TableTopRanking dataRanking={dataRanking} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  min-width: 100%;
  background-color: #292d32;
  @media (max-width: 768px) {
    h3 {
      font-size: 32px !important;
    }
  }
  @media (max-width: 420px) {
    h3 {
      font-size: 20px !important;
    }
  }
`;

const MyRankingTop = styled(Stack)`
  display: flex;
  justify-content: space-between !important;
  flex-direction: row !important;
  align-items: center !important;
  color: #fff;
  @media (max-width: 768px) {
    h3 {
      font-size: 32px;
    }
  }
`;

const TurnBack = styled(Stack)`
  display: flex;
  flex-direction: row !important;
  gap: 5px !important;
  align-items: center;
`;
