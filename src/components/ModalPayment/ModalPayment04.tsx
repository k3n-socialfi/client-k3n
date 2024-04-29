"use client";
import { IconCertification, IconUSDT } from "@/assets/icons";
import { Divider, Typography } from "@mui/material";
import styled from "styled-components";
import { ButtonPrimary } from "../ButtonCustom";

interface IModalPayment03Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
}

const ModalPayment04 = ({ nextScreen, prevScreen }: IModalPayment03Props) => {
  return (
    <Container>
      <Notification>
        <IconCertification width={50} height={50} />
        <Title>
          <Typography variant="subtitle2" color="#667085">
            Confirmation
          </Typography>
          <Typography color="#FFF">Thank you, ABC!</Typography>
        </Title>
      </Notification>

      <Confirmed>
        <ConfirmedTop>
          <Typography color="#FFF">Your order is confirmed</Typography>
          <Typography variant="subtitle2" color="#9B9CA0">
            You’ll get a confirmation email with your order number soon.
          </Typography>
        </ConfirmedTop>
        <ConfirmedBottom>
          <IconCertification />
          <Typography color="#9B9CA0" variant="subtitle2">
            Email me with news and offers
          </Typography>
        </ConfirmedBottom>
      </Confirmed>

      <OrderDetail>
        <Title>Order details</Title>
        <InfoOrder>
          <InfoItem>
            <Typography variant="subtitle2" color="#9B9CA0">
              Name of Service
            </Typography>
            <Typography color="#FFF"> Short Video on Tiktok</Typography>
          </InfoItem>
          <InfoItem>
            <Typography variant="subtitle2" color="#9B9CA0">
              Payment type
            </Typography>
            <Typography color="#FFF"> One time Payment </Typography>
          </InfoItem>
          <InfoItem>
            <PaymentMethod>
              <IconUSDT />
              <Typography variant="subtitle2" color="#9B9CA0">
                Payment method
              </Typography>
            </PaymentMethod>
            <Typography color="#FFF"> USDT - Cryptocurrency</Typography>
          </InfoItem>
          <InfoItem>
            <Typography variant="subtitle2" color="#9B9CA0">
              Total
            </Typography>
            <Typography color="#82EBFF  " variant="h5">
              $7,077.50
            </Typography>
          </InfoItem>
        </InfoOrder>
      </OrderDetail>

      <Divider />
      <Order>
        <NeedHelp>
          <Typography>Need help?</Typography>
          <Typography color="#82EBFF">Contact us</Typography>
        </NeedHelp>
        <ButtonPrimary fullWidth>
          <Typography variant="subtitle1"> Place a New Order</Typography>
        </ButtonPrimary>
      </Order>
    </Container>
  );
};

export default ModalPayment04;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: center; */
  gap: 20px;
  padding: 80px 40px;
  background: #000;
  overflow: auto;
`;

const Notification = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Confirmed = styled.div`
  border-radius: 10px;
`;
const ConfirmedTop = styled.div`
  padding: 14px;
  background-color: #292d32;
  border-radius: 10px 10px 0 0;
`;
const ConfirmedBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: #393939;
  border-radius: 0 0 10px 10px;
`;
const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 14px;
  background-color: #292d32;
  border-radius: 10px;
`;

const InfoOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const InfoItem = styled.div``;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const Title = styled.div`
  color: #fff;
`;

const Order = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  width: 100%;
  white-space: nowrap;
  color: #fff;
  @media (max-width: 470px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const NeedHelp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
