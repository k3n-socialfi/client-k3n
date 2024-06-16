"use client";
import React, { Fragment, ReactNode } from "react";
interface ISignUpProps {
  children: ReactNode;
}

const SignUpProvider = ({ children }: ISignUpProps) => {
  return <Fragment>{children}</Fragment>;
};

export default SignUpProvider;
