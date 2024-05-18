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
          <Icon>{icon}</Icon>
          <Name>{name}</Name>
        </Container>
      </Tooltip>
    );
  return (
    <Container onClick={onClick} isDisabled={isDisabled}>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
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
  width: 176px;
  height: 128px;
  border: 4px solid #191d24;
  padding: 28px 56px;
  gap: 22px;
  border-radius: 16px;
  background-color: #191d24;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    border-color: #82ebff;
  }
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
