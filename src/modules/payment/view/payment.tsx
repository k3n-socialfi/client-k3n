"use client";
import styled from "styled-components";
import PaymentSections from "../components/PaymentSections";
import { ServiceDetailCtxProvider } from "../contexts/ServiceDetailCtx";

type Props = {};

function Payment({}: Props) {
  return (
    <ServiceDetailCtxProvider>
      <ContainerCustom>
        <PaymentSections />
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
