"use client";
import {
  IconBlue,
  IconEdit,
  IconIdProject,
  IconPaper,
  IconPointProfile,
  IconProject,
  IconStarNormal,
  IconTikTok,
  IconVerify,
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { useProfileContext } from "@/contexts/ProfileContext";
import { useBoolean } from "@/hooks/useBoolean";
import PostUser from "@/modules/profile/components/PostUser";
import Services from "@/modules/profile/components/services";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import PreviousDeals from "../components/PreviousDeals";
import AvailableDeals from "../components/AvailableDeals";
import CartMentions from "../components/CardMentions";

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Overview = ({ userProfile }: any) => {
  const openModal = useBoolean();
  return (
    <StyleOverview>
      <StyleLeft>
        <StyleTitle>Overview</StyleTitle>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Project Type</StyleDesOverview>
            <StyleSubTitle>Memecoin</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Ecosystem</StyleDesOverview>
            <StyleSubTitle>Solana Ecosystem</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleLeft>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Gender</StyleDesOverview>
            <StyleSubTitle>Female</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Type of KOLs</StyleDesOverview>
            <StyleSubTitle>Influencer</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Location</StyleDesOverview>
            <StyleSubTitle>New York, NYC</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleLeft>
      </StyleLeft>
      <StyleRight>
        <PrimaryTitleRight>
          <StyleContentOverview>
            <StyleDesOverview>X Followers</StyleDesOverview>
            <StyleSubTitle>
              {userProfile?.twitterInfo?.followers ?? 259000}
            </StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Avg. Price per deals</StyleDesOverview>
            <StyleSubTitle>2-3 ETH</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleRight>
        <ButtonPrimary onClick={() => openModal.onTrue()}>
          <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
        </ButtonPrimary>
      </StyleRight>
      {openModal.value && (
        <div style={{ width: "300ox", height: "300px" }}>
          {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
        </div>
      )}
    </StyleOverview>
  );
};
const KeyMetrics = () => {
  const openModal = useBoolean();
  return (
    <>
      <StyleTitle>Key Metrics</StyleTitle>
      <StyleOverview>
        <StyleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              <StyleDesOverview>Price</StyleDesOverview>
              <StyleSubTitle>$0.042592</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>Circulating Supply</StyleDesOverview>
              <StyleSubTitle>65,845,582,624,539 BONK</StyleSubTitle>
            </StyleContentOverview>
          </PrimaryTitleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              <StyleDesOverview>Max Supply</StyleDesOverview>
              <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>Total Supply</StyleDesOverview>
              <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>ATH </StyleDesOverview>
              <StyleSubTitle>$0.044547</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>ATH Date </StyleDesOverview>
              <StyleSubTitle>Mar 5, 2024 </StyleSubTitle>
            </StyleContentOverview>
          </PrimaryTitleLeft>
        </StyleLeft>

        <StyleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              <StyleDesOverview>Volume 24h</StyleDesOverview>
              <StyleSubTitle>$239,41M</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>Market Cap</StyleDesOverview>
              <StyleSubTitle>$1,71B</StyleSubTitle>
            </StyleContentOverview>
          </PrimaryTitleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              <StyleDesOverview>FDV</StyleDesOverview>
              <StyleSubTitle>$2,42B</StyleSubTitle>
            </StyleContentOverview>
            <StyleContentOverview>
              <StyleDesOverview>TVL</StyleDesOverview>
              <StyleSubTitle>-</StyleSubTitle>
            </StyleContentOverview>
          </PrimaryTitleRight>
        </StyleRight>
        {openModal.value && (
          <div style={{ width: "300ox", height: "300px" }}>
            {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
          </div>
        )}
      </StyleOverview>
    </>
  );
};

const Personal = ({ userProfile }: any) => {
  return (
    <StylePersonal>
      <StylePersonalLeft>
        <StyleImage
          src={userProfile?.twitterInfo?.avatar ?? IMG_NFT}
          alt="avatar profile"
          width={220}
          height={220}
        />
        <StyleContentUser>
          <StyleTitle>
            {/* {userProfile?.fullName ?? "User Name"}
             */}
            username
            <IconVerify />
            {/* {userProfile?.twitterInfo?.verificationStatus && <IconVerify />} */}
          </StyleTitle>
          <PointProfile>
            <IconPointProfile />
            {/* {userProfile?.twitterInfo?.totalPoints ?? 0} */}
            1000
          </PointProfile>
          {/* <StyleUserDes>{userProfile?.bio ?? "data null"}</StyleUserDes> */}
          <StyleUserDes>
            Bonk is the first Solana dog coin for the people, by the people with
            50% of the total supply airdropped to the Solana community.
          </StyleUserDes>

          <StyleUserDes>Influencer</StyleUserDes>
          <StyleUserDes>mene</StyleUserDes>
          <StyleUserSocial>Social</StyleUserSocial>
          <StyleIcons>
            {/* {userProfile?.socialProfiles.map(
              (item: any, index: number) =>
                SOCIAL[item?.social] ?? ( */}
            <>
              <IconTikTok></IconTikTok>
            </>
            {/* )
            )} */}
          </StyleIcons>
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        <StyleButtons>
          <StyleButtonTitle>
            <IconIdProject />
            <div>CA: DezXAZ....</div>
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconPaper />
            Whitepaper
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconProject />
            Project Website
          </StyleButtonTitle>
        </StyleButtons>
      </StylePersonalRight>
    </StylePersonal>
  );
};

interface IProjectDetail {}
export default function ProjectDetail(props: IProjectDetail) {
  const { userProfile, getUserProfile } = useProfileContext();
  const { username } = useParams();
  useEffect(() => {
    getUserProfile(username?.toString());
  }, [username]);

  return (
    <StyleContainer>
      <Personal userProfile={userProfile} />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <div style={{ display: "flex", width: "100%" }}>
        <PostLeft>
          <StyleTitle>Mentions</StyleTitle>
          <Posts>
            <CartMentions />
            <CartMentions />
          </Posts>
        </PostLeft>
        <div style={{ width: "70%" }}>
          <Overview userProfile={userProfile} />
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <KeyMetrics />
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <PreviousDeals />
          <AvailableDeals />
        </div>
      </div>
    </StyleContainer>
  );
}

const PostLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  padding: 12px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 1260px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
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
const PrimaryTitleLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
`;

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 40px;
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
  font-size: 16px;
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
  margin-top: 30px;
`;

const PointProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyleUserDes = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #82ebff;
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
  width: 55%;
`;
const StyleOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 100px;
`;
const StyleLeft = styled.div`
  width: 70%;
  margin-left: -20px;
`;

const StyleRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const StyleModalBox = styled(Box)`
  position: fixed;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  box-shadow: 24;
  padding: 0;
`;

const StyleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyleBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
  flex-wrap: nowrap;
  background-color: #252525;
  border-radius: 10px;
  width: 100%;
  padding: 20px 50px;
`;

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`;

const StyleBottomSubmit = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const StyleBottomGotIt = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyleInput = styled(TextField)`
  border-radius: 20px;
  color: #fff;
  background-color: #353535;
  border: 0px #353535 solid;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleRequest = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #f23581;
  margin-top: 15px;
`;
