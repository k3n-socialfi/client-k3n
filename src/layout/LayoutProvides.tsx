"use client";
import { ReactNode, createContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Divider, ThemeProvider } from "@mui/material";
import theme from "@/assets/style/theme";
import WalletProvider from "@/layout/WalletProvider";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import styled from "styled-components";
import SideBar from "@/components/SideBar";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <WalletProvider>
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
        </WalletProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
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
