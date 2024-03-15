"use client";
// import { WalletContext } from "@/layout/WalletProvider";
// import { Button } from "@mui/material";
// import { useContext } from "react";

export interface ILoginPageProps { }

export default function LoginPage(props: ILoginPageProps) {
  // const { onConnect, onDisconnect, walletAddress } = useContext(WalletContext);

  return (
    <div>
      {/* <Button
        variant="contained"
        onClick={() => (!walletAddress ? onConnect() : onDisconnect())}
      >
        {!walletAddress ? "Connect Wallet" : walletAddress}
      </Button> */}
    </div>
  );
}
