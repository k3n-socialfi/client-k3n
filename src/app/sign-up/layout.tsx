import SignUpProvider from "@/layout/SignUpProvider";
import SignUpWrapper from "@/modules/signUp/components/SignUpWrapper";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const LayoutSignUp = ({ children }: Props) => {
  return (
    <SignUpProvider>
      <SignUpWrapper>{children}</SignUpWrapper>
    </SignUpProvider>
  );
};

export default LayoutSignUp;
