import React from "react";
import HomeProvider from "@/layout/HomeProvider";

const LayoutJobs = ({ children }: IChildren) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default LayoutJobs;
