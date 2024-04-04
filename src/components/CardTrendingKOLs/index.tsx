"use client";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

export interface ICardTrendingKOLsProps {
  rank?: React.ReactNode;
  backgroundColor?: string;
  name?: string;
  point?: string | number;
  urlAvatar?: string;
}

export default function CardTrendingKOLs(props: ICardTrendingKOLsProps) {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Rank>{props.rank}</Rank>
      <Name>
        <Avatar alt="" src={props.urlAvatar} sx={{ width: 56, height: 56 }} />
        <LinkCustom href={`/profile/${props.name}`}>
          <Typography sx={{ fontWeight: "700" }}>{props.name}</Typography>
        </LinkCustom>
      </Name>
      <Point>{props.point}</Point>
    </Container>
  );
}

const Container = styled.div<ICardTrendingKOLsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.backgroundColor ?? "#42362E"};
  color: #fff;
  border-radius: 15px;
`;

const Rank = styled.div<ICardTrendingKOLsProps>`
  border-right: 2px #fff solid;
  padding: 15px 20px;
  min-width: 100px;
  display: flex;
  justify-content: center;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  min-width: 314px;
  gap: 10px;
  padding: 1px 20px;
  border-right: 2px #fff solid;
`;
const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Point = styled.div`
  padding: 10px 20px;
`;
