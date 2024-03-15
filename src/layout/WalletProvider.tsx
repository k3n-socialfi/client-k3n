"use client";
import { ReactNode } from "react";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiProvider, createConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    chains: [goerli],
    appName: "Jayden Application",
    appDescription: "Jayden Application - For Teaching",
  } as any)
);

const queryClient = new QueryClient()

const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletProvider;