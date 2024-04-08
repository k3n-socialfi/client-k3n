"use client";
import { Avatar, Card, Typography } from "@mui/material";
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
    <CardCustom>
      <LinkCustom href={`/profile/${props?.name}`}>
        <Container backgroundColor={props?.backgroundColor}>
          <Rank>{props?.rank}</Rank>
          <Name>
            <Avatar
              alt=""
              src={props?.urlAvatar}
              sx={{ width: 56, height: 56 }}
            />
            <Typography sx={{ fontWeight: "700" }}>{props?.name}</Typography>
          </Name>
          <Point>{props?.point}</Point>
        </Container>
      </LinkCustom>
    </CardCustom>
  );
}

const CardCustom = styled(Card)`
  width: 100%;
  border-radius: 15px;
  border: 0;
`;

const Container = styled.div<ICardTrendingKOLsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.backgroundColor ?? "#42362E"};
  color: #fff;
  border-radius: 15px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

const Rank = styled.div<ICardTrendingKOLsProps>`
  border-right: 2px #fff solid;
  padding: 15px 20px;
  /* min-width: 100px; */
  width: 15%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    width: 30%;
    border-right: 0;
  }
  @media (max-width: 300px) {
    width: 35%;
    border-right: 0;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  /* min-width: 314px; */
  width: 70%;
  gap: 10px;
  padding: 1px 20px;
  border-right: 2px #fff solid;
  @media (max-width: 500px) {
    border-right: 0;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
  }
`;
const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Point = styled.div`
  padding: 10px 20px;
  width: 25%;
`;
