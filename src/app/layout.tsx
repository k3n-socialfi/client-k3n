import LayoutProvides from "@/layout/LayoutProvides";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K3N social",
  description: "K3N social",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvides>{children}</LayoutProvides>
      </body>
    </html>
  );
}
