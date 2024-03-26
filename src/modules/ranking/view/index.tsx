"use client";
import { Stack, Typography } from "@mui/material";
import * as React from "react";
import MyRanking from "../components/MyRanking";
import TableTopRanking from "@/components/TableTopRanking";
import styled from "styled-components";
import { IconBoxArrowRight } from "@/assets/icons";

export interface IRankingProps {}

export default function Ranking(props: IRankingProps) {
  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          color: "#FFF",
        }}
      >
        <Typography variant="h3" marginLeft={"20px"} fontWeight={"700"}>
          My Ranking
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Typography color={"#F23581"}>Turn back to land details</Typography>
          <IconBoxArrowRight />
        </Stack>
      </Stack>
      <MyRanking />
      <Typography
        variant="h3"
        color={"#FFF"}
        marginLeft={"20px"}
        fontWeight={"700"}
        style={{ marginTop: "50px" }}
      >
        Top 100 Ranking
      </Typography>
      <TableTopRanking />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-width: 100%;
  background-color: #292d32;
`;
