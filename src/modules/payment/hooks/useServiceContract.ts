import useProviderConnect from "@/hooks/useProviderConnect";
import { TService } from "@/types/service";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { useState } from "react";

export default function useServiceContract() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const walletSol = useWallet();
  const anchorWallet = useAnchorWallet();

  const { connection, provider, program } = useProviderConnect();

  const createServiceContract = async (dt: TService) => {
    const newKol = anchor.web3.Keypair.generate();
    const seed = new anchor.BN(1);
    setIsLoading(true);
    let serviceId: string = `${Math.random()}`;

    try {
      let [serviceGened, bump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("K3N"),
          seed.toArrayLike(Buffer, "le", 8),
          Buffer.from(serviceId),
        ],
        program.programId,
      );

      if (anchorWallet) {
        let tx = new anchor.web3.Transaction().add(
          program.instruction.createService(
            seed,
            dt.jobId,
            newKol.publicKey,
            dt.projectName,
            dt.platform,
            new anchor.BN(+dt.price),
            dt.currency,
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
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return { createServiceContract, isLoading };
}
