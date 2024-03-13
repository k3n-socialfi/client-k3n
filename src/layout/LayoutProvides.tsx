"use client";
import { ReactNode, createContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Divider, ThemeProvider } from "@mui/material";
import theme from "@/assets/style/theme";
import WalletProvider from "@/layout/WalletProvider";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HeaderCustom from "@/components/HeaderCustom";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <WalletProvider>
          <HeaderCustom />
          <Divider />
          {children}
          <Divider />
          <Footer />
        </WalletProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
