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
        {/* <ComPletedProjectTable>
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
        </ComPletedProjectTable> */}
      </ContainerCustom>
    </ServiceDetailCtxProvider>
  );
}

const ContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 918px;
  margin: auto;
`;

export default Payment;
