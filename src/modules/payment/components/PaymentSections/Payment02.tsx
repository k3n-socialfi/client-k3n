"use client";
import {
  Divider,
  FormControl,
  InputBase,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../../../components/ButtonCustom";

import {
  IconChooseCrypto,
  IconCryptocurrency,
  IconETH,
  IconNotChooseCrypto,
  IconSOL,
  IconUSDT,
} from "@/assets/icons";
import LINK_VIDEO from "@/assets/images/Video_Short.png";
import { SELECT_CRYPTO } from "@/constant/dataMockupPayment";
import Image from "next/image";

interface IPayment02Props {
  nextScreen?: () => void;
  prevScreen?: () => void;
  bgColor?: boolean;
}

const Payment02 = ({ nextScreen, prevScreen }: IPayment02Props) => {
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
      <Left>
        <Divider />
        <Title>
          <Typography color="#FFF">Payment</Typography>
          <Typography color="#667085">
            All transactions are secure and encrypted
          </Typography>
        </Title>
        <Cryptocurrency>
          <CryptocurrencyTop>
            <CryptocurrencySelect>
              <IconCryptocurrency />
              <Typography>Cryptocurrency</Typography>
            </CryptocurrencySelect>
            <LogoCoin>
              <IconSOL />
              <IconUSDT />
              <IconETH />
            </LogoCoin>
          </CryptocurrencyTop>
          <CryptocurrencyBottom>
            <TitleSelect>
              <Typography>Select a cryptocurrency to continue. </Typography>
            </TitleSelect>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <SelectItems>
                {SELECT_CRYPTO.map((item) => (
                  <ItemChoose
                    key={item.id}
                    bgColor={selectedValue === item.label}
                  >
                    <NameCrypto>
                      <Radio
                        checked={selectedValue === item.label}
                        onChange={handleChanges}
                        value={item.label}
                        name={`radio-buttons-${item.label}`}
                        inputProps={{ "aria-label": item.label }}
                        icon={<IconNotChooseCrypto />}
                        checkedIcon={<IconChooseCrypto />}
                      />
                      {item.label}
                    </NameCrypto>
                    <Icon>{item.icon}</Icon>
                  </ItemChoose>
                ))}
              </SelectItems>
            </RadioGroup>
          </CryptocurrencyBottom>
        </Cryptocurrency>
        <Divider />
        <Order>
          <ButtonPrimary fullWidth onClick={nextScreen}>
            Pay now
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

export default Payment02;

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
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Cryptocurrency = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
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
  @media (max-width: 320px) {
    flex-direction: column;
  }
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
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ItemChoose = styled.div<IPayment02Props>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  width: 100%;
  border: 1px solid #fff;
  background-color: ${(props) => (props.bgColor ? "#667085" : "")};
`;
const NameCrypto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Icon = styled.div``;

const TitleSelect = styled.div``;

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
