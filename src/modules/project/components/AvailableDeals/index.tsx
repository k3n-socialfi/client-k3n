"use client";
import * as React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import { Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function AvailableDeals() {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <StyleSelection key={index}>
            <StyleForm>
              <ServicesTitle>X Tweets</ServicesTitle>
              <SubTitle>
                We want 3 KOLs/ Callers to with us to reach help us reach our
                target audience.
              </SubTitle>
              <StyleChips>
                <Chips
                  label="X tweets"
                  variant="outlined"
                  sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
                />
                <Chips
                  label="KOLs"
                  variant="outlined"
                  sx={{ color: "#3EAABE", backgroundColor: "#EBFCFF" }}
                  color="primary"
                />
                <Chips
                  label="Callers"
                  variant="outlined"
                  sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
                  color="secondary"
                />
                <Chips
                  label="Solana Ecosystem"
                  color="secondary"
                  sx={{ color: "#25002D", backgroundColor: "#F6CCFF" }}
                />
              </StyleChips>
              <Transfer>
                <StyleServicesImg
                  width={150}
                  height={130}
                  src={IMG2}
                  alt="igs"
                />
                <RightTransfer>
                  <Options>
                    <Price>Contact me</Price>
                    <Checkbox {...label} />
                  </Options>
                  <Divider sx={{ borderColor: "#B9B9B9 " }} />
                  <Options>
                    <TitlePrice>One time payment</TitlePrice>
                    <Checkbox {...label} defaultChecked />
                  </Options>
                  <ButtonPrimary style={{ width: "100%" }}>
                    <Typography sx={{ p: "8px 0" }}>Place Bid</Typography>
                  </ButtonPrimary>
                </RightTransfer>
              </Transfer>
            </StyleForm>
          </StyleSelection>
        ))}
      </StyleContent>
    </StyleBox>
  );
}
const StyleServicesImg = styled(Image)`
  border-radius: 8px;
  margin-top: 12px;
`;
const Transfer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #82ebff;
`;
const TitlePrice = styled.div`
  color: #82ebff;
  font-size: 16px;
  font-weight: 500;
`;
const RightTransfer = styled.div`
  width: 100%;
`;

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
const StyleForm = styled.div`
  width: 580px;
  height: 370px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #b9b9b9;
  padding: 24px;
  border-radius: 8px;
`;
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
`;
const StyleSelection = styled.div`
  width: 100%;
  background-color: rgba(70, 70, 70, 1);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 400px) {
    width: 900px;
  }
`;
const ServicesTitle = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #82ebff;
  width: fit-content;
`;
const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 4px 0;
  color: #ffff !important;
`;
const SubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: "#9d9d9d";
`;
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`;
