"use client";

import {
  ProfileContextProvider,
  useProfileContext,
} from "@/contexts/ProfileContext";
import { useState } from "react";
import styled from "styled-components";

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
  const [showAll, setShowAll] = useState(false);
  const { dataPosts, listProjects, userProfile, isLoading } =
    useProfileContext();

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

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;
