"use client";
import { Divider, FormControl, InputBase, Typography } from "@mui/material";
import styled from "styled-components";
import { ButtonPrimary } from "../ButtonCustom";
import { IconCertification, IconUSDT } from "@/assets/icons";
import LINK_VIDEO from "@/assets/images/Video_Short.png";
import Image from "next/image";

interface IPayment03Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
}

const Payment03 = ({ nextScreen, prevScreen }: IPayment03Props) => {
  return (
    <Container>
      <Left>
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
          <OrderDetailTop>
            <Title>Order details</Title>
            <InfoOrder>
              <InfoOrderLeft>
                <InfoItem>
                  <Typography color="#FFF">Name of Service</Typography>
                  <Typography variant="subtitle2" color="#9B9CA0">
                    Short Video on Tiktok
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <Typography color="#FFF">Payment type</Typography>
                  <Typography variant="subtitle2" color="#9B9CA0">
                    One time Payment
                  </Typography>
                </InfoItem>
              </InfoOrderLeft>
              <InfoOrderRight>
                <InfoItem>
                  <Typography color="#FFF">Payment method</Typography>
                  <PaymentMethod>
                    <IconUSDT />
                    <Typography variant="subtitle2" color="#9B9CA0">
                      USDT - Cryptocurrency
                    </Typography>
                  </PaymentMethod>
                </InfoItem>
              </InfoOrderRight>
            </InfoOrder>
          </OrderDetailTop>
          <OrderDetailBottom>
            <IconCertification />
            <Typography color="#9B9CA0" variant="subtitle2">
              Save my information for a faster checkout
            </Typography>
          </OrderDetailBottom>
        </OrderDetail>

        <Divider />
        <Order>
          <Typography>Need help? Contact us</Typography>
          <ButtonPrimary fullWidth>Place a New Order</ButtonPrimary>
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
            <ButtonPrimary borderRadius="5px">Apply</ButtonPrimary>
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

export default Payment03;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
const Notification = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Confirmed = styled.div`
  padding: 10px;
`;
const ConfirmedTop = styled.div`
  padding: 10px;
  background-color: #404356;
`;
const ConfirmedBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: #393939;
`;
const OrderDetail = styled.div`
  padding: 10px;
`;
const OrderDetailTop = styled.div`
  padding: 10px;
  background-color: #404356;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const InfoOrderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InfoItem = styled.div``;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;
const InfoOrderRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const OrderDetailBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: #393939;
`;

const Title = styled.div`
  color: #fff;
`;
const Cryptocurrency = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #404356; */
  padding: 10px;
  width: 100%;
  color: #fff;
  border-radius: 10px;
`;

const CryptocurrencyTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #404356;
  padding: 10px;
  border-radius: 10px 10px 0 0;
`;
const CryptocurrencySelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
const LogoCoin = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const CryptocurrencyBottom = styled.div`
  background-color: #393939;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
`;

const SelectItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
`;

const ItemChoose = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  width: 100%;
  border: 1px solid #fff;
`;
const Label = styled.div``;
const Icon = styled.div``;

const TitleSelect = styled.div``;

const Order = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  width: 100%;
  white-space: nowrap;
  color: #fff;
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
