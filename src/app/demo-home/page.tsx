import Footer from "@/components/Footer";
import Home from "@/modules/home/view/home";
import * as React from "react";

export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}
