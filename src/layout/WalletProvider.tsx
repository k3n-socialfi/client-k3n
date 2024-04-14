"use client";
import React, { ReactNode } from "react";
import { endpoint, solNetwork } from "@/utils";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
require("@solana/wallet-adapter-react-ui/styles.css");

interface IWalletContextProvider {
  children: ReactNode;
}
const WalletContextProvider = ({ children }: IWalletContextProvider) => {
  const wallets = React.useMemo(
    () => [
      new walletAdapterWallets.TrustWalletAdapter(),
      new walletAdapterWallets.PhantomWalletAdapter(),
      new walletAdapterWallets.SolflareWalletAdapter(),
    ],
    [solNetwork()],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
