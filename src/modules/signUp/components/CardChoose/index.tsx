"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  icon?: ReactNode;
  name?: string;
  onClick?: () => void;
};

const CardChoose = (props: Props) => {
  const { icon, name, onClick } = props;

  return (
    <Container onClick={onClick}>
      <SectionChild>
        <Icon>{icon}</Icon>
        <Name>{name}</Name>
      </SectionChild>
    </Container>
  );
};

export default CardChoose;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 296px;
  height: 192px;
  padding: 32px 60px;
  border-radius: 16px;
  background-color: #191d24;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    border: 2px solid #82ebff;
  }
`;

const SectionChild = styled.div`
  width: 296px;
  height: 192px;
  padding: 32px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;
const Icon = styled.div`
  width: 72px;
  height: 72px;
  /* padding: 0 48px 22px; */
`;
const Name = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  color: #fff;
`;
