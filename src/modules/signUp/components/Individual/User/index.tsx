"use client";
import styled from "styled-components";
import FormCreateIndividual from "../../FormCreateIndividual";
import WrapperSignUp from "../../WrapperSignUp";
import { useState } from "react";

type Props = {};

const User = (props: Props) => {
  const [showPoint, setShowConnected] = useState(true);

  const handleShow = (value: boolean) => {
    setShowConnected(value);
  };

  return (
    <WrapperSignUp showPoint={showPoint} showTitle>
      <FormCreateIndividual showPoint={handleShow} />
    </WrapperSignUp>
  );
};

export default User;
