import { endpoint } from "@/utils";
import { Connection, PublicKey } from "@solana/web3.js";
import * as React from "react";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import idl from "@/contract/abis/services.json";
import { SOL_WALLET } from "@/configs/env.config";

export default function useProviderConnect() {
  const wallet = useAnchorWallet();
  const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=7f25b5b0-1742-4b18-bffa-1bc1ec0afc16', "confirmed");
  const idlString = JSON.stringify(idl);
  const idlJson = JSON.parse(idlString);
  const programID = new PublicKey(SOL_WALLET ?? "");

  const getProvider = () => {
    const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=7f25b5b0-1742-4b18-bffa-1bc1ec0afc16', "confirmed");
    const provider = new anchor.AnchorProvider(connection, wallet as any, {
      preflightCommitment: "confirmed",
    });
    return provider;
  };

  const provider = getProvider();
  const program = new anchor.Program(idlJson, programID, provider);

  return { getProvider, connection, program, provider };
}
