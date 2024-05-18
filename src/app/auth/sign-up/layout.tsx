import React, { ReactNode } from "react";
import SignUpProvider from "@/layout/SignUpProvider";

type Props = { children: ReactNode };

const LayoutSignUp = ({ children }: Props) => {
  return <SignUpProvider>{children}</SignUpProvider>;
};

export default LayoutSignUp;
