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
        <div className="px-[10px] mt-40">
          <ActivitySeciton
            listProjects={listProjects}
            rating={userProfile?.review}
          />
          <PortfolioUser mentionedProjects={listProjects} showAll={showAll} />

          {/* Chain */}
          <ChainReview />

          {/* Show Portfolio Button  */}
          <div className="w-full pt-8 py-12 flex flex-col gap-4">
            <h1 className="text-xl lg:text-3xl font-bold text-white font-kode">
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
