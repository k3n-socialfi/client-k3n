"use client";
import { Divider, FormControl, InputBase, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary, ButtonText } from "../ButtonCustom";

import LINK_VIDEO from "@/assets/images/Video_Short.png";
import Image from "next/image";

interface IPayment01Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
}

const Payment01 = ({ nextScreen, prevScreen }: IPayment01Props) => {
  return (
    <Container>
      <Left>
        <Title>
          <Typography color="#FFF">
            {` Elevate your TikTok presence with K3N's collaboration with Elena!
            Boost your brand's visibility and engagement by harnessing Elena's
            expertise in TikTok advertising. Message us now to leverage Elena's
            skills and enhance your TikTok marketing strategy!`}
          </Typography>
        </Title>
        <Invoice>
          <Typography>Short Video on Tiktok</Typography>
          <Typography>Price: $7,450</Typography>
          <Typography>Payment type: One time payment</Typography>
        </Invoice>
        <Divider />
        <Order>
          <ButtonSecondary fullWidth>DM to Elena</ButtonSecondary>
          <ButtonPrimary fullWidth onClick={nextScreen}>
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
              // layout="fill"
              width={250}
              height={120}
              alt="Elena TikTok video thumbnail"
              src={LINK_VIDEO}
            />
          </Video>
          <TitleVideo>
            <Typography>Short Video on Tiktok</Typography>
          </TitleVideo>
        </ShortVideo>
        <Divider />
        <Apply>
          <DiscountCode>
            <FormControl
              fullWidth
              sx={{
                backgroundColor: "#353535",
                color: "#FFF",
                borderRadius: "5px",
                width: "165px",
              }}
            >
              <InputBase
                id="serviceFee"
                defaultValue=""
                sx={{ p: "4px 20px", color: "#FFF" }}
                placeholder="Discount Code"
                inputProps={{ "aria-label": "Discount Code" }}
                color="primary"
                // {...register("serviceFee")}
              />
            </FormControl>
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
            <Typography>0.00</Typography>
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
          <Typography>0.00</Typography>
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
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const Order = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
`;
const ShortVideo = styled.div``;
const Video = styled.div`
  width: 250px;
  height: 120px;
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
