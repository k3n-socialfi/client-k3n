"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "@/assets/images/Logo.png";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { Avatar, Typography } from "@mui/material";
import useClickOutside from "@/hooks/useClickOutside";
import { IconNotification, IconSearch, IconThunder } from "@/assets/icons";
import { IconChevronDown } from "@/assets/icons";
import { PopupProfile } from "./components/PopupProfile";
import Popup from "./components/Popup";
import useWalletCustom from "@/hooks/useWalletCustom";

export const Header = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { show, setShow, nodeRef } = useClickOutside();
  const { buttonState, setPopup, setPopupProfile, label, popup, handleWallet, handleClick, base58Pubkey, popupProfile } = useWalletCustom()

  const handlePopup = () => {
    setShow(!show);
  };

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <ImgCustom>
          <Image onClick={() => router.push('/')} width={150} height={50} alt="logo" src={logo} />
        </ImgCustom>
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
      {isClient && <div>
        {label === 'Disconnect' ? (
          <HeaderUser onClick={() => setPopupProfile(!popupProfile)}>
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
          </HeaderUser>
        ) : (
          <HeaderButton className="header-button">
            <ButtonPrimary disabled={buttonState === 'connecting' || buttonState === 'disconnecting'} onClick={handleClick}>
              {label}
            </ButtonPrimary>
          </HeaderButton>
        )}
        {popup && <Popup handleConnect={(value: number) => handleWallet(value)} setPopup={setPopup} />}
        {popupProfile && <PopupProfile setPopupProfile={setPopupProfile} handleDisConnect={(value: number) => handleWallet(value)} base58Pubkey={base58Pubkey} />}
      </div>}
    </HeaderWrapper>
  );
};

const ImgCustom = styled.div`
  width: 150px;
  height: 50px;
  cursor: pointer;
  &:hover {
  transform: scale(0.9); 
  background-color: pink;
  border-radius: 16px;
}
`
const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
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
  gap: 8px;
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