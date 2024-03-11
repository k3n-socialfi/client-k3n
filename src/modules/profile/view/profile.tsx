"use client"
import { IconTwitter } from "@/assets/icons";
import { Divider } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export interface IUserProfileProps { }
const IMG_NFT = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


const Overview = () => {
  return (
    <StyleInfor>
      Overview
    </StyleInfor>
  )
}

const Experience = () => {
  return (
    <div>
      aaa
    </div>
  )
}

const Personal = () => {
  return (
    <StylePersonal>
      <StylePersonalLeft>
        <StylePersonalLeft>
          <StyleImage src={IMG_NFT} alt="avatar profile" width={220} height={220} />
          <StyleContentUser>
            <StyleTitle> User Name</StyleTitle>
            <StyleUserDes>
              I'm developer software engineer
            </StyleUserDes>
            <StyleUserDes>
              Influencer
            </StyleUserDes>
            <StyleUserSocial>Social</StyleUserSocial>
            <StyleIcons>
              <IconTwitter />
              <IconTwitter />
              <IconTwitter />
              <IconTwitter />
            </StyleIcons>
          </StyleContentUser>
        </StylePersonalLeft>
      </StylePersonalLeft>
      <StylePersonalRight>
        Icons
      </StylePersonalRight>
    </StylePersonal>
  )
}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <Personal />
      <Divider />
      <Overview />
      <Divider />
      <Experience />
    </StyleContainer>
  )
}


const StyleContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
`
const StylePersonal = styled.div`
display: flex;
  gap:32px;
  padding: 24px 14px;
`
const StyleImage = styled(Image)`
border: 2px solid #FFF;
  border-radius: 50%;
`
const StylePersonalLeft = styled.div`
  width: 100%;
 display: flex;
 align-items: center;
 gap: 32px;
`
const StyleContentUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
`
const StyleUserDes = styled.div`
padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #82EBFF;

`
const StyleUserSocial = styled.div`
    font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #B9B9B9;
`
const StyleIcons = styled.div`
  display: flex;
  gap: 8px;
`

const StylePersonalRight = styled.div`
  padding: 48px 0;
  width: 100%;
`
const StyleInfor = styled.div`

`

