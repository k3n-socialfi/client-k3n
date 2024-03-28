"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import base58 from 'bs58';
import { postConnect } from "@/services";

const messageToSign = 'TEST MESSAGE';

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
      const message = new TextEncoder().encode(messageToSign);
      if (signMessage) {
        const uint8arraySignature = await signMessage(message);
        setSignature(uint8arraySignature);
        if (typeof window !== 'undefined') {
          localStorage.setItem("signatured", base58.encode(uint8arraySignature));
        }
      }
    } catch (e) {
      console.log('could not sign message');
    }
  }

  const handleConnect = async () => {
    if (onConnect) {
      onConnect();
      if (!signed) {
        sign();
      }
      setPopup(false)
    }
  }

  useEffect(() => {
    if (publicKey && !signed) {
      sign()
    }
  }, [publicKey, signed])

  const handleDisConnect = () => {
    if (onDisconnect) {
      onDisconnect();
      // localStorage.removeItem("signatured");
      setPopupProfile(false)
    }
  }

  // useEffect(() => {
  //   const form = {
  //     address: base58Pubkey,
  //     signature: signature
  //   }
  //   const data = postConnect(form)
  // }, [signature])

  return { buttonState, setPopup, setPopupProfile, label, popup, handleDisConnect, handleConnect, handleClick, base58Pubkey, popupProfile };
}
