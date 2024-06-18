"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SideBar from "@/components/SideBar";
import { AuthContextProvider } from "@/contexts/HomeContext";
import React, { ReactNode } from "react";

interface IHomeProvider {
  children: ReactNode;
}

const HomeProvider = ({ children }: IHomeProvider) => {
  return (
    <AuthContextProvider>
      <div className="w-full h-screen">
        <Header />
        <div className="flex w-full h-full pt-[65px] overflow-hidden">
          <SideBar />
          <div className="flex w-full h-full min-h-screen flex-col overflow-y-scroll">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
};

export default HomeProvider;
