"use client";
import {
  IconIndividual,
  IconProjectSignUp,
  IconX,
  IconXAccountConnected,
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import styled from "styled-components";
import CardChoose from "../components/CardChoose";
import WrapperConnectX from "../components/WrapperConnectX";
import { useAlert } from "@/contexts/AlertContext";

type Props = {};

const SignUp = (props: Props) => {
  const { push } = useRouter();
  const [screen, setScreen] = useState(-1);
  const { setAlert } = useAlert();

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
          <WrapperConnectX showConnected>
            <Select>
              <CardChoose
                icon={<IconIndividual />}
                name="Individual"
                onClick={() => push("/sign-up/individual")}
              />
              <CardChoose
                icon={<IconProjectSignUp />}
                name="Project"
                // onClick={() => push("/sign-up/project")}
                onClick={() =>
                  setAlert(true, "Coming Soon", "Coming Soon", "warning")
                }
              />
            </Select>
          </WrapperConnectX>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ConnectedX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const LogoIconX = styled.div`
  cursor: pointer;
`;

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
