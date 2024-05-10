"use client";
import React, { useMemo, useState } from "react";
import SignUpWrapper from "../components/SignUpWrapper";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { IconIndividual, IconProjectSignUp, IconX } from "@/assets/icons";
import { Typography } from "@mui/material";
import styled from "styled-components";
import CardChoose from "../components/CardChoose";
import { useRouter } from "next/navigation";

type Props = {};

const SignUp = (props: Props) => {
  const { push } = useRouter();
  const [screen, setScreen] = useState(-1);

  const handlePrevScreen = () => {
    setScreen((prev) => prev - 1);
  };

  const handleNextScreen = () => {
    setScreen((prev) => prev + 1);
  };

  const defaultSignUp = useMemo(() => {
    switch (screen) {
      case 0:
        return (
          <Select>
            <CardChoose
              icon={<IconIndividual />}
              name="Individual"
              onClick={() => push("/sign-up/individual")}
            />
            <CardChoose
              icon={<IconProjectSignUp />}
              name="Project"
              onClick={() => push("/sign-up/project")}
            />
          </Select>
        );
      default:
        return (
          <ButtonPrimary
            fullWidth
            colorBt="primary.enabled"
            borderRadius="10px"
            onClick={handleNextScreen}
          >
            <ContentBt>
              <IconX />
              <Typography variant="h5">Continue with X</Typography>
            </ContentBt>
          </ButtonPrimary>
        );
    }
  }, [screen, push]);

  return defaultSignUp;
};

export default SignUp;

const ContentBt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 5px;
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 46px;
`;
