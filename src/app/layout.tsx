import LayoutProvides from "@/layout/LayoutProvides";
import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'



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
