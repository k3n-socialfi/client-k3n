"use client";
import { ReactNode, Suspense, createContext, useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Button, IconButton, ThemeProvider } from "@mui/material";
import theme from "@/assets/style/theme";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import styled from "styled-components";
import SideBar from "@/components/SideBar";
import WalletContextProvider from "./WalletProvider";
import { AuthContextProvider } from "@/contexts/HomeContext";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import { MyProfileContextProvider } from "@/contexts/MyProfileConext";
import { useBoolean } from "@/hooks/useBoolean";
import { IconOpenSideBar } from "@/assets/icons";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

type ISideBar = {
  isOpen?: boolean;
};

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  const isOpenSideBar = useBoolean();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider>
        <ProfileContextProvider>
          <MyProfileContextProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <WalletContextProvider>
                  <Header />
                  <OpenSideBar onClick={isOpenSideBar.onToggle}>
                    <IconOpenSideBar />
                  </OpenSideBar>
                  <StyleMain>
                    <StyleSideBar isOpen={isOpenSideBar.value}>
                      <SideBar handleClose={isOpenSideBar.onToggle} />
                    </StyleSideBar>
                    <StyleChildren>
                      {children}
                      <Footer />
                    </StyleChildren>
                  </StyleMain>
                </WalletContextProvider>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </MyProfileContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

const OpenSideBar = styled.div`
  position: absolute;
  top: 90px;
  left: 10px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyleSideBar = styled.div<ISideBar>`
  width: 20%;
  @media (max-width: 1024px) {
    transition: all 1s;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    width: 0%;
  }
`;
const StyleChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin-top: 80px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyleMain = styled.div`
  width: 100%;
  display: flex;
`;
