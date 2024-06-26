"use client";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import FormCreateIndividual from "../../FormCreateIndividual";
import WrapperSignUp from "../../WrapperSignUp";

type Props = {};

const KOL = (props: Props) => {
  const { dataPersonal } = useMyProfileContext();

  return (
    <WrapperSignUp showTitle showDescription>
      <FormCreateIndividual showPoint={() => false} showChain />
    </WrapperSignUp>
  );
};

export default KOL;
