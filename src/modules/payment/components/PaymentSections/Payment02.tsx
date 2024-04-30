"use client";
import {
  Divider,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonText } from "@/components/ButtonCustom";

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
import { useServiceDetailCtx } from "../../contexts/ServiceDetailCtx";

interface IPayment02Props {
  completeService: () => void;
}

const Payment02 = ({ completeService }: IPayment02Props) => {
  //need checking discount code
  return (
    <>
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
      <ButtonPrimary fullWidth onClick={completeService}>
        <Typography variant="subtitle1"> Pay now</Typography>
      </ButtonPrimary>
    </>
  );
};

export default Payment02;

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
