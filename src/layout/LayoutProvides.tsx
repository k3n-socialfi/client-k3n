"use client";
import comming_soon from "@/assets/images/comming_soon.png";
import theme from "@/assets/style/theme";
import CustomAlert from "@/components/Alert";
import CustomLoading from "@/components/Loading";
import { COMMING_SOON } from "@/configs/env.config";
import { AlertProvider } from "@/contexts/AlertContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { MyProfileContextProvider } from "@/contexts/MyProfileContext";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode, Suspense, createContext } from "react";
import styled from "styled-components";
import WalletContextProvider from "./WalletProvider";

export interface ILayoutProvidesProps {
  children: ReactNode;
}

export const CartContext = createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  if (COMMING_SOON === "true") {
    return (
      <CommingSoonContainer>
        <CommingSoonBlock bg={comming_soon}>
          <h1>
            Redefining On-chain Collaboration dApp Coming Soon. Stay Tuned
          </h1>
        </CommingSoonBlock>
      </CommingSoonContainer>
    );
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadingProvider>
        <CustomLoading />
        <AlertProvider>
          <CustomAlert />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <MyProfileContextProvider>
                <WalletContextProvider>{children}</WalletContextProvider>
              </MyProfileContextProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AlertProvider>
      </LoadingProvider>
    </Suspense>
  );
}
const CommingSoonContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const CommingSoonBlock = styled.div<any>`
  width: 1030px;
  background-image: ${({ bg }) => `url(${bg.src})`},
    linear-gradient(140deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  z-index: 2;
  background-position: 50% 0, 0 0;
  background-repeat: repeat, repeat;
  background-size: cover, auto;
  border-radius: 20px;
  min-height: 550px;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
  h1 {
    color: #fff;
    text-align: center;
  }
`;
