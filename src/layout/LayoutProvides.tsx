"use client";
import { ReactNode, Suspense, createContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/assets/style/theme";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import styled from "styled-components";
import SideBar from "@/components/SideBar";
import WalletContextProvider from "./WalletProvider";
import { AuthContextProvider } from "@/contexts/HomeContext";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import { MyProfileContextProvider } from "@/contexts/MyProfileConext";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider>
        <ProfileContextProvider>
          <MyProfileContextProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <WalletContextProvider>
                  <Header />
                  <StyleMain>
                    <StyleSideBar>
                      <SideBar />
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

const StyleSideBar = styled.div`
  width: 20%;
`;
const StyleChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin-top: 80px;
`;

const StyleMain = styled.div`
  width: 100%;
  display: flex;
`;
