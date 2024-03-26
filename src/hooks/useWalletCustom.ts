"use client";
import React, { useCallback, useState } from "react";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";

export default function useWalletCustom() {
  const { setVisible: setModalVisible } = useWalletModal();
  const [popup, setPopup] = useState(false);
  const [popupProfile, setPopupProfile] = useState(false);

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

  const handleConnect = () => {
    if (onConnect) {
      onConnect();
      setPopup(false)
    }
  }

  const handleDisConnect = () => {
    if (onDisconnect) {
      onDisconnect();
      setPopupProfile(false)
    }
  }

  return { buttonState, setPopup, setPopupProfile, label, popup, handleDisConnect, handleConnect, handleClick, base58Pubkey, popupProfile };
}
