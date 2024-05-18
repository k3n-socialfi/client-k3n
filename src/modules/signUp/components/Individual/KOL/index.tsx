"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import FormCreateIndividual from "../../FormCreateIndividual";
import { IconThunder } from "@/assets/icons";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";
import WrapperSignUp from "../../WrapperSignUp";

type Props = {};

const KOL = (props: Props) => {
  const { dataPersonal } = useFetchDataMyProfile();

  return (
    <WrapperSignUp showTitle showDescription>
      <FormCreateIndividual showPoint={() => false} showChain />
    </WrapperSignUp>
  );
};

export default KOL;
