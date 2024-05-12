import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {};

const Loading = (props: Props) => {
  return <Loader />;
};

export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid #82ebff;
  border-left-color: #e0faff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;
