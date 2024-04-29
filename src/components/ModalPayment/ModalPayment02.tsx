"use client";
import LINK_VIDEO from "@/assets/images/Video_Short.png";
import { SELECT_CRYPTO } from "@/constant/dataMockupPayment";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonText } from "../ButtonCustom";

interface IModalPayment02Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
  bgColor?: boolean;
}

const ModalPayment02 = ({ nextScreen, prevScreen }: IModalPayment02Props) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5" color={"#82EBFF"}>
            0.00
          </Typography>
        </TotalBottom>
      </Total>
      <SelectCrypto>
        <Typography color={"#B9B9B9"}>
          Select a cryptocurrency to continue.
        </Typography>
        <FormControl fullWidth sx={{ width: "100%" }}>
          <InputLabel id="cryptocurrency" sx={{ color: "#FFF" }}>
            Cryptocurrency
          </InputLabel>
          <Select
            id="cryptocurrency"
            labelId="cryptocurrency"
            // value={""}
            label="Cryptocurrency"
            sx={{
              borderRadius: "20px",
              color: "#FFF",
              backgroundColor: "#353535",
              border: "0px #353535 solid",
            }}
            // {...register("cryptocurrency")}
            // onChange={handleChangeSelect}
          >
            {SELECT_CRYPTO.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                <ItemCurrency>
                  {option.icon}
                  {option.label}
                </ItemCurrency>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
            <ButtonText fullWidth borderRadius="5px" borderColorBt="none">
              Apply
            </ButtonText>
          </ApplyCode>
        </Apply>
      </SelectCrypto>
      <ButtonPrimary fullWidth onClick={nextScreen}>
        <Typography variant="subtitle1"> Pay now</Typography>
      </ButtonPrimary>
    </Container>
  );
};

export default ModalPayment02;

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
  width: 20%;
`;

const ItemCurrency = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
