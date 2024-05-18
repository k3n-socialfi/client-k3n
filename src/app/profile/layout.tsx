import React from "react";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import HomeProvider from "@/layout/HomeProvider";

const LayoutProfile = ({ children }: IChildren) => {
  return (
    <ProfileContextProvider>
      <HomeProvider>{children}</HomeProvider>
    </ProfileContextProvider>
  );
};

export default LayoutProfile;
