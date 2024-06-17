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

export const solNetwork = () => {
  switch (SOL_NETWORK) {
    case "mainnet":
      return WalletAdapterNetwork.Mainnet;
    case "testnet":
      return WalletAdapterNetwork.Testnet;
    default:
      return WalletAdapterNetwork.Devnet;
  }
};

export const formatNumberToK = (x: number) => {
  switch (true) {
    case x >= 1000000000:
      const bValue = x / 1000000000;
      return `${bValue.toFixed(2)}B`;
    case x >= 1000000:
      const mValue = x / 1000000;
      return `${mValue.toFixed(2)}M`;
    case x >= 1000:
      const kValue = x / 1000;
      return `${kValue.toFixed(2)}K`;
    default:
      return x;
  }
};

export function numberWithCommas(x: any) {
  const format = new Intl.NumberFormat("en-US");
  const formattedNumber = format.format(x);
  return formattedNumber;
}

export const endpoint = anchor.web3.clusterApiUrl(solNetwork());

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const sliceAddressWallet = (publicKey: any) => {
  const base58 = publicKey.toBase58();
  const address = base58.slice(0, 2) + ".." + base58.slice(-4);
  return address;
};
