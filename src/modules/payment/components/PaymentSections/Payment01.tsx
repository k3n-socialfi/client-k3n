"use client";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { Typography } from "@mui/material";
import styled from "styled-components";

import LINK_VIDEO from "@/assets/images/Video_Short.png";
import Image from "next/image";
import { useServiceDetailCtx } from "../../contexts/ServiceDetailCtx";
import useServiceContract from "../../hooks/useServiceContract";

const Payment01 = () => {
  const { serviceDetail, isLoading } = useServiceDetailCtx();
  const { createServiceContract, isLoading: isLoadingCtc } =
    useServiceContract();

  return (
    <Container>
      <Title>
        <TitleLeft>
          <Image width={200} height={125} src={LINK_VIDEO} alt="video" />
        </TitleLeft>
        <TitleRight>
          <Typography variant="h5">{serviceDetail?.projectName}</Typography>
          <Price>
            <Typography variant="h5" color={"#B9B9B9"}>
              Price:
            </Typography>
            <Typography variant="h5" color={"#82EBFF"}>
              ${serviceDetail?.price}
            </Typography>
          </Price>
          <PaymentType>
            <Typography variant="h5" color={"#B9B9B9"}>
              Payment type:
            </Typography>
            <Typography variant="h5" color={"#82EBFF"}>
              {serviceDetail?.paymentMethod}
            </Typography>
          </PaymentType>
        </TitleRight>
      </Title>
      <Description>
        <Typography variant="subtitle1">
          {serviceDetail?.jobDescription}
        </Typography>
      </Description>
      <Total>
        <Line></Line>
        <TotalTop>
          <Subtotal>
            <Typography>Subtotal</Typography>
            <Typography>{serviceDetail?.price}</Typography>
          </Subtotal>
          <Tax>
            <Typography>Tax</Typography>
            <Typography>0.00</Typography>
          </Tax>
          <Discount>
            <Typography>Discount</Typography>
            <Typography>0.00</Typography>
          </Discount>
        </TotalTop>
        <Line></Line>
        <TotalBottom>
          <Typography variant="h5" color={"#fff"}>
            Total
          </Typography>
          <Typography variant="h5" color={"#82EBFF"}>
            {serviceDetail?.price}
          </Typography>
        </TotalBottom>
      </Total>
      <ButtonPrimary
        fullWidth
        isLoading={isLoadingCtc}
        onClick={() => serviceDetail && createServiceContract(serviceDetail)}
      >
        Order now
      </ButtonPrimary>
    </Container>
  );
};

export default Payment01;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 80px 40px;
  background: #000;
  overflow: auto;
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 24px;
`;
const TitleLeft = styled.div``;
const TitleRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const PaymentType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Description = styled.div`
  font-size: 24px;
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #292d32;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  font-size: 24px;
`;

const Line = styled.div`
  border: 2px dashed #b9b9b9;
`;

const TotalTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
`;
const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
const Tax = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
const Discount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
const TotalBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  font-size: 32px !important;
`;
