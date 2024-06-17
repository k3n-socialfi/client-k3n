"use client";
import React from "react";
import FormCreateProject from "../FormCreateProject";
import WrapperSignUp from "../WrapperSignUp";

type Props = {};

const Project = (props: Props) => {
  return (
    <WrapperSignUp title="Create your project">
      <FormCreateProject />
    </WrapperSignUp>
  );
};

export default Project;
