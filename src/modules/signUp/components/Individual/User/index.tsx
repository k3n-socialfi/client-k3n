"use client";
import styled from "styled-components";
import FormCreateIndividual from "../../FormCreateIndividual";
import WrapperSignUp from "../../WrapperSignUp";
import { useEffect, useState } from "react";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import { useRouter } from "next/navigation";
import Loading from "../../Loading";

type Props = {};

const User = (props: Props) => {
  const [showPoint, setShowConnected] = useState(true);
  const { dataPersonal, isLoading } = useMyProfileContext();
  const { push } = useRouter();

  useEffect(() => {
    if (dataPersonal?.twitterInfo?.totalPoints < 30) {
      push("/");
    }
  }, [dataPersonal, push]);

  const handleShow = (value: boolean) => {
    setShowConnected(value);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <WrapperSignUp showPoint={showPoint} title="Create your profile">
      <FormCreateIndividual showPoint={handleShow} />
    </WrapperSignUp>
  );
};

export default User;
