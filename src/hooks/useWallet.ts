"use client";
import { getProvider } from "@/utils";
import { STATUS_WALLET } from "@/utils/enumData";
import * as React from "react";

export default function useWallet() {
  const [walletAddress, setWalletAddress] = React.useState<string>();
  const provider = getProvider();

  const onConnect = async () => {
    try {
      if (!provider) {
        window.open("https://phantom.app/", "_blank");
      }
      const resp = await provider.connect();
      setWalletAddress(resp.publicKey.toString());
      localStorage.setItem("wallet_status", STATUS_WALLET.CONNECTED);
    } catch (error) {
      localStorage.setItem("wallet_status", STATUS_WALLET.NOT_CONNECTED);
      console.error(error);
    }
  };

  const onDisconnect = async () => {
    try {
      if (!provider) {
        window.open("https://phantom.app/", "_blank");
      }
      await provider.disconnect();
      setWalletAddress(undefined);
      localStorage.removeItem("wallet_status");
    } catch (error) {
      localStorage.setItem("wallet_status", STATUS_WALLET.NOT_CONNECTED);
      console.error(error);
    }
  };
  return { walletAddress, onConnect, onDisconnect };
}
