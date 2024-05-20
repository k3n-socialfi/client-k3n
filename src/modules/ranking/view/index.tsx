"use client";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import MyRanking from "../components/MyRanking";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";
import SkeletonMyRanking from "@/components/Skeleton/MyRanking";
import TableTopRanking from "../components/TableRanking";
import { useHomeContext } from "@/contexts/HomeContext";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

export interface IRankingProps { }

export default function Ranking(props: IRankingProps) {
  const { dataPersonal } = useMyProfileContext();
  const { isLoading } = useHomeContext();

  return (
    <Container>
      <MyRankingTop>
        <Title>My Ranking</Title>
      </MyRankingTop>
      {isLoading ? (
        <SkeletonMyRanking />
      ) : (
        <MyRanking dataPersonal={dataPersonal} />
      )}
      <Title style={{ marginTop: "28px" }}>Top 100 Ranking</Title>
      <TableTopRanking />
    </Container>
  );
}

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #FFFFFF;
  padding: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 100%;
  background-color: #000;
  padding: 0 8px;
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
