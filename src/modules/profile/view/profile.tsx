"use client";
import {
  IconBlue,
  IconEdit,
  IconLinked,
  IconStarNormal,
  IconTikTok,
  IconTwitter,
  IconVerify,
  IconYouTube,
} from "@/assets/icons";
import { Divider } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Experience from "../components/experience";
import ConnectButton from "../components/connectContract/Wallet";

export interface IUserProfileProps { }
const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Overview = () => {
  return (
    <StyleOverview>
      <StyleTitle>Overview</StyleTitle>
      <PrimaryTitle>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>Fashion KOL</StyleSubTitle>
        </StyleContentOverview>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>Fashion KOL</StyleSubTitle>
        </StyleContentOverview>
      </PrimaryTitle>
      <PrimaryTitle>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>Fashion KOL</StyleSubTitle>
        </StyleContentOverview>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>Fashion KOL</StyleSubTitle>
        </StyleContentOverview>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>Fashion KOL</StyleSubTitle>
        </StyleContentOverview>
        <StyleContentOverview>
          <StyleDesOverview>Primary Job Title</StyleDesOverview>
          <StyleSubTitle>
            Fashion KOL Fashion KOL Fashion KOL Fashion KOL
          </StyleSubTitle>
        </StyleContentOverview>
      </PrimaryTitle>
      <ConnectButton />
    </StyleOverview>
  );
};

const Personal = () => {
  return (
    <StylePersonal>
      <StylePersonalLeft>
        <StyleImage
          src={IMG_NFT}
          alt="avatar profile"
          width={220}
          height={220}
        />
        <StyleContentUser>
          <StyleTitle>
            {" "}
            User Name <IconVerify />
          </StyleTitle>
          <StyleUserDes>Im developer software engineer</StyleUserDes>
          <StyleUserDes>Influencer</StyleUserDes>
          <StyleUserSocial>Social</StyleUserSocial>
          <StyleIcons>
            <IconTikTok />
            <IconTwitter />
            <IconYouTube />
            <IconLinked />
          </StyleIcons>
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        <StyleButtons>
          <StyleButtonTitle>
            <IconEdit />
            <div>Edit</div>
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconBlue />
            Share
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconStarNormal />
            Add to watchlist
          </StyleButtonTitle>
        </StyleButtons>
      </StylePersonalRight>
    </StylePersonal>
  );
};

export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <Personal />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <Overview />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <Experience />
    </StyleContainer>
  );
}

const StyleButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`
const StyleButtonTitle = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #393939;

  color: #b9b9b9;
  border-radius: 6px;
`;
const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
`;
const PrimaryTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 24px 0;
`;
const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
`;
const StyleContentOverview = styled.div``;
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
`;
const StylePersonal = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 24px 14px;
`;
const StyleImage = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
`;
const StylePersonalLeft = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 32px;
`;
const StyleContentUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
`;
const StyleUserDes = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #ffd7f4;
  width: fit-content;
`;
const StyleUserSocial = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #b9b9b9;
`;
const StyleIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StylePersonalRight = styled.div`
  margin-left: 50px;
  display: flex;
  gap: 14px;
  width: 40%;
`;
const StyleOverview = styled.div`
  padding: 16px 14px;
`

