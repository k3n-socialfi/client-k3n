"use client";
import { IconThunder } from "@/assets/icons";
import { ButtonPrimary, ButtonText } from "@/components/ButtonCustom";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import WrapperSignUp from "../WrapperSignUp";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

type Props = {};

const Individual = (props: Props) => {
  const { push } = useRouter();
  const { dataPersonal } = useMyProfileContext();
  const checkPoint = dataPersonal?.twitterInfo?.totalPoints < 30;

  return (
    <WrapperSignUp showTitle>
      <Container>
        <Box>
          <Name>
            <Typography variant="h5" color={"#82EBFF"}>
              Your Shill Score
            </Typography>
          </Name>
          <Score>
            <IconThunder width={48} height={48} />
            <Typography variant="h4" color={"#FFF"}>
              {dataPersonal?.twitterInfo?.totalPoints ?? 0}
            </Typography>
          </Score>
        </Box>
        <Typography variant="h5" color={"#FFF"}>
          Your ShillScore qualifies you to register for our KOL program. Become
          a KOL to receive many benefits.
        </Typography>
        <ButtonCustom>
          <ButtonText
            fullWidth
            backgroundColorBt="textCustom.backCreateAccount"
            borderColorBt="textCustom.backCreateAccount"
            borderRadius="50px"
            onClick={() => push("/login/individual/user")}
          >
            <Typography variant="h5" sx={{ padding: "8px" }} color={"#82EBFF"}>
              Login as user
            </Typography>
          </ButtonText>

          <ButtonPrimary
            type="submit"
            borderRadius="50px"
            fullWidth
            onClick={() => push("/login/individual/kol")}
          >
            <Typography variant="h5" sx={{ padding: "8px" }}>
              Continue
            </Typography>
          </ButtonPrimary>
        </ButtonCustom>
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 80px;
  border-radius: 16px;
  background-color: #191d24;
  border: 2px solid #fff;
  gap: 22px;
  @media (max-width: 500px) {
    padding: 20px;
  }
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

const ButtonCustom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  @media (max-width: 528px) {
    flex-wrap: wrap;
  }
`;
