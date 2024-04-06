"use client";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import * as React from "react";
import styled from "styled-components";

export interface ICardTrendingKOLsProps {
  rank?: React.ReactNode;
  backgroundColor?: string;
  name?: string;
  point?: string | number;
  urlAvatar?: string;
}

export default function CardTrendingKolsSkeleton(
  props: ICardTrendingKOLsProps
) {
  return (
    <Container backgroundColor={props?.backgroundColor}>
      <LoadingSkeleton height="100%" width="100%" radius="10px" />
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
