"use client";
import { IconThunder } from "@/assets/icons";
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
          <Point><IconThunder />{props?.point}</Point>
        </Container>
      </LinkCustom>
    </CardCustom>
  );
}

const CardCustom = styled.div`
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
  @media (max-width: 600px) {
    flex-wrap: wrap;
    height: 100%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const Rank = styled.div<ICardTrendingKOLsProps>`
  border-right: 2px #fff solid;
  padding: 15px 20px;
  width: 15%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    border-right: 0;
    padding: 5px;
  }
  @media (max-width: 540px) {
    width: 20%;
  }
  @media (max-width: 420px) {
    width: 100%;
    text-align: center;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 10px;
  padding: 4px 20px;
  @media (max-width: 600px) {
    border-right: 2px #fff solid;
    border-left: 2px #fff solid;
    width: 60%;
    flex-direction: column;
  }
  @media (max-width: 540px) {
    width: 50%;
    flex-wrap: wrap;
    padding: 5px 10px;
  }
  @media (max-width: 420px) {
    border: 0;
    text-align: center;
  }
`;
const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Point = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  padding: 10px 20px;
  width: 25%;
  @media (max-width: 540px) {
    width: 20%;
  }
  @media (max-width: 420px) {
    width: 100%;
    text-align: center;
  }
`;
