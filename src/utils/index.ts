import { SOL_NETWORK } from "@/configs/env.config";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import * as anchor from "@project-serum/anchor";

export const getProvider = () => {
  if (typeof window !== "undefined" && "phantom" in window) {
    const { phantom } = window as any;
    const provider = phantom.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }
  return null;
};

export const solNetwork = ()=> {
  switch (SOL_NETWORK) {
    case 'mainnet':
     return WalletAdapterNetwork.Mainnet  
    case 'testnet':
      return WalletAdapterNetwork.Testnet  
    default:
        return WalletAdapterNetwork.Devnet  
  }
}

export  const endpoint = anchor.web3.clusterApiUrl(solNetwork());