"use client";
import useWallet from "@/hooks/useWallet";
import { STATUS_WALLET } from "@/utils/enumData";
import * as React from "react";

export interface IWalletProviderProps {
  children: React.ReactNode;
}

type TWalletContext = {
  walletAddress?: string;
  onConnect: () => void;
  onDisconnect: () => void;
};

const defaultValue: TWalletContext = {
  onConnect: () => {},
  onDisconnect: () => {},
  walletAddress: undefined,
};

export const WalletContext = React.createContext<TWalletContext>(defaultValue);

export default function WalletProvider({ children }: IWalletProviderProps) {
  const { onConnect, walletAddress, onDisconnect } = useWallet();
  const statusWallet = localStorage.getItem("wallet_status");

  React.useEffect(() => {
    if (statusWallet && statusWallet.toString() === STATUS_WALLET.CONNECTED) {
      onConnect();
    }
  }, [statusWallet]);
  return (
    <WalletContext.Provider value={{ walletAddress, onConnect, onDisconnect }}>
      {children}
    </WalletContext.Provider>
  );
}
