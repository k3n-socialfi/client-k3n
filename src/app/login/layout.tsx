import SignUpProvider from "@/layout/SignUpProvider";
import React from "react";

const LayoutLogin = ({ children }: IChildren) => {
  return <SignUpProvider>{children}</SignUpProvider>;
};

export default LayoutLogin;
