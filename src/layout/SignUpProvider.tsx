"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
import bg_Sign_up_k3N from "@/assets/images/BgSignUpK3N.png";
import sign_up_k3N from "@/assets/images/SignUpK3N.png";
import logoK3N from "@/assets/images/Logo.png";

interface ISignUpProps {
  children: ReactNode;
}

interface IIMG {
  bgSignUpK3N?: string;
  signUpK3N?: string;
}

const SignUpProvider = ({ children }: ISignUpProps) => {
  return (
    <Container bgSignUpK3N={bg_Sign_up_k3N.src}>
      <Opacity></Opacity>
      <Left signUpK3N={sign_up_k3N.src}></Left>
      <Right>
        <Logo>
          <Image src={logoK3N} title="logo" alt="logo k3n" layout="fill" />
        </Logo>
        <SectionSignUp>{children}</SectionSignUp>
      </Right>
    </Container>
  );
};

export default SignUpProvider;

const Container = styled.div<IIMG>`
  position: relative;
  display: flex;
  flex-direction: row;
  /* background-image: url(${bg_Sign_up_k3N.src}); */
  background-image: url(${(props) => props.bgSignUpK3N});
  /* mix-blend-mode: soft-light; */
  background-size: cover;
  background-color: #00000078;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-color: #000;
`;
const Left = styled.div<IIMG>`
  position: relative;
  width: 50%;
  height: 100%;
  /* background-image: url(${sign_up_k3N.src}); */
  background-image: url(${(props) => props.signUpK3N});
  background-size: cover;
  @media (max-width: 1299px) {
    display: none;
  }
`;
const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 120px 62px;
  @media (max-width: 1299px) {
    width: 100%;
  }
`;
const Logo = styled.div`
  position: relative;
  height: 65px;
  width: 200px;
  @media (max-width: 460px) {
    height: 45px;
    width: 150px;
  }
`;

const SectionSignUp = styled.div``;
