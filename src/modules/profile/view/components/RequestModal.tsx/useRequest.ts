import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { RequestTypeSchema } from "@/schema";
import { RequestSchema } from "@/schema/schemaRequest";
import useProviderConnect from "@/hooks/useProviderConnect";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { PublicKey, Transaction } from "@solana/web3.js";
import { web3 } from "@project-serum/anchor";
import {
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { configureAndSendCurrentTransaction } from "../UserInfo";
import axiosInstance from "@/configs/axios.config";
const useRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<RequestTypeSchema>({
    resolver: zodResolver(RequestSchema()),
  });

  const { provider, connection } = useProviderConnect();
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const [isTransaction, setIsTransaction] = useState(false);

  const MINT_ADDRESS = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"; //You must change this value!

  const handlePayment = async (amount: number) => {
    try {
      if (!publicKey || !signTransaction) {
        throw new WalletNotConnectedError();
      }
      setIsTransaction(true);

      const mintToken = new PublicKey(MINT_ADDRESS); // token address

      const recipientAddress = new PublicKey(
        "BMu2dakVLyg4Lv7qHcp7xknWpyDmL1ySH4ttJMwpceUo",
      );

      const transactionInstructions: web3.TransactionInstruction[] = [];
      const associatedTokenFrom = await getAssociatedTokenAddress(
        mintToken,
        publicKey,
      );

      const fromAccount = await getAccount(connection, associatedTokenFrom);
      const associatedTokenTo = await getAssociatedTokenAddress(
        mintToken,
        recipientAddress,
      );

      if (!(await connection.getAccountInfo(associatedTokenTo))) {
        transactionInstructions.push(
          createAssociatedTokenAccountInstruction(
            publicKey,
            associatedTokenTo,
            recipientAddress,
            mintToken,
          ),
        );
      }
      transactionInstructions.push(
        createTransferInstruction(
          fromAccount.address, // source
          associatedTokenTo, // dest
          publicKey,
          amount * Math.pow(10, 5),
        ),
      );
      const transaction = new Transaction().add(...transactionInstructions);
      const signature = await configureAndSendCurrentTransaction(
        transaction,
        connection,
        publicKey,
        signTransaction,
      );

      if (signature) {
        setIsTransaction(false);
      }
    } catch (error) {
      console.log("🚀 ~ handlePayment ~ error:", error);
      setIsTransaction(false);
    }
  };

  const submitRequestCollaboration: SubmitHandler<RequestTypeSchema> =
    useCallback(
      async (data) => {
        try {
          handlePayment(Number(data.tip)).then(async () => {
            const dataForm = {
              requestType: data.typeOfRequest,
              message: data.otherRequest,
              from: publicKey?.toString(),
              to: MINT_ADDRESS,
              amount: Number(data.tip),
            };

            const response = await axiosInstance.post(
              `/api/v1/message/message/create`,
              dataForm,
            );

            setIsTransaction(false);
          });
        } catch (error) {
          setIsTransaction(false);
        }
      },
      [isTransaction, setIsTransaction, handlePayment],
    );

  return {
    register,
    handleSubmit,
    onSubmitRequest: submitRequestCollaboration,
    handlePayment,
    isTransaction,
  };
};

export default useRequest;
