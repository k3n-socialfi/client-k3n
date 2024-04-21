"use client";
import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  IconDots,
  IconAvatar,
  IconComment,
  IconHeart,
  IconSave,
  IconShare,
  IconSwitch,
} from "@/assets/icons";
import { Avatar } from "@mui/material";

export interface IPostUser {
  item?: any;
}

export default function PostUser({ item }: IPostUser) {
  return (
    <StyleMainCard>
      <StyleCardPost>
        <div>
          <StylePost>
            <StyleInforPost>
              <Avatar alt={item?.user?.name} src={item?.user?.profilePicUrl} />
              <StyleUserProfile>{item?.user?.name}</StyleUserProfile>
              <StyleUser>@{item?.user?.username}</StyleUser>
            </StyleInforPost>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {item?.text}
            </Markdown>
            {item?.mediaUrl?.length > 0 &&
              <StylePostImg
                width={0}
                height={293}
                sizes="100vw"
                src={item?.mediaUrl[0]}
                alt="igs"
              />
            }
            <StyleIcons>
              <StyleIconPost>
                <StyleTotalActions>
                  <IconHeart /> {item?.favoriteCount}
                </StyleTotalActions>
                <StyleTotalActions>
                  <IconComment /> {item?.replyCount}
                </StyleTotalActions>
                <StyleTotalActions>
                  <IconSwitch /> {item?.bookmarkCount}
                </StyleTotalActions>
              </StyleIconPost>
              <StyleIconPost>
                <StyleTotalActions>
                  <IconSave />
                </StyleTotalActions>
              </StyleIconPost>
            </StyleIcons>
          </StylePost>
        </div>
      </StyleCardPost>
    </StyleMainCard>
  );
}

const StyleMainCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
`;
const StylePostImg = styled(Image)`
  width: 96%;
  height: auto;
  border-radius: 8px;
  margin-top: 12px;
`;

const StyleUserProfile = styled.div`
  font-size: 16px;
  color: #ffffff;
`;
const StyleUser = styled.div`
  font-size: 12px;
  color: #949292;
`;
const StyleCardPost = styled.div`
  display: flex;
  border-radius: 8px;
`;
const StyleInforPost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
`;

const StylePost = styled.div`
  color: #ffffff;
`;
const StyleIconPost = styled.div`
  display: flex;
  gap: 24px;
`;
const StyleIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const StyleTotalActions = styled.div`
  display: flex;
  gap: 4px;
`;
