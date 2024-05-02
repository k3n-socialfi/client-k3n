"use client";
import { IconCertification, IconUSDT } from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { useMyProfileContext } from "@/contexts/MyProfileConext";
import { TService } from "@/types/service";
import { Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type TModalPayment03Props = {
  serviceDetail?: TService;
};

const ModalPayment03 = ({ serviceDetail }: TModalPayment03Props) => {
  const { dataPersonal } = useMyProfileContext();
  const { push } = useRouter();

  return (
    <Container>
      <Notification>
        <IconCertification width={50} height={50} />
        <Title>
          <Typography variant="subtitle2" color="#667085">
            Confirmation
          </Typography>
          <Typography color="#FFF">
            Thank you, {dataPersonal?.fullName ?? ""}!
          </Typography>
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
            <Typography color="#FFF">
              {serviceDetail?.projectName ?? ""}
            </Typography>
          </InfoItem>
          <InfoItem>
            <Typography variant="subtitle2" color="#9B9CA0">
              Payment type
            </Typography>
            <Typography color="#FFF">
              {serviceDetail?.paymentMethod ?? ""}{" "}
            </Typography>
          </InfoItem>
          <InfoItem>
            <PaymentMethod>
              <IconUSDT />
              <Typography variant="subtitle2" color="#9B9CA0">
                Payment method
              </Typography>
            </PaymentMethod>
            <Typography color="#FFF"> SOL - Cryptocurrency</Typography>
          </InfoItem>
          <InfoItem>
            <Typography variant="subtitle2" color="#9B9CA0">
              Total
            </Typography>
            <Typography color="#82EBFF  " variant="h5">
              {serviceDetail?.price ?? 0}
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
        <ButtonPrimary fullWidth onClick={() => push("/services")}>
          <Typography variant="subtitle1"> Place a New Order</Typography>
        </ButtonPrimary>
      </Order>
    </Container>
  );
};

export default ModalPayment03;

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
