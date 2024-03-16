import LayoutProvides from "@/layout/LayoutProvides";
import { Web3Modal } from "@/layout/WalletProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvides>
          {children}
        </LayoutProvides>
      </body>
    </html>
  );
}
