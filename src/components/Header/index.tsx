"use client";

import { IconMenuBar, IconThunder } from "@/assets/icons";
import logo from "@/assets/svgs/k3n.svg";
import { motion } from "framer-motion";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import useWalletCustom from "@/hooks/useWalletCustom";
import { Avatar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Popup from "./components/Popup";
import { PopupProfile } from "./components/PopupProfile";
import { useCallback, useState } from "react";
import MobileSidebar from "../SideBar/MobileSideBar";

export const Header = () => {
  const { push } = useRouter();
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

  const { dataPersonal } = useMyProfileContext();

  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsShowSidebar(!isShowSidebar);
  }, [isShowSidebar]);

  return (
    <HeaderWrapper>
      <MobileSidebar onClose={toggleSidebar} isOpen={isShowSidebar} />
      <div className="flex items-center gap-3">
        <div onClick={toggleSidebar} className="block lg:hidden cursor-pointer">
          <IconMenuBar size={32} />
        </div>
        <Image
          onClick={() => push("/")}
          alt="logo"
          src={logo}
          width={131}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row gap-2 justify-end flex-grow">
        {label === "Disconnect" ||
        buttonState === "connected" ||
        dataPersonal ? (
          <HeaderUser>
            <HeaderUserInfo onClick={() => setPopupProfile(!popupProfile)}>
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
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
              whileTap={{ scale: 0.85 }}
              onClick={() => push("/login")}
              className="bg-primary px-8 py-2 text-center font-bold rounded-md"
            >
              Login
            </motion.button>
          </HeaderButton>
        )}
        {popup && (
          <Popup handleLoginTwitter={handleLoginTwitter} setPopup={setPopup} />
        )}
        {popupProfile && (
          <PopupProfile
            myProfile={dataPersonal}
            setPopupProfile={setPopupProfile}
            handleDisConnect={(value: number) => handleWallet(value)}
            base58Pubkey={base58Pubkey}
          />
        )}
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99;
  width: 100%;
  background: var(--background-primary);
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--Card-Card900, rgba(52, 59, 74, 1));
`;

const HeaderUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
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
  color: #fff;
`;
const AvatarCustom = styled(Avatar)`
  cursor: pointer;
  border: 3px solid #82ebff;
`;
const TypographyCustom = styled(Typography)`
  color: #fff;
`;
