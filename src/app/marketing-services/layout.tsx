"use client";
import React from "react";
import HomeProvider from "@/layout/HomeProvider";
import { ServicesContextProvider } from "@/modules/services/context/ServicesContext";

const LayoutMarketingServices = ({ children }: IChildren) => {
  return (
    <HomeProvider>
      <ServicesContextProvider>{children} </ServicesContextProvider>
    </HomeProvider>
  );
};

export default LayoutMarketingServices;
