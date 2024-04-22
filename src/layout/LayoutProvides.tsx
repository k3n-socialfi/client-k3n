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
import { TableRankingContextProvider } from "@/contexts/TableTopRanking";
import { ProjectContextProvider } from "@/contexts/ProjectContext";
import { ServicesContextProvider } from "@/modules/services/context/ServicesContext";

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
        <TableRankingContextProvider>
          <ServicesContextProvider>
            <ProfileContextProvider>
              <MyProfileContextProvider>
                <ProjectContextProvider>
                  <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                      <WalletContextProvider>
                        <Header handleToggleSidebar={isOpenSideBar.onToggle} />
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
                </ProjectContextProvider>
              </MyProfileContextProvider>
            </ProfileContextProvider>
          </ServicesContextProvider>
        </TableRankingContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

const StyleSideBar = styled.div<ISideBar>`
  width: 20%;
  @media (max-width: 1599px) {
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
  padding: 50px;
  background-color: #292d32;

  @media (max-width: 1599px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 610px) {
    margin-top: 132px;
  }
`;

const StyleMain = styled.div`
  width: 100%;
  display: flex;
`;
