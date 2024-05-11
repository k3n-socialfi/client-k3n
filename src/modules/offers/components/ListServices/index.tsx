"use client";
import { IconEdit } from "@/assets/icons";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import Chips from "@/components/Chip";
import CreateServices from "@/components/ModalCreateServices";
import { Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Services({ listServicesProfile }: any) {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const IMG2 = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <StyleBox>
      <Container>
        <StyleTitle>My Services(${listServicesProfile?.length})</StyleTitle>
        <ServicesRight>
          <LinkCustom href={`/services`}>
            <SeeAll>See all</SeeAll>
          </LinkCustom>
          <ButtonSecondary
            variant="outlined"
            colorBt="#F23581"
            onClick={() => {
              setIsShowModal(!isShowModal);
            }}
          >
            Add New Services
          </ButtonSecondary>
        </ServicesRight>
      </Container>
      <StyleContent>
        {listServicesProfile ? (listServicesProfile?.map((item: any) => (
          <StyleSelection key={item?.job?.jobId}>
            <StyleForm>
              <StyleServicesImg
                width={343}
                height={240}
                src={IMG2}
                alt="igs"
              />
              <Content>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <SubTitle>{item?.job?.projectName}</SubTitle>
                  <StyleChips>
                    {item?.job?.tags?.map((listTag: string, index: number) => (
                      <Chips
                        key={index}
                        label={listTag}
                        color="secondary"
                        sx={{ color: "#25002D", backgroundColor: "#F6CCFF" }}
                      />
                    ))}
                  </StyleChips>
                </div>
                <Transfer>
                  <RightTransfer>
                    <Options>
                      <Prices>Price:</Prices>
                      <Price>${item?.job?.price}</Price>
                      <Checkbox {...label} />
                    </Options>
                    <Divider sx={{ borderColor: "#B9B9B9 " }} />
                    <Options>
                      <TitlePrice>{item?.job?.paymentMethod}</TitlePrice>
                      <Checkbox {...label} defaultChecked />
                    </Options>
                    <CustomButton colorBt="#F23581" variant="outlined">
                      <IconEdit />
                      <LinkCustom
                        href={`/services/payment/${item?.job?.jobId}`}
                      >
                        <Typography sx={{ p: "8px 0" }}>Edit service</Typography>
                      </LinkCustom>
                    </CustomButton>
                  </RightTransfer>
                </Transfer>
              </Content>
            </StyleForm>
          </StyleSelection>
        ))) : (
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

const CustomButton = styled(ButtonSecondary)`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 8px;
 color: red !important;
 &:hover {
  transform: scale(0.9);
  color: black !important;
  transition: all 0.5s;
  }
`
const Prices = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
`
const Content = styled.div`
 padding: 0 12px;
`
const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #f23581;
`;

const StyleServicesImg = styled(Image)`
  border-radius: 8px;
`;
const Transfer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (max-width: 520px) {
    gap: 8px;
  }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
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
  border-radius: 12px;
  padding: 4px 16px;
  color: #82EBFF;
  background-color: #191D24;
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;
const StyleForm = styled.div`
  width: 345px;
  height: 567px;
  gap: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  @media (max-width: 520px) {
    width: 360px;
    height: 438px;
    padding: 12px;
  }
`;
const StyleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 520px) {
    margin-right: 0px;
  }
`;
const StyleSelection = styled.div`
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 2px 0;
  color: #ffff !important;
`;
const SubTitle = styled.div`
  padding: 8px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
`;
const StyleTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: #FFFFFF;
  padding-bottom: 24px;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  }
`;





