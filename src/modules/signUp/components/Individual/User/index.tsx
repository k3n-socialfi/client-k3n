"use client";
import styled from "styled-components";
import FormCreateIndividual from "../../FormCreateIndividual";
import WrapperConnectX from "../../WrapperConnectX";
import { useState } from "react";

type Props = {};

const User = (props: Props) => {
  const [showConnected, setShowConnected] = useState(true);

  const handleShow = (value: boolean) => {
    setShowConnected(value);
  };

  return (
    <WrapperConnectX showConnected={showConnected}>
      <FormCreateIndividual showConnected={handleShow} />
    </WrapperConnectX>
  );
};

export default User;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ConnectedX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const LogoIconX = styled.div`
  cursor: pointer;
`;
