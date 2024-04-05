import React from "react";
import styled from "styled-components";

type Props = {};

const TooltipCustom = (props: Props) => {
  return <TooltipStyle>Comming soon</TooltipStyle>;
};

export default TooltipCustom;

const TooltipStyle = styled.div`
  background: "#961c71";
  color: #fff;
  font-size: 20px;
`;
