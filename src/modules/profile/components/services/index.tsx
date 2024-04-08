"use client";
import * as React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import { Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";
import CreateServices from "@/components/ModalCreateServices";

import ServicesSkeleton from "../ServicesSkeleton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Services({ services }: any) {
  const [isShowModal, setIsShowModal] = React.useState(false);

  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <StyleBox>
      <Container>
        <StyleTitle>Services</StyleTitle>
        <ServicesRight>
          {services && <SeeAll>See all</SeeAll>}
          <ButtonSecondary
            variant="outlined"
            colorBt="#F23581"
            onClick={() => setIsShowModal(!isShowModal)}
          >
            Add New Services
          </ButtonSecondary>
        </ServicesRight>
      </Container>
      <StyleContent>
        {services ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <StyleSelection key={index}>
              <StyleForm>
                <ServicesTitle>X Content creation</ServicesTitle>
                <SubTitle>
                  Partner with me to reach your target audience quickly and
                  effectively.
                </SubTitle>
                <StyleChips>
                  <Chips
                    label="X Content"
                    variant="outlined"
                    sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
                  />
                  <Chips
                    label="Research"
                    variant="outlined"
                    sx={{ color: "#3EAABE", backgroundColor: "#EBFCFF" }}
                    color="primary"
                  />
                  <Chips
                    label="SocialFi"
                    variant="outlined"
                    sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
                    color="secondary"
                  />
                  <Chips
                    label="Ethereum"
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
                      <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
                    </ButtonPrimary>
                  </RightTransfer>
                </Transfer>
              </StyleForm>
            </StyleSelection>
          ))
        ) : (
          <DescriptionNotData>
            {`You don't have any work services yet.`}
          </DescriptionNotData>
        )}
      </StyleContent>
      <CreateServices
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </StyleBox>
  );
}

const ContentNotData = styled.div`
  padding: 20px 15px;
`;

const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  color: #f23581;
`;

const StyleServicesImg = styled(Image)`
  border-radius: 8px;
  margin-top: 12px;
`;
const Transfer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (max-width: 520px) {
    gap: 4px;
  }
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
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;
const TitlePrice = styled.div`
  color: #82ebff;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 520px) {
    font-size: 11px;
  }
`;
const RightTransfer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
const ServicesRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  @media (max-width: 520px) {
    width: 330px;
    height: 438px;
    padding: 12px;
  }
`;
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
  @media (max-width: 520px) {
    margin-right: 0px;
  }
`;
const StyleSelection = styled.div`
  width: 100%;
  background-color: rgba(70, 70, 70, 1);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ServicesTitle = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #ffd7f4;
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
  color: #82ebff;
`;
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  }
`;
