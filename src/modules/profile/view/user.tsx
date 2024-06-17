"use client";
import {
  ProfileContextProvider,
  useProfileContext,
} from "@/contexts/ProfileContext";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { getMentionedProject } from "../services";

import Image from "next/image";
import { SpinnerLoader } from "@/components/SpinnerLoader";
import imgs from "@/assets/images";
import { AuthContextProvider } from "@/contexts/HomeContext";
import { ListTabContextProvider } from "@/contexts/ListTabContext";
import UserInfo from "./components/UserInfo";
import ActivitySeciton from "./components/Activity";
import PortfolioUser from "./components/PortfolioUser";
import UserPosts from "./components/UserPosts";
import ChainReview from "./components/ChainReviews";
import { MyProfileContextProvider } from "@/contexts/MyProfileContext";

export interface IUserProfileProps {
  widthNotData?: boolean;
}

export default function ClientProfile(props: IUserProfileProps) {
  const { username } = useParams();

  const [showAll, setShowAll] = useState(false);
  const { getUserProfile, dataPosts, userProfile } = useProfileContext();

  const [isLoading, setIsloading] = useState(false);

  const [listProjects, setListProject] = useState<[] | undefined>();

  const getData = useCallback(async () => {
    setIsloading(true);
    try {
      getUserProfile(username.toString());
      const mentionProjects = await getMentionedProject(username.toString());
      if (mentionProjects) {
        setListProject(mentionProjects?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }, [getUserProfile, username]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Image
          src={imgs.img_banner ?? ""}
          alt="banner"
          className="flex absolute"
        />
        <SpinnerLoader />
      </div>
    );

  if (!isLoading)
    return (
      <AuthContextProvider>
        <ProfileContextProvider>
          <ListTabContextProvider>
            <MyProfileContextProvider>
              <UserInfo user={userProfile} />
              <div className="px-[10px]">
                <ActivitySeciton
                  listProjects={listProjects}
                  rating={userProfile?.review}
                />
                <PortfolioUser
                  mentionedProjects={listProjects}
                  showAll={showAll}
                />

                {/* Chain */}
                <ChainReview />

                {/* Show Portfolio Button  */}
                <div className="pt-12">
                  <h1 className="text-3xl md:text-[50px] font-extrabold text-white font-kode pb-10">
                    Recent Posts
                  </h1>
                  {dataPosts?.length >= 0 && <UserPosts posts={dataPosts} />}
                </div>
              </div>
            </MyProfileContextProvider>
          </ListTabContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    );
}

const Post = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentRight = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Posts = styled.div<IUserProfileProps>`
  margin-left: 40px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 12px 0;
`;

const PostNotData = styled.div`
  margin: 30px auto;
  color: #f23581;
`;

const StyleContainer = styled.div`
  color: #ffffff;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleBox = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
