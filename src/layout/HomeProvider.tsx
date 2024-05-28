"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SideBar from "@/components/SideBar";
import { AuthContextProvider } from "@/contexts/HomeContext";
import { useBoolean } from "@/hooks/useBoolean";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IHomeProvider {
  children: ReactNode;
}

interface ISideBar {
  isOpen?: boolean;
}

const HomeProvider = ({ children }: IHomeProvider) => {
  const isOpenSideBar = useBoolean();

  return (
    <AuthContextProvider>
        <Header
          handleToggleSidebar={isOpenSideBar.onToggle}
          isOpen={isOpenSideBar.value}
        />
      <Main>
        <SideBarCustom isOpen={isOpenSideBar.value}>
          <SideBar handleToggleSidebar={isOpenSideBar.onToggle} />
        </SideBarCustom>
        {/* </motion.nav> */}
        <Children>
          {children}
          <Footer />
        </Children>
      </Main>
    </AuthContextProvider>
  );
};

export default HomeProvider;

const SideBarCustom = styled.div<ISideBar>`
  width: 15%;
  background: var(--background-primary);
  @media (max-width: 1599px) {
    transition: all 1s;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    width: 0%;
  }
`;
const Children = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  margin-top: 80px;
  padding: 24px;
  background-color: var(--background-primary);
  overflow: hidden;

  @media (max-width: 1599px) {
  width: 100%;
  }
  @media (max-width: 768px) {
  padding: 0px;
  }
  @media (max-width: 610px) {
  margin-top: 132px;
  }
`;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: var(--background-primary);
`;
