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
