"use client";
import { ReactNode, createContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Divider, ThemeProvider } from "@mui/material";
import theme from "@/assets/style/theme";
import WalletProvider from "@/layout/WalletProvider";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import styled from "styled-components";
import SideBar from "@/components/SidebBar";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <WalletProvider>
          <StyleContent>
            <SideBar />
            <StyleMain>
              <Header />
              {children}
              <Divider />
              <Footer />
            </StyleMain>
          </StyleContent>
        </WalletProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

const StyleContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyleMain = styled.div`
  width: 100%;
`;
