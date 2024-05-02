"use client";
import * as React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import { Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";
import CardPopularServices from "@/modules/services/components/CardPopularServices";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
interface IPropAvailableDeals {
  dataService?: any;
}
export default function AvailableDeals({ dataService }: IPropAvailableDeals) {
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <StyleBox>
      <Container>
        <StyleTitle>Services</StyleTitle>
        <ServicesRight>
          <SeeAll>See all</SeeAll>
          <ButtonSecondary variant="outlined" colorBt="#F23581">
            Add New Services
          </ButtonSecondary>
        </ServicesRight>
      </Container>
      <StyleContent>
        {dataService.map((item: any, index: any) => {
          return <CardPopularServices dataPopularServices={item} key={index} />;
        })}
      </StyleContent>
    </StyleBox>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ServicesRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const SeeAll = styled.div`
  color: #f23581;
  font-size: 18px;
  font-weight: 700;
`;
const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
`;

const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`;
