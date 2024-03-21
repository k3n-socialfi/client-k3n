"use client"
import * as React from 'react';
import Image from "next/image";
import styled from "styled-components";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { IconDots, IconAvatar, IconComment, IconHeart, IconSave, IconShare, IconSwitch } from "@/assets/icons";

export interface IPostUser { }

const IMG2 = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const string = `SP Group and BCG Energy Joint Stock Company (BCG Energy).`

export const PostUser = (props: IPostUser) => {
  return (
    <StyleMainCard>
      <StyleCardPost>
        <div>
          <StylePost>
            <StyleInforPost>
              <IconAvatar />
              <StyleUserProfile>kw</StyleUserProfile>
              <StyleUser>@username</StyleUser>
              <IconDots />
              <StyleUser>@23 Dec 2023</StyleUser>
            </StyleInforPost>
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {string}
            </Markdown>
            <StylePostImg width={0} height={293} sizes="100vw" src={IMG2} alt="igs" />
            <StyleIcons>
              <StyleIconPost>
                <StyleTotalActions><IconHeart /> 1.353</StyleTotalActions>
                <StyleTotalActions><IconComment /> 2.333</StyleTotalActions>
                <StyleTotalActions><IconSwitch /> 232</StyleTotalActions>
              </StyleIconPost>
              <StyleIconPost>
                <StyleTotalActions><IconSave /></StyleTotalActions>
                <StyleTotalActions><IconShare /></StyleTotalActions>
              </StyleIconPost>
            </StyleIcons>
          </StylePost>
        </div>
      </StyleCardPost>
    </StyleMainCard>
  )
}

const StyleMainCard = styled.div`
  display: flex;
   flex-direction: column; 
   gap: 12px;
   padding: 12px;
   border: 1px solid gray;
   border-radius: 8px;
`
const StylePostImg = styled(Image)`
  width: 100%; 
  height: auto;
  border-radius: 8px;
  margin-top: 12px;
`

const StyleUserProfile = styled.div`
  font-size: 16px;
  color: #FFFFFF;
`
const StyleUser = styled.div`
  font-size: 12px;
  color: #949292;
`
const StyleCardPost = styled.div`
display: flex;
border-radius: 8px;
`
const StyleInforPost = styled.div`
display: flex;
align-items: center;
gap: 8px;
padding-bottom: 12px;
`

const StylePost = styled.div`
color: #ffffff;
`
const StyleIconPost = styled.div`
display: flex;
gap: 24px;

`
const StyleIcons = styled.div`
display: flex;
justify-content: space-between;
padding-top: 12px;
`

const StyleTotalActions = styled.div`
display: flex;
gap: 4px;
`