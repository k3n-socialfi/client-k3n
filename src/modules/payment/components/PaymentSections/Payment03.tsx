"use client";
import { Divider, FormControl, InputBase, Typography } from "@mui/material";
import styled from "styled-components";
import { ButtonPrimary } from "../../../../components/ButtonCustom";
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
          <NeedHelp>
            <Typography>Need help?</Typography>
            <Typography color="#82EBFF">Contact us</Typography>
          </NeedHelp>
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
              width={270}
              height={140}
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
            <ButtonPrimary fullWidth borderRadius="5px">
              Apply
            </ButtonPrimary>
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
          <Typography color={"#82EBFF"}>0.00</Typography>
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
  width: 100%;
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
