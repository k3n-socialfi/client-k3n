"use client";
import { IconThunder } from "@/assets/icons";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import WrapperSignUp from "../WrapperSignUp";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

type Props = {};

const Individual = (props: Props) => {
  const { push } = useRouter();
  const { dataPersonal } = useMyProfileContext();

  return (
    <WrapperSignUp title="Congratulation !!">
      <Container>
        <div className="flex flex-col items-center justify-center py-12 px-20 rounded-2xl gap-5 bg-[#191d24] shadow-xl shadow-[#82EBFF22]">
          <Name>
            <Typography variant="h5">Your Shill Score</Typography>
          </Name>
          <Score>
            <div className=" animate-[rotateY_2s_ease-in-out_infinite]">
              <IconThunder width={48} height={48} />
            </div>
            <Typography variant="h4" color={"#FFF"}>
              {dataPersonal?.twitterInfo?.totalPoints ?? 0}
            </Typography>
          </Score>
        </div>
        <Typography variant="h5" color={"#FFF"}>
          Your shill score is qualified to register as a platform KOL. <br />
          Become a KOL to receive many benefits.
        </Typography>
        <div className="flex w-full flex-col gap-4">
          <button
            onClick={() => push("/login/individual/kol")}
            className="font-bold rounded-full w-full bg-[#F0116A] text-white p-2"
          >
            Register as KOL
          </button>

          <div
            className="text-[#82EBFF] hover:underline cursor-pointer"
            onClick={() => push("/")}
          >
            Skip
          </div>
        </div>
      </Container>
    </WrapperSignUp>
  );
};

export default Individual;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  text-align: center;
  text-align: center;
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  color: #fff;
`;

const Score = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
