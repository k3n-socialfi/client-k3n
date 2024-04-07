"use client";
import {
  IconBlue,
  IconEdit,
  IconPointProfile,
  IconStarNormal,
  IconVerify,
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { SOCIAL } from "@/constant/social";
import { useProfileContext } from "@/contexts/ProfileContext";
import { useBoolean } from "@/hooks/useBoolean";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import Experience from "../components/Experiences";
import PostUser from "../components/PostUser";
import Services from "../components/services";
import PersonSkeleton from "../components/PersonSkeleton";
import PostSkeleton from "../components/PostSkeleton";
import ServicesSkeleton from "../components/ServicesSkeleton";
import OverviewSkeleton from "../components/OverviewSkeleton";

export interface IUserProfileProps {}
const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Overview = ({ overView }: any) => {
  const openModal = useBoolean();

  return overView ? (
    <StyleOverview>
      <StyleLeft>
        <StyleTitle>Overview</StyleTitle>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Researcher - Builder</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Organization</StyleDesOverview>
            <StyleSubTitle>Azuki</StyleSubTitle>
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
            <StyleDesOverview>Twitter</StyleDesOverview>
            <StyleSubTitle>{overView?.twitterInfo?.followers}</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary per post</StyleDesOverview>
            <StyleSubTitle>$12,450</StyleSubTitle>
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
  ) : (
    <ContentNotData>
      <StyleTitle>OverView</StyleTitle>
      <DescriptionNotData>
        {`You don't have any work Overview yet.`}
      </DescriptionNotData>
    </ContentNotData>
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
            {userProfile?.fullName ?? "User Name"}
            {userProfile?.twitterInfo?.verificationStatus && <IconVerify />}
          </StyleTitle>
          <PointProfile>
            <IconPointProfile />
            {userProfile?.twitterInfo?.totalPoints ?? 0}
          </PointProfile>
          <StyleUserDes>{userProfile?.bio ?? "Data null"}</StyleUserDes>
          <StyleUserDes>Influencer</StyleUserDes>
          <StyleUserSocial>Social</StyleUserSocial>
          <StyleIcons>
            {userProfile?.socialProfiles.map(
              (item: any, index: number) => SOCIAL[item?.social] ?? <></>
            )}
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

export default function ClientProfile(props: IUserProfileProps) {
  const { isLoading, userProfile, getUserProfile } = useProfileContext();

  const { username } = useParams();
  useEffect(() => {
    getUserProfile(username?.toString());
  }, [username]);

  return (
    <StyleContainer>
      {isLoading ? <PersonSkeleton /> : <Personal userProfile={userProfile} />}
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <div style={{ display: "flex", width: "100%" }}>
        <PostLeft>
          <StyleTitle>Post</StyleTitle>
          <Posts>
            {isLoading ? (
              <PostSkeleton />
            ) : userProfile?.posts.length > 0 ? (
              userProfile?.posts.map((item: any, index: number) => (
                <>
                  <PostUser item={item} />
                </>
              ))
            ) : (
              <PostNotData>{`You haven't made any posts yet.`}</PostNotData>
            )}
          </Posts>
        </PostLeft>
        <div style={{ width: "70%" }}>
          {isLoading ? (
            <OverviewSkeleton />
          ) : (
            <Overview overView={userProfile} />
          )}

          <Divider sx={{ borderColor: "#B9B9B9 " }} />

          {isLoading ? (
            <ServicesSkeleton />
          ) : (
            <Experience experience={userProfile} />
          )}

          <Divider sx={{ borderColor: "#B9B9B9 " }} />

          {isLoading ? (
            <ServicesSkeleton />
          ) : (
            <Services services={userProfile} />
          )}

          <Divider sx={{ borderColor: "#B9B9B9 " }} />
        </div>
      </div>
    </StyleContainer>
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

const NotData = styled.div`
  padding: 20px;
`;

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

const PostNotData = styled.div`
  margin: 30px auto;
  color: #f23581;
`;

const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
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
  gap: 60px;
  padding: 24px 0;
`;

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  gap: 100px;
`;
const StyleLeft = styled.div`
  width: 100%;
`;

const StyleRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
