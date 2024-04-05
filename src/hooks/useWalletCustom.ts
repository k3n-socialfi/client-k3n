"use client";
import base58 from "bs58";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { checkExists, loginSolana, loginTwitterSolana } from "@/services";
import { TYPE_WALLET } from "@/constant";
import { createSignInData } from "@/utils/createSignInData";

export default function useWalletCustom() {
  const { setVisible: setModalVisible } = useWalletModal();
  const [popup, setPopup] = useState(false);
  const [popupProfile, setPopupProfile] = useState(false);
  const [signature, setSignature] = useState<any>();
  const searchParams = useSearchParams();
  const search = searchParams.get("accessToken");
  const router = useRouter();
  const { signIn, wallet } = useWallet();
  let signed =
    typeof window !== "undefined" && localStorage.getItem("signatured");
  let isTwitter =
    typeof window !== "undefined" && sessionStorage.getItem("isTwitter");

  const { buttonState, onConnect, onDisconnect, publicKey } =
    useWalletMultiButton({
      onSelectWallet() {
        setModalVisible(true);
      },
    });

  let label;
  switch (buttonState) {
    case "connected":
      label = "Disconnect";
      break;
    case "connecting":
      label = "Connecting";
      break;
    case "disconnecting":
      label = "Disconnecting";
      break;
    case "has-wallet":
      label = "Connect Wallet";
      break;
    case "no-wallet":
      label = "Select Wallet";
      break;
  }

  const base58Pubkey = publicKey?.toBase58();

  const handleClick = useCallback(() => {
    switch (buttonState) {
      case "no-wallet":
        setModalVisible(true);
        break;
      case "has-wallet":
        onConnect && onConnect();
        break;
      case "connected":
        setPopupProfile(true);
        break;
    }
  }, [buttonState, setModalVisible, onConnect]);

  const [logs, setLogs] = useState<any[]>([]);
  const createLog = useCallback(
    (log: any) => {
      return setLogs((logs) => [...logs, log]);
    },
    [setLogs]
  );

  const handleLoginTwitter = () => {
    router.push("https://k3n-47ee74080457.herokuapp.com/api/v1/oauth/twitter");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("isTwitter", "true");
    }
  };

  const handleExistsTwitter = async (value: any) => {
    if (buttonState === "connected") {
      const { data }: any = await checkExists(value);
      if (data?.data || isTwitter) {
        handleSignIn();
      } else {
        setPopup(true);
      }
    }
  };

  const handleSignIn = useCallback(async () => {
    if (!publicKey || !wallet) return;
    const signInData = await createSignInData(base58Pubkey);
    if (!signed) {
      try {
        if (signIn) {
          const { account, signedMessage, signature } = await signIn(
            signInData
          );
          setSignature(signature);
          if (typeof window !== "undefined") {
            localStorage.setItem("signatured", base58.encode(signature));
          }
          createLog({
            status: "success",
            method: "signIn",
            message: `Message signed: ${JSON.stringify(signedMessage)} by ${account.address
              } with signature ${JSON.stringify(signature)}`,
          });
        }
      } catch (error: any) {
        createLog({
          status: "error",
          method: "signIn",
          message: error.message,
        });
      }
    }
  }, [base58Pubkey, createLog, publicKey, signIn, wallet]);

  const handleWallet = (value: number) => {
    if (value === TYPE_WALLET.connect) {
      onConnect && onConnect();
      setPopup(false);
    }
    if (value === TYPE_WALLET.disconnect) {
      onDisconnect && onDisconnect();
      setPopupProfile(false);
      localStorage.removeItem("signatured");
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("isTwitter");
    }
  };

  useEffect(() => {
    handleExistsTwitter(base58Pubkey);
    if (typeof window !== "undefined" && search) {
      localStorage.setItem("accessToken", search);
    }
  }, [publicKey]);

  const convertSignature =
    signature && "[" + Array?.from(signature).join(", ") + "]";

  useEffect(() => {
    (async function () {
      try {
        if (convertSignature) {
          const params = {
            address: base58Pubkey,
            signature: convertSignature as any,
          };
          if (isTwitter) {
            loginTwitterSolana(params)
          }
          else {
            const { data }: any = await loginSolana(params);
            if (typeof window !== "undefined" && data) {
              localStorage.setItem("accessToken", data.data.accessToken);
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [signature, isTwitter]);

  return {
    handleLoginTwitter,
    buttonState,
    setPopup,
    setPopupProfile,
    label,
    popup,
    handleWallet,
    handleClick,
    base58Pubkey,
    popupProfile,
  };
}
