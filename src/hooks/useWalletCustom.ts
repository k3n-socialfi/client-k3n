"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import base58 from 'bs58';
import { getMessageSolana, loginSolana } from "@/services";
import { TYPE_WALLET } from "@/constant";

export default function useWalletCustom() {
  const { setVisible: setModalVisible } = useWalletModal();
  const [popup, setPopup] = useState(false);
  const [popupProfile, setPopupProfile] = useState(false);
  const [signature, setSignature] = useState<any>();

  const { signMessage } = useWallet();
  let signed = typeof window !== 'undefined' && localStorage.getItem("signatured");

  const { buttonState, onConnect, onDisconnect, publicKey } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });

  let label;
  switch (buttonState) {
    case 'connected':
      label = 'Disconnect';
      break;
    case 'connecting':
      label = 'Connecting';
      break;
    case 'disconnecting':
      label = 'Disconnecting';
      break;
    case 'has-wallet':
      label = 'Connect Wallet';
      break;
    case 'no-wallet':
      label = 'Select Wallet';
      break;
  }

  const base58Pubkey = publicKey?.toBase58();
  const handleClick = useCallback(() => {
    switch (buttonState) {
      case 'no-wallet':
        setModalVisible(true);
        break;
      case 'has-wallet':
        setPopup(true)
        break;
      case 'connected':
        setPopupProfile(true)
        break;
    }
  }, [buttonState, setModalVisible])


  const sign = async () => {
    try {
      const messageSolana: any = await getMessageSolana(base58Pubkey)
      if (messageSolana) {
        const message = new TextEncoder().encode("Get sign message successful");
        if (signMessage) {
          const uint8arraySignature = await signMessage(message);
          setSignature(uint8arraySignature);
          if (typeof window !== 'undefined') {
            localStorage.setItem("signatured", base58.encode(uint8arraySignature));
          }
        }
      }
    } catch (e) {
      console.log('could not sign message');
    }
  }

  const handleWallet = (value: number) => {
    if (value === TYPE_WALLET.connect) {
      onConnect && onConnect();
      !signed && sign();
      setPopup(false)
    }
    if (value === TYPE_WALLET.disconnect) {
      onDisconnect && onDisconnect();
      setPopupProfile(false)
      localStorage.removeItem("signatured");
    }
  }

  useEffect(() => {
    if (publicKey && !signed) {
      sign()
    }
  }, [publicKey, signed])

  useEffect(() => {
    if (signature) {
      console.log("👋  signature:", signature)
      const params = {
        address: base58Pubkey,
        signature: signature
      }
      loginSolana(params)
    }
  }, [signature])

  return { buttonState, setPopup, setPopupProfile, label, popup, handleWallet, handleClick, base58Pubkey, popupProfile };
}
