"use client";
// import { IconDots, IconNFT, IconRight, IconTwitter, IconStar } from "@/assets/icons";
import Cards from "@/components/Card";
import Chips from "@/components/Chip";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import CustomizedTabs from "../components/Tabs";

export interface IUserProfileProps {}
const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <StyleHeader>
        <StyleContent>
          {/* <IconRight /> */}
          <Avatar sx={{ width: 48, height: 48 }} />
          <div>
            <StyleName>user name</StyleName>
            <StyleSocial>
              <div>240 post</div>
              {/* <IconDots /> */}
              {/* <IconTwitter /> */}
              <div>344.2k followers</div>
            </StyleSocial>
          </div>
        </StyleContent>
        <StyleContent>
          <Button
            sx={{ borderRadius: "14px", color: "#fff" }}
            variant="outlined"
          >
            Subscribe
          </Button>
          <Button
            sx={{ borderRadius: "14px" }}
            color="primary"
            variant="contained"
            // endIcon={<IconNFT />}
          >
            Book
          </Button>
        </StyleContent>
      </StyleHeader>
      <StylePersonal>
        <Image
          style={{ width: "100%", borderRadius: "8px" }}
          width={0}
          height={293}
          sizes="100vw"
          src={IMG_NFT}
          alt="igs"
        />
        <StyleInfo>
          <StyleDetails>
            <StyleTitle>About me</StyleTitle>
            <StyleSpan>
              Creating top-tier video content for the leading projects in the
              NFT space. Clients include major brands like Pudgy Penguins, Magic
              Eden, RugRadio.
            </StyleSpan>
          </StyleDetails>
          <StyleTags>
            <StyleTitle>Tags</StyleTitle>
            <StyleChips>
              <Chips label="Social Fi" variant="outlined" />
              <Chips label="Researcher" color="success" />
              <Chips label="Ethereum" color="warning" />
              <Chips label="Ethereum" color="warning" />
            </StyleChips>
          </StyleTags>
          <StyleReview>
            <StyleTitle>Reviews</StyleTitle>
            <StyleIcon>{/* <IconStar /> 5.0(1.654) */}</StyleIcon>
          </StyleReview>
        </StyleInfo>
      </StylePersonal>
      <StyleFeed>
        <StyleLeft>aaa</StyleLeft>
        <StyleRight>
          <div>
            <CustomizedTabs />
          </div>
        </StyleRight>
      </StyleFeed>
      <div style={{ marginTop: "80px" }}></div>
    </StyleContainer>
  );
}
const StyleContainer = styled.div`
  margin: 0 40px;
`;
const StyleHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: #ffffff;
`;
const StyleName = styled.div`
  margin-bottom: 6px;
`;
const StyleSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StylePersonal = styled.div`
  background-color: #f23581;
  color: #ffffff;
  margin: 40px 0;
  border-radius: 8px;
`;
const StyleInfo = styled.div`
  padding: 12px;
  display: flex;
`;
const StyleDetails = styled.div`
  width: 50%;
`;

const StyleTags = styled.div`
  width: 25%;
`;
const StyleReview = styled.div`
  width: 25%;
`;
const StyleSpan = styled.div`
  font-size: 12px;
`;

const StyleTitle = styled.div`
  font-size: 16px;
  padding-bottom: 12px;
`;
const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const StyleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyleFeed = styled.div`
  display: flex;
  color: #ffffff;
`;
const StyleLeft = styled.div`
  width: 60%;
`;
const StyleRight = styled.div`
  width: 40%;
`;
const StyleTabs = styled.div`
  padding: 12px;
`;
