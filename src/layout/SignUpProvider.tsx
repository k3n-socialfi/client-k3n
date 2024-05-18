"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
import bg_Sign_up_k3N from "@/assets/images/BgSignUpK3N.png";
import bg_Sign_up_k3NV2 from "@/assets/images/BgSignUpK3NV2.png";
import sign_up_k3N from "@/assets/images/SignUpK3N.png";

interface ISignUpProps {
  children: ReactNode;
}

interface IIMG {
  bgSignUpK3N?: string;
  signUpK3N?: string;
}

const SignUpProvider = ({ children }: ISignUpProps) => {
  return (
    <Container>
      <Background>
        <ImageCustom src={bg_Sign_up_k3NV2} alt="" />
      </Background>
      <Right>
        <Opacity></Opacity>
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
  justify-content: center;
  /* background-image: url(${bg_Sign_up_k3N.src}); */
  background-image: url(${(props) => props.bgSignUpK3N});
  /* mix-blend-mode: inherit; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* backdrop-filter: invert(1); */
  /* margin: auto; */
  background-color: #080a0c;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 146px 0 46px 0;
`;

const ImageCustom = styled(Image)`
  width: 885px;
  height: 885px;
  @media (max-width: 1100px) {
    width: 785px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Left = styled.div<IIMG>`
  position: relative;
  width: 60%;
  height: 100%;
  /* min-height: 100vh; */
  /* background-image: url(${sign_up_k3N.src}); */
  background-image: url(${(props) => props.signUpK3N});
  background-size: cover;
  @media (max-width: 1299px) {
    display: none;
  }
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  @media (max-width: 1499px) {
    width: 60%;
  }
  @media (max-width: 1299px) {
    width: 100%;
  }
`;
const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 1;
  background-color: #000;
`;

const SectionSignUp = styled.div`
  z-index: 2;
`;
