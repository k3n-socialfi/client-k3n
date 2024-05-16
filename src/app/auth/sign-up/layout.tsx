import React, { ReactNode } from "react";
import SignUpProvider from "@/layout/SignUpProvider";
import SignUpWrapper from "@/modules/signUp/components/SignUpWrapper";
import { ShowConnectedXProvider } from "@/modules/signUp/contexts/ShowConnectedXContext";

type Props = { children: ReactNode };

const LayoutSignUp = ({ children }: Props) => {
  return (
    <ShowConnectedXProvider>
      <SignUpProvider>
        <SignUpWrapper>{children}</SignUpWrapper>
      </SignUpProvider>
    </ShowConnectedXProvider>
  );
};

export default LayoutSignUp;
