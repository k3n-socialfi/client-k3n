"use client";

import { useState } from "react";
import styled from "styled-components";

import Image from "next/image";
import { SpinnerLoader } from "@/components/SpinnerLoader";
import imgs from "@/assets/images";
import { AuthContextProvider } from "@/contexts/HomeContext";
import UserInfo from "./components/UserInfo";
import ActivitySeciton from "./components/Activity";
import PortfolioUser from "./components/PortfolioUser";
import UserPosts from "./components/UserPosts";
import ChainReview from "./components/ChainReviews";
import { useProfile } from "@/contexts/ProfileContext";

export default function ClientProfile() {
  const [showAll, setShowAll] = useState(false);
  const { dataPosts, listProjects, userProfile, isLoading } = useProfile();

  console.log("user profile: ", userProfile);

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
        <UserInfo user={userProfile} />
        <div className="px-[10px]">
          <ActivitySeciton listProjects={listProjects} rating={1} />
          <PortfolioUser mentionedProjects={listProjects} showAll={showAll} />

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
      </AuthContextProvider>
    );
}

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;
