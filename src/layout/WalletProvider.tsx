'use client';
import React, { ReactNode } from 'react';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
import * as web3 from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');

interface IWalletContextProvider {
  children: ReactNode
}
const WalletContextProvider = ({ children }: IWalletContextProvider) => {

  const endpoint = web3.clusterApiUrl('devnet');
  const wallets = [
    new walletAdapterWallets.PhantomWalletAdapter()
  ];
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;