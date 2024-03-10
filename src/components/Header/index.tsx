"use client"
import { IconDots, IconNFT, IconRight, IconTwitter } from "@/assets/icons";
import { Avatar, Button } from "@mui/material";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyleContainer>
      <StyleHeader>
        <StyleContent>
          <IconRight />
          <Avatar sx={{ width: 48, height: 48 }} />
          <div>
            <StyleName>
              user name
            </StyleName>
            <StyleSocial>
              <div>
                240 post
              </div>
              <IconDots />
              <IconTwitter />
              <div>
                344.2k followers
              </div>
            </StyleSocial>
          </div>
        </StyleContent>
        <StyleContent>
          <Button sx={{ borderRadius: "14px", color: "#fff" }} variant="outlined">Subscribe</Button>
          <Button sx={{ borderRadius: "14px" }} color="primary" variant="contained" endIcon={<IconNFT />}>Book</Button>
        </StyleContent>
      </StyleHeader>
    </StyleContainer>
  )
}

const StyleContainer = styled.div`
  background-color: #161616 ;
  padding: 12px 40px;
`
const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
`
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: #FFFFFF;
`
const StyleName = styled.div`
  margin-bottom: 6px;
`
const StyleSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`