"use client";
import { IconIndividual, IconProjectSignUp, IconX } from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { API_URL } from "@/configs/env.config";
import { useAlert } from "@/contexts/AlertContext";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CardChoose from "../components/CardChoose";
import WrapperSignUp from "../components/WrapperSignUp";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import Loading from "../components/Loading";

type Props = {};

const SignUp = (props: Props) => {
  const { push } = useRouter();
  const [screen, setScreen] = useState(-1);
  const { setAlert } = useAlert();
  const { dataPersonal, isLoading } = useMyProfileContext();
  const token =
    typeof window !== "undefined" && localStorage.getItem("accessToken");

  useEffect(() => {
    if (dataPersonal) {
      if (dataPersonal?.isUpdated) {
        push("/");
      } else {
        setScreen(0);
      }
    }
  }, [dataPersonal, push]);

  const handleLoginTwitter = useCallback(() => {
    push(`${API_URL}/api/v1/oauth/twitter`);
    // if (typeof window !== "undefined") {
    //   sessionStorage.setItem("isSignUp", "true");
    // }
  }, [push]);

  const handleCheckPoint = useCallback(() => {
    if (dataPersonal?.twitterInfo?.totalPoints < 30) {
      // push("/login/individual/kol");
      push("/");
    } else {
      push("/login/individual");
    }
  }, [push, dataPersonal?.twitterInfo?.totalPoints]);

  const defaultSignUp = useMemo(() => {
    switch (screen) {
      case 0:
        return (
          <WrapperSignUp showPoint>
            <Select>
              <CardChoose
                icon={<IconIndividual />}
                name="Individual"
                // onClick={() => push("/login/individual")}
                onClick={handleCheckPoint}
              />
              <CardChoose
                icon={<IconProjectSignUp />}
                name="Project"
                onClick={() => push("/login/project")}
                // onClick={() =>
                //   setAlert(true, "Coming Soon", "Coming Soon", "warning")
                // }
              />
            </Select>
          </WrapperSignUp>
        );
      default:
        return (
          <WrapperSignUp>
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
          </WrapperSignUp>
        );
    }
  }, [screen, push, handleCheckPoint, handleLoginTwitter]);

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
  gap: 36px;
`;
