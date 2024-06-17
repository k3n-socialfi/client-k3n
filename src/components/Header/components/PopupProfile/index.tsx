import React from "react";
import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import { LIST_POPUPITEM } from "@/constant/data";
import { IconCheckCrile, IconLogout, IconThunder } from "@/assets/icons";
import { TYPE_WALLET } from "@/constant";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
interface IPropPopupProfile {
  handleDisConnect?: any;
  base58Pubkey?: string;
  setPopupProfile?: any;
  myProfile: any;
}

export const PopupProfile = (props: IPropPopupProfile) => {
  const { setPopupProfile, handleDisConnect, base58Pubkey, myProfile } = props;
  const { dataPersonal, dataPosts, isLoading, fetchData } =
    useMyProfileContext();
  return (
    <>
      <WrapperPopup>
        <ProfileSection>
          <ProfileAvatar>
            <AvatarCustom
              alt="Cindy Baker"
              src={myProfile?.twitterInfo?.avatar}
            />
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileText>
              <ProfileName className="profile-section__info__name">
                {myProfile?.fullName}
                {myProfile?.twitterInfo?.verificationStatus && (
                  <IconCheckCrile />
                )}
              </ProfileName>
              {/* <ProfileDes className="profile-section__info__des">
                {base58Pubkey?.slice(0, 4)}...{base58Pubkey?.slice(40, 44)}
              </ProfileDes> */}
              <ProfileDes>{myProfile?.jobTittle}</ProfileDes>
            </ProfileText>
            <ProfileInfoText className="profile-section__info__text">
              <IconThunder />
              <Typography>{myProfile?.twitterInfo?.totalPoints}</Typography>
            </ProfileInfoText>
          </ProfileInfo>
        </ProfileSection>
        <ProfileList className="profile-list">
          {LIST_POPUPITEM.map((item) => {
            return (
              <ProfileItem
                className="profile-list__item"
                key={item.name}
                onClick={() => setPopupProfile(false)}
              >
                <LinkCustom
                  href={item.href}
                  className="profile-list__item__link"
                >
                  <item.icon />
                  {item.name}
                </LinkCustom>
              </ProfileItem>
            );
          })}
          <ProfileItem
            className="profile-list__item"
            onClick={() => handleDisConnect(TYPE_WALLET.disconnect)}
          >
            <LinkCustom href="" className="profile-list__item__link">
              <IconLogout />
              Logout
            </LinkCustom>
          </ProfileItem>
        </ProfileList>
      </WrapperPopup>
    </>
  );
};

const WrapperPopup = styled.div`
  position: absolute;
  z-index: 100;
  top: 82%;
  right: 27px;
  border-radius: 16px;
  background: #393939;
  border: 3px solid #969696;
  box-shadow: 0px 3px #111;
  min-width: 350px;
  @media (max-width: 768px) {
    min-width: 240px;
  }
  @media (max-width: 486px) {
    top: 60%;
  }
`;
const AvatarCustom = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #969696;
  gap: 10px;
  padding: 15px 15px;
`;
const ProfileAvatar = styled.div``;

const ProfileInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex: 1;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProfileInfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
`;
const ProfileName = styled(Typography)`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: #f23581;
    width: 16px;
    height: 16px;
  }
`;

const ProfileDes = styled(Typography)`
  color: #82ebff;
`;
const ProfileList = styled.div`
  margin: 0;
  padding: 0 0 10px 0;
`;
const ProfileItem = styled.div`
  padding: 15px 15px;
  list-style: none;
  &:hover {
    border-radius: 10px;
    background: #667085;
  }
  &:active {
    background: #222425;
    transition: 0.5s ease;
  }
`;
const LinkCustom = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
`;
