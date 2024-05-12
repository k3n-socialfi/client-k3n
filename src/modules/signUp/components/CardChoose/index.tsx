"use client";
import { Tooltip } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  icon?: ReactNode;
  name?: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

const CardChoose = (props: Props) => {
  const { icon, name, onClick, isDisabled } = props;

  if (isDisabled)
    return (
      <Tooltip title="Shill score must be greater than 30 to create a KOL">
        <Container isDisabled={isDisabled}>
          <SectionChild>
            <Icon>{icon}</Icon>
            <Name>{name}</Name>
          </SectionChild>
        </Container>
      </Tooltip>
    );
  return (
    <Container onClick={onClick} isDisabled={isDisabled}>
      <SectionChild>
        <Icon>{icon}</Icon>
        <Name>{name}</Name>
      </SectionChild>
    </Container>
  );
};

export default CardChoose;

const Container = styled.div<any>`
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
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
