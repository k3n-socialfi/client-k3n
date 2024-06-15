import React from "react";
import HomeProvider from "@/layout/HomeProvider";

const LayoutKOL = ({ children }: IChildren) => {
  return <HomeProvider>{children}</HomeProvider>
};

export default LayoutKOL;
