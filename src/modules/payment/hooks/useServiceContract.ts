import useProviderConnect from "@/hooks/useProviderConnect";
import { TService } from "@/types/service";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { useState } from "react";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { usePathname, useRouter } from "next/navigation";
import { PublicKey } from "@solana/web3.js";
import useServiceDetail from "./useServiceDetail";

export default function useServiceContract() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const walletSol = useWallet();
  const anchorWallet = useAnchorWallet();
  const { push } = useRouter();
  const path = usePathname();
  const { createOffer } = useServiceDetail();
  const { connection, provider, program } = useProviderConnect();
  const seed = new anchor.BN(1);
  const newKol = anchor.web3.Keypair.generate();

  const createServiceContract = async (dt: TService) => {
    setIsLoading(true);
    try {
      let [serviceGened, bump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("K3N"),
          seed.toArrayLike(Buffer, "le", 8),
          Buffer.from(dt.jobId ?? ""),
        ],
        program.programId,
      );

      if (anchorWallet) {
        let tx = new anchor.web3.Transaction().add(
          program.instruction.createService(
            seed,
            dt.jobId,
            new PublicKey(dt?.kolWallet ?? ""),
            dt.projectName,
            dt.platform,
            new anchor.BN(+dt.price),
            dt.currency[0],
            dt.paymentMethod,
            dt.jobDescription,
            {
              accounts: {
                hirer: provider.publicKey,
                service: serviceGened,
                systemProgram: anchor.web3.SystemProgram.programId,
              },
              signers: [walletSol as any],
            },
          ),
        );
        let blockhash = (await connection.getLatestBlockhash("confirmed"))
          .blockhash;
        tx.feePayer = anchorWallet?.publicKey as any;
        tx.recentBlockhash = blockhash;
        const txhash = await anchorWallet?.signTransaction(tx);
        const serialized = txhash?.serialize();
        const txId = await connection.sendRawTransaction(serialized as any);
        const result = await connection.confirmTransaction(txId);
        push(path + `?step_payment=2`);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("🚀 ~ createServiceContract ~ error:", error);
      setIsLoading(false);
    }
  };

  const handleCompleteServiceSM = async (dt: TService) => {
    try {
      const seed = new anchor.BN(1);
      let [serviceGened, bump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("K3N"),
          seed.toArrayLike(Buffer, "le", 8),
          Buffer.from(dt.jobId ?? ""),
        ],
        program.programId,
      );
      if (anchorWallet) {
        let tx = new anchor.web3.Transaction().add(
          program.instruction.completeService({
            accounts: {
              hirer: provider.publicKey,
              service: serviceGened,
              kol: new PublicKey(dt?.kolWallet ?? ""),
              systemProgram: anchor.web3.SystemProgram.programId,
            },
            signers: [walletSol as any],
          }),
        );
        let blockhash: any = (await connection.getLatestBlockhash("confirmed"))
          .blockhash;
        tx.feePayer = anchorWallet?.publicKey as any;
        tx.recentBlockhash = blockhash;
        const txhash = await anchorWallet?.signTransaction(tx);
        const serialized = txhash?.serialize();
        const txId = await connection.sendRawTransaction(serialized as any);
        const result = await connection.confirmTransaction(txId);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleMintNFT = async (dt: TService) => {
    try {
      const seed = new anchor.BN(1);
      let [mintAddress, bump1] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("K3N"), seed?.toArrayLike(Buffer, "le", 8)],
        program.programId,
      );
      const price = new anchor.BN(dt.price).toNumber();
      const cant = new anchor.BN(1);
      let uri: string =
        "https://raw.githubusercontent.com/687c/solana-nft-native-client/main/metadata.json";
      const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
      );

      let [masterEditionAccount, bump2] =
        await anchor.web3.PublicKey.findProgramAddress(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),
            Buffer.from("edition"),
          ],
          TOKEN_METADATA_PROGRAM_ID,
        );

      if (anchorWallet) {
        let [nftMetadata, bump3] =
          await anchor.web3.PublicKey.findProgramAddress(
            [
              Buffer.from("metadata"),
              TOKEN_METADATA_PROGRAM_ID.toBuffer(),
              mintAddress.toBuffer(),
            ],
            TOKEN_METADATA_PROGRAM_ID,
          );

        const tokenAccount = await getAssociatedTokenAddress(
          mintAddress,
          provider.publicKey,
        );

        let tx = new anchor.web3.Transaction().add(
          program.instruction.createSingleNft(
            seed,
            name,
            dt.jobDescription,
            uri,
            price,
            cant,
            {
              accounts: {
                authority: provider.publicKey,
                payer: provider.publicKey,
                mint: mintAddress,
                tokenAccount: tokenAccount,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                metadataProgram: TOKEN_METADATA_PROGRAM_ID,
                tokenProgram: TOKEN_PROGRAM_ID,
                masterEditionAccount: masterEditionAccount,
                nftMetadata: nftMetadata,
                systemProgram: anchor.web3.SystemProgram.programId,
              },
              signers: [walletSol as any],
            },
          ),
        );
        let blockhash: any = (await connection.getLatestBlockhash("confirmed"))
          .blockhash;
        tx.feePayer = anchorWallet?.publicKey as any;
        tx.recentBlockhash = blockhash;
        const txhash = await anchorWallet?.signTransaction(tx);
        const serialized = txhash?.serialize();
        const txId = await connection.sendRawTransaction(serialized as any);
        await connection.confirmTransaction(txId);

        //transfer nft
        const destination = await getAssociatedTokenAddress(
          mintAddress,
          new PublicKey(dt?.kolWallet ?? ""),
          //KOL_ADDRESS
        );
        let txTransfer = new anchor.web3.Transaction().add(
          program.instruction.transferNft(destination, {
            accounts: {
              authority: provider.publicKey,
              tokenAccount: tokenAccount,
              newOwner: new PublicKey(dt?.kolWallet ?? ""),
              mint: mintAddress,
              destinationAccount: destination,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: anchor.web3.SystemProgram.programId,
              associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            },
            signers: [walletSol as any],
          }),
        );
        let blockhashTransfer: any = (
          await connection.getLatestBlockhash("confirmed")
        ).blockhash;
        tx.feePayer = anchorWallet?.publicKey as any;
        tx.recentBlockhash = blockhashTransfer;
        const txhashTransfer = await anchorWallet?.signTransaction(txTransfer);
        const serializedTransfer = txhashTransfer?.serialize();
        const txIdTransfer = await connection.sendRawTransaction(
          serializedTransfer as any,
        );
        await connection.confirmTransaction(txIdTransfer);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const completedServiceContract = async (dt: TService) => {
    setIsLoading(true);
    try {
      await handleCompleteServiceSM(dt);
      await handleMintNFT(dt);
      await createOffer();
      push(path + `?step_payment=3`);
    } catch (error) {}
  };
  return { createServiceContract, completedServiceContract, isLoading };
}
