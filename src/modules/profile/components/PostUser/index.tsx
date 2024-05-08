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
  IconList,
  IconSharePost,
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
              <WrapperInfo>
                <Avatar
                  alt={item?.user?.name}
                  src={item?.user?.profilePicUrl}
                />
                <Wrapperame>
                  <StyleUserProfile>{item?.user?.name}</StyleUserProfile>
                  <StyleUser>@{item?.user?.username}</StyleUser>
                </Wrapperame>
              </WrapperInfo>
              <WrapperIconInfo>
                <IconList />
              </WrapperIconInfo>
            </StyleInforPost>
            {item?.mediaUrl?.length > 0 && (
              <StylePostImg
                width={0}
                height={284}
                sizes="100vw"
                src={item?.mediaUrl[0]}
                alt="igs"
              />
            )}
            <WrapperContent>
              <StyleIcons>
                <StyleIconPost>
                  <StyleTotalActions>
                    <IconHeart /> {item?.favoriteCount}
                  </StyleTotalActions>
                  <StyleTotalActions>
                    <IconComment /> {item?.replyCount}
                  </StyleTotalActions>
                  <StyleTotalActions>
                    <IconSharePost /> {item?.bookmarkCount}
                  </StyleTotalActions>
                </StyleIconPost>
                <StyleIconPost>
                  <StyleTotalActions>
                    <IconSave />
                  </StyleTotalActions>
                </StyleIconPost>
              </StyleIcons>
              <NumberLike>{item?.favoriteCount} Like</NumberLike>
              <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {item?.text}
              </Markdown>
              <ViewComment>View all 25 comments</ViewComment>
              <Status>13 hours ago</Status>
            </WrapperContent>
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
  border: 1px solid gray;
  border-radius: 8px;
  min-width: 400px;
  height: max-content;
  @media (max-width: 520px) {
    min-width: 360px;
  }
`;
const StylePostImg = styled(Image)`
  width: 100%;
  height: auto;
  border-top: 2px solid#5d5b5b;
  margin-top: 12px;
`;

const StyleUserProfile = styled.div`
  font-size: 16px;
  color: #82ebff;
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
  justify-content: space-between;
  gap: 8px;
  padding: 12px;
  width: 100%;
`;

const StylePost = styled.div`
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const StyleIconPost = styled.div`
  display: flex;
  gap: 24px;
`;
const StyleIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyleTotalActions = styled.div`
  display: flex;
  gap: 4px;
`;

const ViewComment = styled.span`
  font-size: 14px;
  color: #6c6c6c;
  width: 100%;
  cursor: pointer;
`;
const Status = styled.span`
  font-size: 14px;
  color: #6c6c6c;
  width: 100%;
  margin-top: 10px;
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  width: 100%;
`;
const Wrapperame = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2px;
`;

const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WrapperIconInfo = styled.div`
  cursor: pointer;
`;

const NumberLike = styled.span`
  color: #ffff;
  font-size: 16px;
`;
