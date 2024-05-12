"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonElevated } from "../ButtonCustom";
import { useRouter } from "next/navigation";

const PopupLogin = () => {
  const router = useRouter();
  const isSignUp =
    typeof window !== "undefined" && sessionStorage.getItem("isSignUp");
  return (
    <WrapperPopup>
      <PopupItem>
        <PopupTitle>You have successfully logged in with Twitter</PopupTitle>
        <ButtonElevated
          size="large"
          onClick={() => router.push(isSignUp ? "/sign-up" : "/")}
        >
          Ok
        </ButtonElevated>
      </PopupItem>
    </WrapperPopup>
  );
};

const WrapperPopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const PopupItem = styled.div`
  position: relative;
  padding: 30px;
  background: #393939;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const PopupTitle = styled.div`
  width: 75%;
  text-align: center;
  color: #fff;
`;

const PopupIconClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export default PopupLogin;
