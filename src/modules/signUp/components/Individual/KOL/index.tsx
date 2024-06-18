"use client";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import FormCreateIndividual from "../../FormCreateIndividual";
import WrapperSignUp from "../../WrapperSignUp";

type Props = {};

const KOL = (props: Props) => {
  return (
    <WrapperSignUp title="Create your profile">
      <FormCreateIndividual showChain />
    </WrapperSignUp>
  );
};

export default KOL;
