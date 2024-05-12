"use client";
import {
  IconKOLSignUp,
  IconUserSignUp,
  IconXAccountConnected,
} from "@/assets/icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import CardChoose from "../CardChoose";
import { Typography } from "@mui/material";
import Hexagon from "../Hexagon";
import WrapperConnectX from "../WrapperConnectX";

type Props = {};

const Individual = (props: Props) => {
  const { push } = useRouter();

  return (
    <WrapperConnectX showConnected>
      <Select>
        <CardChoose
          icon={<IconUserSignUp />}
          name="User"
          onClick={() => push("/sign-up/individual/user")}
        />
        <CardChoose
          icon={<IconKOLSignUp />}
          name="KOL"
          onClick={() => push("/sign-up/individual/kol")}
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
