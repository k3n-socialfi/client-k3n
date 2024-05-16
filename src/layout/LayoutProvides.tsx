"use client";
import theme from "@/assets/style/theme";
import CustomAlert from "@/components/Alert";
import { AlertProvider } from "@/contexts/AlertContext";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode, Suspense, createContext } from "react";
import WalletContextProvider from "./WalletProvider";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AlertProvider>
        <CustomAlert />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <WalletContextProvider>{children}</WalletContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </AlertProvider>
    </Suspense>
  );
}
