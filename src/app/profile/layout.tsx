import React from "react";
import { MyProfileContextProvider } from "@/contexts/MyProfileConext";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import HomeProvider from "@/layout/HomeProvider";

const LayoutProfile = ({ children }: IChildren) => {
  return (
    <ProfileContextProvider>
      <MyProfileContextProvider>
        <HomeProvider>{children}</HomeProvider>
      </MyProfileContextProvider>
    </ProfileContextProvider>
  );
};

export default LayoutProfile;
