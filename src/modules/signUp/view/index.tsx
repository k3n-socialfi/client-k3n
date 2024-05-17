"use client";
import { IconIndividual, IconProjectSignUp, IconX } from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { API_URL } from "@/configs/env.config";
import { useAlert } from "@/contexts/AlertContext";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CardChoose from "../components/CardChoose";
import WrapperConnectX from "../components/WrapperConnectX";

type Props = {};

const SignUp = (props: Props) => {
  const { push } = useRouter();
  const [screen, setScreen] = useState(-1);
  const { setAlert } = useAlert();
  const token =
    typeof window !== "undefined" && localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) setScreen(0);
  }, []);

  const handleLoginTwitter = () => {
    push(`${API_URL}/api/v1/oauth/twitter`);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("isSignUp", "true");
    }
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
                onClick={() => push("/auth/sign-up/individual")}
              />
              <CardChoose
                icon={<IconProjectSignUp />}
                name="Project"
                // onClick={() => push("/auth/sign-up/project")}
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
            onClick={handleLoginTwitter}
          >
            <ContentBt>
              <IconX />
              <Typography variant="h5" color="#fff">
                Continue with X
              </Typography>
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
