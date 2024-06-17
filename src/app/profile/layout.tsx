import React from "react";
import HomeProvider from "@/layout/HomeProvider";

const LayoutProfile = ({ children }: IChildren) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default LayoutProfile;
