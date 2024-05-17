import React from "react";
import HomeProvider from "@/layout/HomeProvider";

const LayoutViewOffer = ({ children }: IChildren) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default LayoutViewOffer;
