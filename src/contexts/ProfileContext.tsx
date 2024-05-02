"use client";
import { IUserProfile } from "@/interface/profile.interface";
import { getPostUser, getProfileUser } from "@/services";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}
interface IProfileContextTypes {
  userProfile: IUserProfile | any;
  dataPosts: any;
  setUserProfile: React.Dispatch<React.SetStateAction<IUserProfile>>;
  getUserProfile: (username: string) => void;
  isLoading: boolean;
}

const ProfileContextTypes = {
  userProfile: {
    createdAt: 0,
    updatedAt: 0,
    isDeleted: true,
    userId: "",
    username: "",
    role: "",
    type: "",
    jobTitle: "",
    organization: "",
    experience: [],
    fullName: "",
    email: "",
    phoneNumber: "",
    wallets: [],
    socialProfiles: [],
    twitterPoints: 0,
    royaltyPoints: 0,
    totalPoints: 0,
    avatar: "",
    bio: "",
    coverImage: "",
    dob: "",
    gender: "",
    location: "",
    verificationStatus: "",
    referralCode: "",
    lastLogin: "",
    posts: [],
  },
  dataPosts: [{}],
  setUserProfile: () => undefined,
  getUserProfile: () => undefined,
  isLoading: true,
};
const profileContext = createContext<IProfileContextTypes>(ProfileContextTypes);
const ProfileContextProvider = ({ children }: IPropsProfileContextProvider) => {
  const [userProfile, setUserProfile] = useState<IUserProfile>(
    ProfileContextTypes?.userProfile,
  );
  const [dataPosts, setDataPosts] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUserProfile = async (username: String) => {
    setIsLoading(true);
    try {
      const { data } = await getProfileUser(String(username));
      setUserProfile(data?.data);

      if (data?.data?.username) {
        const arrayPost: any = await getPostUser(data?.data?.username);
        setDataPosts(arrayPost?.data?.data?.posts);
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <profileContext.Provider
      value={{
        isLoading,
        userProfile,
        dataPosts,
        setUserProfile,
        getUserProfile,
      }}
    >
      {children}
    </profileContext.Provider>
  );
};

const useProfileContext = () => {
  return useContext(profileContext);
};
export { ProfileContextProvider, useProfileContext };
