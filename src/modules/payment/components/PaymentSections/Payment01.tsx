"use client";
import { Divider, FormControl, InputBase, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
} from "../../../../components/ButtonCustom";

import LINK_VIDEO from "@/assets/images/Video_Short.png";
import Image from "next/image";
import { useServiceDetailCtx } from "../../contexts/ServiceDetailCtx";
import useServiceContract from "../../hooks/useServiceContract";

interface IPayment01Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
}

const Payment01 = ({ nextScreen, prevScreen }: IPayment01Props) => {
  const { serviceDetail, isLoading } = useServiceDetailCtx();
  const { createServiceContract, isLoading: isLoadingCtc } =
    useServiceContract();

  return (
    <Container>
      <Left>
        <Title>
          <Typography color="#FFF">{serviceDetail?.jobDescription}</Typography>
        </Title>
        <Invoice>
          <Typography color="#FFF">{serviceDetail?.projectName}</Typography>
          <Price>
            <Typography color="#B9B9B9">Price: </Typography>
            <Typography color="#82EBFF">${serviceDetail?.price}</Typography>
          </Price>
          <PaymentType>
            <Typography color="#B9B9B9">Payment type: </Typography>
            <Typography color="#82EBFF">
              {serviceDetail?.paymentMethod}
            </Typography>
          </PaymentType>
        </Invoice>
        <Divider />
        <Order>
          <ButtonSecondary fullWidth>DM to Elena</ButtonSecondary>
          <ButtonPrimary
            fullWidth
            isLoading={isLoadingCtc}
            onClick={() =>
              serviceDetail && createServiceContract(serviceDetail)
            }
          >
            Order now
          </ButtonPrimary>
        </Order>
      </Left>
      <Right>
        <ShortVideo>
          <Video>
            {/* <video
              style={{ borderRadius: "16px" }}
              width={150}
              height={100}
              src={LINK_VIDEO.src}
              muted
              autoPlay
              loop
            /> */}

            <Image
              width={270}
              height={140}
              alt="Elena TikTok video thumbnail"
              src={serviceDetail?.img ?? LINK_VIDEO}
            />
          </Video>
          <TitleVideo>
            <Typography>{serviceDetail?.projectName}</Typography>
          </TitleVideo>
        </ShortVideo>
        <Divider />
        <Apply>
          <DiscountCode>
            <FormControlCustom fullWidth>
              <InputBase
                id="serviceFee"
                defaultValue=""
                sx={{ p: "4px 20px", color: "#FFF" }}
                placeholder="Discount Code"
                inputProps={{ "aria-label": "Discount Code" }}
                color="primary"
                // {...register("serviceFee")}
              />
            </FormControlCustom>
          </DiscountCode>
          <ApplyCode>
            <ButtonText
              fullWidth
              borderRadius="5px"
              colorBt="#FFF"
              backgroundColorBt="#753250"
            >
              Apply
            </ButtonText>
          </ApplyCode>
        </Apply>
        <Divider />
        <DetailInvoice>
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
        </DetailInvoice>
        <Divider />
        <Total>
          <Typography>Total</Typography>
          <Typography color="#82EBFF">0.00</Typography>
        </Total>
      </Right>
    </Container>
  );
};

export default Payment01;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1270px) {
    flex-wrap: wrap-reverse;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  @media (max-width: 1270px) {
    width: 100%;
  }
`;
const Title = styled.div``;
const Invoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #404356;
  padding: 20px;
  width: 100%;
  color: #fff;
  border-radius: 10px;
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const PaymentType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Order = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  width: 100%;
  white-space: nowrap;
  @media (max-width: 335px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  width: 20%;
  @media (max-width: 1270px) {
    width: 100%;
  }
`;
const ShortVideo = styled.div`
  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Video = styled.div`
  width: 270px;
  height: 140px;
`;

const TitleVideo = styled.div``;

const Apply = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const DiscountCode = styled.div`
  width: 100%;
  white-space: nowrap;
`;

const FormControlCustom = styled(FormControl)`
  background-color: #353535;
  color: #fff;
  border-radius: 5px;
  width: 100%;
`;

const ApplyCode = styled.div`
  width: 100%;
`;

const DetailInvoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;
const Tax = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;
const Discount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;
