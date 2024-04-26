"use client";
import React from "react";
import PaymentSections from "../components/PaymentSections";
import ComPletedProject from "../components/CompletedProject";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { IconArrowRight } from "@/assets/icons";
import { ServiceDetailCtxProvider } from "../contexts/ServiceDetailCtx";

type Props = {};

function Payment({}: Props) {
  return (
    <ServiceDetailCtxProvider>
      <ContainerCustom>
        <PaymentSections />
        <ComPletedProjectTable>
          <TitleTable>
            <Typography variant="h4" color={"#FFF"}>
              Completed Project
            </Typography>
            <ViewAll>
              <Typography color={"#F23581"}>View All</Typography>
              <IconArrowRight />
            </ViewAll>
          </TitleTable>
          <ComPletedProject />
        </ComPletedProjectTable>
      </ContainerCustom>
    </ServiceDetailCtxProvider>
  );
}

const ContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const ComPletedProjectTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TitleTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 520px) {
    flex-direction: column;
    h4 {
      font-size: 25px;
    }
  }
`;
const ViewAll = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export default Payment;
