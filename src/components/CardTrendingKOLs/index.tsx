"use client";
import {
  IconArrowDownChange,
  IconArrowUpChange,
  IconThunder,
} from "@/assets/icons";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import Count from "../Count";

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
          <Rank>
            {Number(props?.rank) % 2 === 0 ? (
              <UpDownNumber>
                <IconArrowUpChange width={10} height={10} />
                <p style={{ color: "#6BDF61" }}>+1</p>
              </UpDownNumber>
            ) : (
              <UpDownNumber>
                <IconArrowDownChange width={10} height={10} />

                <p style={{ color: "#FF5656" }}>-1</p>
              </UpDownNumber>
            )}
            <NumberTop>{props?.rank}</NumberTop>
          </Rank>
          <Name>
            <AvatarCustom alt="" src={props?.urlAvatar} />
            <Typography sx={{ fontWeight: "700" }}>{props?.name}</Typography>
          </Name>
          <PointsContent>
            <IconThunder />
            <Count countTo={props?.point}/>
            <UpDownPoint>
              {Number(props?.rank) % 2 === 0 ? (
                <div className="text-sm flex space-x-1 text-[#FF5656]">
                  -<Count countTo={12}/>%
                </div>
              ) : (
                <div className="text-sm flex space-x-1 text-[#6BDF61]">
                  +<Count countTo={12}/>%
                </div>  
              )}
            </UpDownPoint>
          </PointsContent>
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
  background-color: ${(props) => props.backgroundColor ?? "#191d24"};
  color: #fff;
  border-radius: 15px;
  &:hover {
    color: #f23581;
    .MuiAvatar-circular {
      border-color: #f23581;
    }
  }
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
  /* border-right: 2px #fff solid; */
  padding: 15px 20px;
  width: 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #fff !important;
  gap: 8px;
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

const NumberTop = styled.div``;

const UpDownNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
  font-size: 6px;
  font-weight: 600;
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

const AvatarCustom = styled(Avatar)`
  width: 56px;
  height: 56px;
  border: 2px solid #82ebff;
`;

const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const PointsContent = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
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

const UpDownPoint = styled.div`
  p {
  font-size: 10px;
  font-weight: 600;
  }
`;
