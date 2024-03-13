"use client";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "@/assets/images/Logo.png";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import { Avatar, Typography } from "@mui/material";
import useClickOutside from "@/hooks/useClickOutside";
import { IconNotification, IconSearch, IconThunder } from "@/assets/icons";
import { IconChevronDown } from "@/assets/icons";
import { PopupProfile } from "./PopupProfile";

export const Header = () => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const { show, setShow, nodeRef } = useClickOutside();
  const handlePopup = () => {
    setShow(!show);
  };

  const handleShowHeader = () => {
    setIsUser(!isUser);
  };

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Image width={114} height={33} alt="logo" src={logo} />
        <HeaderSearch>
          <HeaderIcon>
            <IconSearch />
          </HeaderIcon>
          <TextField type="text" placeholder="Search" />
          <HeaderIcon>
            <IconChevronDown />
          </HeaderIcon>
        </HeaderSearch>
      </HeaderLogo>
      {isUser ? (
        <HeaderUser>
          <UserNotification>
            <IconNotification />
            <NumberNotification>15</NumberNotification>
          </UserNotification>
          <HeaderUserInfo>
            <IconThunder />
            <TypographyCustom className="header-user__info__text">
              250
            </TypographyCustom>
            <HeaderAvatar onClick={handlePopup} ref={nodeRef}>
              <AvatarCustom
                className="header-user__info__avatar"
                alt="Cindy Baker"
                src="/static/images/Avatar.png"
              />
            </HeaderAvatar>
          </HeaderUserInfo>
          {show && <PopupProfile handleShowHeader={handleShowHeader} />}
        </HeaderUser>
      ) : (
        <HeaderButton className="header-button">
          <ButtonSecondary size="large">Signup</ButtonSecondary>
          <ButtonPrimary size="large" onClick={handleShowHeader}>
            Connect Wallet
          </ButtonPrimary>
        </HeaderButton>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 15px 20px;
  background: #393939;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;
const HeaderSearch = styled.div`
  background: #b9b9b9;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 395px;
  padding: 5px 10px;
  border-radius: 16px;
`;
const HeaderIcon = styled.div`
  color: #798395;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextField = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  color: #fff;
`;

const HeaderUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const UserNotification = styled.div`
  position: relative;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NumberNotification = styled.span`
  border-radius: 100%;
  background: #f95a2c;
  color: #fff;
  font-size: 8px;
  width: 12px;
  height: 12px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
`;
const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #3d3d3d;
  border-radius: 10px;
  padding: 0 5px;
`;

const HeaderAvatar = styled.div``;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const AvatarCustom = styled(Avatar)`
  cursor: pointer;
`;
const TypographyCustom = styled(Typography)`
  color: #fff;
`;
