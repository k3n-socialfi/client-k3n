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
import { useBoolean } from "@/hooks/useBoolean";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Experience from "../components/Experiences";
import PostUser from "../components/PostUser";
import Services from "../components/services";
import { getMyProfile } from "./../../../services/index";
import EditProfile from "@/components/EditProfile";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import PersonSkeleton from "@/components/Skeleton/PersonSkeleton";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import OverviewSkeleton from "@/components/Skeleton/OverviewSkeleton";
import ServicesSkeleton from "@/components/Skeleton/ServicesSkeleton";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { useProfileContext } from "@/contexts/ProfileContext";
import { useMyProfileContext } from "@/contexts/MyProfileConext";

export interface IUserProfileProps {
  widthNotData?: boolean;
}

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Overview = ({ overview }: any) => {
  const openModal = useBoolean();
  return overview ? (
    <StyleOverview>
      <StyleLeft>
        <StyleTitle>Overview</StyleTitle>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleLeft>
        <PrimaryTitleLeft>
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
        </PrimaryTitleLeft>
      </StyleLeft>
      <StyleRight>
        <PrimaryTitleRight>
          <StyleContentOverview>
            <StyleDesOverview>Twitter</StyleDesOverview>
            <StyleSubTitle>
              {overview?.twitterInfo?.followers ?? 0}
            </StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary per post</StyleDesOverview>
            <StyleSubTitle>$12,450</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleRight>
        {/* <ButtonPrimary onClick={() => openModal?.onTrue()}>
          <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
        </ButtonPrimary> */}
      </StyleRight>
      {openModal?.value && (
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

const Personal = ({ dataPersonal, resetPage }: any) => {
  const isOpenEditProfile = useBoolean();
  const openModal = useBoolean();
  return (
    <StylePersonal>
      <StylePersonalLeft>
        <StyleImage
          src={dataPersonal?.twitterInfo?.avatar ?? IMG_NFT}
          alt="avatar profile"
          width={220}
          height={220}
        />
        <StyleContentUser>
          <StyleTitle>
            {dataPersonal?.fullName ?? "User Name"}
            {dataPersonal?.twitterInfo?.verificationStatus && <IconVerify />}
          </StyleTitle>
          <PointProfile>
            <IconPointProfile />
            {dataPersonal?.twitterInfo?.totalPoints ?? 0}
          </PointProfile>
          {dataPersonal.bio && <StyleUserDes>{dataPersonal.bio}</StyleUserDes>}
          <div style={{ display: "flex", gap: "16px" }}>
            <StyleUserDes>Influencer</StyleUserDes>
            {dataPersonal.location && (
              <StyleContentOverview>
                <StyleDesOverview>Location</StyleDesOverview>
                <StyleSubTitle>{dataPersonal.location}</StyleSubTitle>
              </StyleContentOverview>
            )}
          </div>
          <StyleUserSocial>Social</StyleUserSocial>
          <StyleIcons>
            {dataPersonal?.socialProfiles?.map(
              (item: any, index: number) => SOCIAL[item?.social] ?? <></>,
            )}
          </StyleIcons>
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        <StyleButtons>
          <StyleButtonTitle onClick={isOpenEditProfile.onTrue}>
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
        <ButtonPrimary onClick={() => openModal?.onTrue()}>
          <Typography sx={{ p: "8px 0" }}>
            DM to {dataPersonal?.fullName}
          </Typography>
        </ButtonPrimary>
      </StylePersonalRight>
      {isOpenEditProfile.value && (
        <EditProfile
          resetModal={isOpenEditProfile.onFalse}
          dataPersonal={dataPersonal}
          resetPage={resetPage}
        />
      )}
    </StylePersonal>
  );
};

export default function UserProfile(props: IUserProfileProps) {
  const { dataPopularServices } = useServicesContext();
  const { dataPersonal, dataPosts, isLoading, fetchData } =
    useMyProfileContext();

  return (
    <StyleContainer>
      {isLoading ? (
        <PersonSkeleton />
      ) : dataPersonal ? (
        <Personal dataPersonal={dataPersonal} resetPage={() => fetchData()} />
      ) : (
        <PersonSkeleton />
      )}
      {}
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <Content>
        <PostLeft>
          {isLoading ? (
            <LoadingSkeleton width="200px" height="30px" />
          ) : (
            <StyleTitle>Post</StyleTitle>
          )}
          <Posts widthNotData={dataPosts?.length > 0}>
            {isLoading ? (
              [1, 2, 3, 4, 5].map((item) => <PostSkeleton key={item} />)
            ) : dataPosts?.length > 0 ? (
              dataPosts.map((item: any, index: number) => (
                <>
                  <PostUser item={item} />
                </>
              ))
            ) : (
              <PostNotData>{`You haven't made any posts yet.`}</PostNotData>
            )}
          </Posts>
        </PostLeft>
        <ContentRight>
          {isLoading ? (
            <>
              <OverviewSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <ServicesSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <ServicesSkeleton />
            </>
          ) : (
            <>
              <Overview overview={dataPersonal} />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <Experience experience={dataPersonal} />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <Services
                dataPopularServices={dataPopularServices}
                services={dataPersonal}
              />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
            </>
          )}
        </ContentRight>
      </Content>
    </StyleContainer>
  );
}

const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentRight = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

const PostLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  padding: 12px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Posts = styled.div<IUserProfileProps>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 1260px;
  width: 100%;
  height: auto;

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
  @media (max-width: 520px) {
    flex-wrap: no-wrap;
    gap: 4px;
  }
`;
const StyleButtonTitle = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #393939;
  cursor: pointer;
  color: #b9b9b9;
  border-radius: 6px;
`;
const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
`;
const PrimaryTitleLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  @media (max-width: 520px) {
    flex-wrap: wrap;
    padding: 8px;
    justify-content: center;
  }
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
  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  gap: 14px;
  width: 40%;
  @media (max-width: 520px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 30px;
  }
`;
const StyleOverview = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 20px;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 14px;
  }
`;
const StyleLeft = styled.div``;

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
