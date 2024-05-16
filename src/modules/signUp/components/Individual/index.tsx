"use client";
import { IconKOLSignUp, IconUserSignUp } from "@/assets/icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import CardChoose from "../CardChoose";
import WrapperConnectX from "../WrapperConnectX";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";

type Props = {};

const Individual = (props: Props) => {
  const { push } = useRouter();
  const { dataPersonal } = useFetchDataMyProfile();
  const isDisabled = dataPersonal?.twitterInfo?.totalPoints < 30;

  return (
    <WrapperConnectX showConnected>
      <Select>
        <CardChoose
          icon={<IconUserSignUp />}
          name="User"
          onClick={() => push("/auth/sign-up/individual/user")}
        />
        <CardChoose
          icon={<IconKOLSignUp />}
          name="KOL"
          isDisabled={isDisabled}
          onClick={() => push("/auth/sign-up/individual/kol")}
        />
      </Select>
    </WrapperConnectX>
  );
};

export default Individual;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 46px;
`;
