"use client";
import { IUserProfile } from "@/interface/profile.interface";
import { getProfileUser } from "@/services";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}
interface IProfileContextTypes {
  userProfile: IUserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<IUserProfile>>;
  getUserProfile: (username: string) => void;
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
  setUserProfile: () => undefined,
  getUserProfile: () => undefined,
};
const profileContext = createContext<IProfileContextTypes>(ProfileContextTypes);
const ProfileContextProvider = ({ children }: IPropsProfileContextProvider) => {
  const [userProfile, setUserProfile] = useState<IUserProfile>(
    ProfileContextTypes.userProfile
  );

  const getUserProfile = async (username: String) => {
    try {
      const res = await getProfileUser(String(username));
      setUserProfile(res.data?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <profileContext.Provider
      value={{ userProfile, setUserProfile, getUserProfile }}
    >
      {children}
    </profileContext.Provider>
  );
};

const useProfileContext = () => {
  return useContext(profileContext);
};
export { ProfileContextProvider, useProfileContext };
