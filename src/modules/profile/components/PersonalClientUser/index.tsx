import {
  IconBlue,
  IconEdit,
  IconPointProfile,
  IconStar,
  IconStarNormal,
  IconVerify,
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import { SOCIAL } from "@/constant/social";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface IPropUserDes {
  color?: string;
}

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function PersonalClientUser({ userProfile }: any) {
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
          <StyleContentFlex>
            <StyleContentUser>
              {userProfile?.bio && (
                <StyleUserDes color="#FFD7F4">{userProfile.bio}</StyleUserDes>
              )}
              <StyleUserDes>Influencer</StyleUserDes>
              <StyleUserSocial>Social</StyleUserSocial>
              <StyleIcons>
                {userProfile?.socialProfiles?.map(
                  (item: any, index: number) =>
                    (
                      <Link
                        key={index}
                        href={`https://twitter.com/${item?.username}`}
                        target="_blank"
                      >
                        {SOCIAL[item?.social]}
                      </Link>
                    ) ?? <></>,
                )}
              </StyleIcons>
            </StyleContentUser>
            <StyleContentUser>
              <StyleTotal>
                <StyleDesOverview>Total Achievements:</StyleDesOverview>
                <StyleSubTitle>32</StyleSubTitle>
              </StyleTotal>
              <StyleTotal>
                <StyleDesOverview>Review:</StyleDesOverview>
                <StyleSubTitle>
                  {userProfile?.review} <IconStar />
                </StyleSubTitle>
              </StyleTotal>
            </StyleContentUser>
            <StyleContentUser
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <StyleDesOverview>Location</StyleDesOverview>
              <StyleSubTitle>
                {userProfile.location ? userProfile.location : "-"}
              </StyleSubTitle>
            </StyleContentUser>
            <StyleContentUser>
              <StyleTotal>
                <StyleDesOverview>X Followers:</StyleDesOverview>
                <StyleSubTitle>
                  {userProfile?.twitterInfo?.followers}
                </StyleSubTitle>
              </StyleTotal>
            </StyleContentUser>
          </StyleContentFlex>
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        <StyleButtons>
          <StyleButtonTitle>
            <IconBlue />
            Share
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconStarNormal />
            Follow <strong>{userProfile?.fullName}</strong>
          </StyleButtonTitle>
        </StyleButtons>
        <StyleChips>
          {userProfile?.tags?.map((listTag: string, index: number) => (
            <Chips
              key={index}
              label={listTag}
              color="secondary"
              sx={{ color: "#25002D", backgroundColor: "#F6CCFF" }}
            />
          ))}
        </StyleChips>
        <ButtonPrimary>
          <Typography sx={{ p: "8px 0" }}>
            DM to {userProfile?.fullName}
          </Typography>
        </ButtonPrimary>
      </StylePersonalRight>
    </StylePersonal>
  );
}

const StylePersonal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 14px 24px 14px;
  gap: 20px;
  @media (max-width: 1120px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
  }
  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const StylePersonalLeft = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 12px;
  }
`;

const StyleImage = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
`;

const StyleContentUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 650px) {
    align-items: center;
    margin-top: -40px;
  }
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 650px) {
    align-items: center;
  }
`;

const PointProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyleContentFlex = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyleUserDes = styled.div<IPropUserDes>`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: ${({ color }) => (color ? color : "#82EBFF")};
  width: fit-content;
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const WrapperCategori = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyleUserSocial = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #82ebff;
`;

const StyleIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 420px) {
    flex-wrap: wrap;
  }
`;

const StyleTotal = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  gap: 10px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
  white-space: nowrap;
`;

const StyleSubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const StylePersonalRight = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: right;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  @media (max-width: 1120px) {
    width: 100%;
    margin-left: 250px;
    margin-top: 10px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 420px) {
  }
`;

const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyleButtonTitle = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #39393985;
  cursor: pointer;
  color: #ffd7f4;
  border-radius: 6px;
  &:hover {
    transform: scale(0.9);
    color: #ffffff;
    transition: all 0.5s;
  }
`;

const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 0;
  color: #ffff !important;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
