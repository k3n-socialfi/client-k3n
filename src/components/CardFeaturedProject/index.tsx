"use client";
import { Avatar, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export interface ICardFeaturedProjectProps {}

export default function CardFeaturedProject(props: ICardFeaturedProjectProps) {
  return (
    <Container>
      <Rank>1</Rank>
      <Name>
        <Avatar alt="" src="" sx={{ width: 56, height: 56 }} />
        <Typography sx={{ fontWeight: "700" }}>Dianne Russell</Typography>
      </Name>
      <Point>1.250</Point>
    </Container>
  );
}

const Container = styled.div<ICardFeaturedProjectProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 76px;
  max-width: 720px;
  background-color: #42362e;
  color: #fff;
`;

const Rank = styled.div<ICardFeaturedProjectProps>`
  border-right: 2px #fff solid;
  padding: 15px 20px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1px 20px;
  width: 100%;
  border-right: 2px #fff solid;
`;

const Point = styled.div`
  padding: 10px 20px;
`;
