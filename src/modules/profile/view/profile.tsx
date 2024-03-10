"use client"
import { IconAvatar, IconLike, IconRightNormal, IconStar } from "@/assets/icons";
import { ButtonCustom } from "@/components/ButtonCustom";
import Cards from "@/components/Card";
import Chips from "@/components/Chip";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import TabsPost from '../components/Post/TabsPost';
import CustomizedTabs from "../components/Tabs";

export interface IUserProfileProps { }
const IMG_NFT = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const Personal = () => {
  return (
    <StylePersonal>
      <Image style={{ width: '100%', borderRadius: '12px' }} width={0} height={293} sizes="100vw" src={IMG_NFT} alt="igs" />
      <StyleInfo>
        <StyleDetails>
          <StyleTitle>About me</StyleTitle>
          <StyleSpan>
            Creating top-tier video content for the leading projects in the NFT space. Clients include major brands like Pudgy Penguins, Magic Eden, RugRadio.
          </StyleSpan>
        </StyleDetails>
        <StyleTags>
          <StyleTitle>Tags</StyleTitle>
          <StyleChips>
            <Chips label="Social Fi" variant="outlined" />
            <Chips label="Researcher" color="success" />
            <Chips label="Ethereum" color="warning" />
            <Chips label="Ethereum" color="warning" />
          </StyleChips>
        </StyleTags>
        <StyleReview>
          <StyleTitle>Reviews</StyleTitle>
          <StyleIcon>
            <IconStar /> 5.0(1.654)
          </StyleIcon>
        </StyleReview>
      </StyleInfo>
    </StylePersonal>
  )
}

const InformationSocial = () => {
  return (
    <StyleInfor>
      <StyleTitle>You also may like</StyleTitle>
      <StyleInforSocial>
        <StyleSocials>
          <IconAvatar />
          <div>
            <StyleTitle>Elena</StyleTitle>
            <StyleUser>@username</StyleUser>
          </div>
        </StyleSocials>
        <ButtonCustom>Subscribe</ButtonCustom>
      </StyleInforSocial>
      <StyleShowMore><div>Show more</div> <IconRightNormal /></StyleShowMore>
    </StyleInfor>
  )
}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <Personal />
      <StyleFeed>
        <StyleLeft><TabsPost /></StyleLeft>
        <StyleRight>
          <div>
            <CustomizedTabs />
          </div>
          <div>
            <InformationSocial />
          </div>
        </StyleRight>
      </StyleFeed>
      <StyleCard>
        <StyleTitle>People who viewed this project may view</StyleTitle>
        <StyleSlideCard>
          <div style={{ width: "33%" }}>
            <Cards url={IMG_NFT} title="content" content={<Chips label="Social Fi" variant="outlined" />} actions={<Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>} />
          </div>
          <div style={{ width: "33%" }}>
            <Cards url={IMG_NFT} title="content" content={<Chips label="Social Fi" variant="outlined" />} actions={<Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>} />
          </div>
          <div style={{ width: "33%" }}>
            <Cards url={IMG_NFT} title="content" content={<Chips label="Social Fi" variant="outlined" />} actions={<Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>} />
          </div>
        </StyleSlideCard>
      </StyleCard>
    </StyleContainer>
  )
}


const StyleCard = styled.div`
  padding: 48px 0;
  width: 100%;
`

const StyleSlideCard = styled.div`
  width: 100%;
 display: flex;
 gap: 12px;
`
const StyleContainer = styled.div`
  margin: 0 40px;
`

const StylePersonal = styled.div`
  background-color: #F23581;
  color: #ffffff;
  margin: 40px 0;
  border-radius: 12px;
`
const StyleInfo = styled.div`
  padding: 12px;
  display: flex;
`
const StyleDetails = styled.div`
  width: 50%; 
`
const StyleTags = styled.div`
  width: 25%;
`
const StyleReview = styled.div`
  width: 25%;
`
const StyleSpan = styled.div`
  font-size: 12px;
`
const StyleTitle = styled.div`
  font-size: 16px;
  padding-bottom: 12px;
  color: #FFFFFF;
`
const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
const StyleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const StyleFeed = styled.div`
  display: flex;
  color: #FFFFFF; 
`
const StyleLeft = styled.div`
  width: 57%;
  margin-right: 12px;
`
const StyleRight = styled.div`
  width : 40%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyleInfor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 12px;
  background-color: #353535;
  border-radius: 12px;
`
const StyleUser = styled.div`
  font-size: 12px;
  color: #949292;
`
const StyleInforSocial = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyleSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const StyleShowMore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E92A77;
`
