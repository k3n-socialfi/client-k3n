"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "@/assets/images/Logo.png";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import { Avatar, Typography } from "@mui/material";
import useClickOutside from "@/hooks/useClickOutside";
import {
  IconMenuBar,
  IconNotification,
  IconSearch,
  IconThunder,
} from "@/assets/icons";
import { IconChevronDown } from "@/assets/icons";
import { PopupProfile } from "./components/PopupProfile";
import Popup from "./components/Popup";
import useWalletCustom from "@/hooks/useWalletCustom";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

type THeaderProp = {
  handleToggleSidebar?: () => void;
};

export const Header = ({ handleToggleSidebar }: THeaderProp) => {
  const { push } = useRouter();
  const [isClient, setIsClient] = useState(false);
  const {
    handleLoginTwitter,
    buttonState,
    setPopup,
    setPopupProfile,
    label,
    popup,
    handleWallet,
    handleClick,
    base58Pubkey,
    popupProfile,
    nodeRef,
  } = useWalletCustom();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { dataPersonal } = useMyProfileContext();

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <ToggleSideBar onClick={handleToggleSidebar}>
          <IconMenuBar />
        </ToggleSideBar>
        <ImgCustom>
          <Image
            onClick={() => push("/")}
            alt="logo"
            src={logo}
            layout="fill"
          />
        </ImgCustom>
      </HeaderLogo>
      {/* <HeaderSearch>
        <HeaderIcon>
          <IconSearch />
        </HeaderIcon>
        <TextSearch>
          <TextField type="text" placeholder="Collection, item or User" />
        </TextSearch>
        <HeaderIcon>
          <IconChevronDown />
        </HeaderIcon>
      </HeaderSearch> */}
      {isClient && (
        <HeaderUserMobile>
          {label === "Disconnect" || buttonState === "connected" ? (
            <HeaderUser onClick={() => setPopupProfile(!popupProfile)}>
              {/* <UserNotification>
                <IconNotification />
                <NumberNotification>15</NumberNotification>
              </UserNotification> */}
              <HeaderUserInfo>
                <IconThunder />
                <TypographyCustom className="header-user__info__text">
                  {dataPersonal?.twitterInfo?.totalPoints ?? 0}
                </TypographyCustom>
                <HeaderAvatar ref={nodeRef}>
                  <AvatarCustom
                    className="header-user__info__avatar"
                    alt="Cindy Baker"
                    src={dataPersonal?.twitterInfo?.avatar}
                  />
                </HeaderAvatar>
              </HeaderUserInfo>
            </HeaderUser>
          ) : (
            <HeaderButton className="header-button">
              <Button>
                <ButtonPrimary
                  fullWidth
                  borderRadius="16px"
                  onClick={() => push("/login")}
                >
                  Login
                </ButtonPrimary>
              </Button>
            </HeaderButton>
          )}
          {popup && (
            <Popup
              handleLoginTwitter={handleLoginTwitter}
              setPopup={setPopup}
            />
          )}
          {popupProfile && (
            <PopupProfile
              myProfile={dataPersonal}
              setPopupProfile={setPopupProfile}
              handleDisConnect={(value: number) => handleWallet(value)}
              base58Pubkey={base58Pubkey}
            />
          )}
        </HeaderUserMobile>
      )}
    </HeaderWrapper>
  );
};

const ToggleSideBar = styled.div`
  &:active {
    opacity: 0.8;
  }
  cursor: pointer;
  @media (min-width: 1600px) {
    display: none;
  }
`;

const ImgCustom = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    background-color: pink;
    border-radius: 16px;
    transition: all 0.5s;
  }
  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
`;
const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  padding: 15px 20px;
  background: var(--background-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--Card-Card900, rgba(52, 59, 74, 1));
  @media (max-width: 768px) {
  }
  @media (max-width: 610px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  width: 70%;
  @media (max-width: 1599px) {
    gap: 10px;
    width: 70%;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 40%;
  }

  @media (max-width: 610px) {
    order: 1;
  }

  @media (max-width: 390px) {
    width: 40%;
  }
`;
const HeaderSearch = styled.div`
  background: #191d24;
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 356px;
  padding: 5px 10px;
  border-radius: 12px;
  width: 20%;
  @media (max-width: 1599px) {
    width: 30%;
  }
  @media (max-width: 820px) {
    min-width: 350px;
  }
  @media (max-width: 660px) {
    min-width: 300px;
  }
  @media (max-width: 610px) {
    width: 100%;
    order: 3;
  }
  @media (max-width: 390px) {
    min-width: 150px;
    order: 3;
  }
`;

const HeaderUserMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 70%;
  justify-content: flex-end;
  @media (max-width: 1599px) {
    width: 40%;
  }
  @media (max-width: 610px) {
    order: 1;
  }
  @media (max-width: 390px) {
    width: 30%;
  }
  @media (max-width: 294px) {
    align-self: center;
    flex-direction: column;
    width: 50%;
  }
`;

const HeaderIcon = styled.div`
  color: #798395;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextSearch = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
  /* @media (max-width: 580px) {
    input {
      max-width: 100px;
    }
  } */
  /* @media (max-width: 440px) {
    input {
      max-width: 50px;
    }
  } */
`;
const TextField = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  color: #637592;
  ::placeholder {
    color: #637592;
  }
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
  background: transparent;
  border-radius: 10px;
  padding: 0 5px;
`;

const HeaderAvatar = styled.div``;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
`;
const AvatarCustom = styled(Avatar)`
  cursor: pointer;
  border: 3px solid #82ebff;
`;
const TypographyCustom = styled(Typography)`
  color: #fff;
`;

const Button = styled.div`
  width: 178px;
`;
