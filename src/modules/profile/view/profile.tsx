"use client"
import { Avatar, Button } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <StyleContent>
      <StyleIcon>icons</StyleIcon>
      <StyleAvatar><Avatar/></StyleAvatar>
      <StyleInfo>user</StyleInfo>
      </StyleContent>
       <StyleContent>
          <Button sx={{borderRadius: "20px"}} color="secondary" variant="outlined">Subscribe</Button>
          <Button sx={{borderRadius: "20px"}} color="primary" variant="contained">Book</Button>
      </StyleContent>
    </StyleContainer>
  )
}

const StyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const StyleIcon = styled.div`
  
`
const StyleAvatar = styled.div`
  
`
const StyleInfo = styled.div`
  
`