"use client";
import { IconCertification, IconUSDT } from "@/assets/icons";
import LINK_VIDEO from "@/assets/images/Video_Short.png";
import { Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { ButtonPrimary } from "../ButtonCustom";

interface IModalPayment03Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
}

const ModalPayment03 = ({ nextScreen, prevScreen }: IModalPayment03Props) => {
  return (
    <Container>
      <Title>
        <TitleLeft>
          <Image width={200} height={125} src={LINK_VIDEO} alt="video" />
        </TitleLeft>
        <TitleRight>
          <Typography variant="h5">Short Video on Tiktok</Typography>
          <Price>
            <Typography variant="h5" color={"#B9B9B9"}>
              Price:
            </Typography>
            <Typography variant="h5" color={"#82EBFF"}>
              $7,450
            </Typography>
          </Price>
          <PaymentType>
            <Typography variant="h5" color={"#B9B9B9"}>
              Payment type:
            </Typography>
            <Typography variant="h5" color={"#82EBFF"}>
              One time payment
            </Typography>
          </PaymentType>
        </TitleRight>
      </Title>
      <Description>
        <Typography variant="subtitle1">
          {` Elevate your TikTok presence with K3N's collaboration with Elena!
          Boost your brand's visibility and engagement by harnessing Elena's
          expertise in TikTok advertising. Message us now to leverage Elena's
          skills and enhance your TikTok marketing strategy!`}
        </Typography>
      </Description>
      <Total>
        <Line></Line>
        <TotalTop>
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
        </TotalTop>
        <Line></Line>
        <TotalBottom>
          <Typography>Total</Typography>
          <Typography color={"#82EBFF"}>0.00</Typography>
        </TotalBottom>
      </Total>
      <SelectCrypto>
        <SelectedPayment>
          <Typography color={"#B9B9B9"}>
            Currency selected for payment
          </Typography>
          <TypeCrypto>
            <IconUSDT />
            <Typography>USTD</Typography>
          </TypeCrypto>
        </SelectedPayment>
        <Discounted>
          <IconCertification />
          <Typography color="#9B9CA0">
            Discount code has been applied successfully
          </Typography>
        </Discounted>
      </SelectCrypto>
      <ButtonPrimary fullWidth onClick={nextScreen}>
        <Typography variant="subtitle1">Pay now</Typography>
      </ButtonPrimary>
    </Container>
  );
};

export default ModalPayment03;

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

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
const Description = styled.div``;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #292d32;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
`;

const Line = styled.div`
  border: 2px dashed #b9b9b9;
`;

const TotalTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
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
`;

const SelectCrypto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #292d32;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
`;

const SelectedPayment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TypeCrypto = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Discounted = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  margin: 0 -20px -20px;
  border-radius: 0 0 20px 20px;
  background-color: #393939;
`;
