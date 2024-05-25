import { IconCertification, IconLightning } from "@/assets/icons";
import { Avatar, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export interface IMyRankingProps {
  dataPersonal?: any;
}

export default function MyRanking({ dataPersonal }: IMyRankingProps) {
  return (
    dataPersonal ? (
      <Loginned>
        <Info>
          <Avatar
            alt=""
            src={dataPersonal?.twitterInfo?.avatar}
            sx={{ width: 56, height: 56 }}
          />
          <Account>
            <Name>
              <Typography color={"#FFF"}>{dataPersonal?.fullName}</Typography>
              {dataPersonal?.twitterInfo?.verificationStatus && (
                <IconCertification />
              )}
            </Name>
            <Typography variant="body2" color={"#82EBFF"}>
              {dataPersonal?.type}
            </Typography>
          </Account>
        </Info>
        <YourRank>
          <TitleYourRank>Your rank</TitleYourRank>
          <Rank>100</Rank>
        </YourRank>
        <Total>
          <TitleYourRank>Total Points</TitleYourRank>
          <CustomStack>
            <IconLightning />
            <Rank>
              {dataPersonal?.twitterInfo?.totalPoints ?? 0}
            </Rank>
          </CustomStack>
        </Total>
      </Loginned>
    ) : (
      <Unlogin>
        <Typography color={"#D3D3D3"}>
          Please connect your wallet to view your ranking.
        </Typography>
      </Unlogin>
    )
  );
}

const CustomStack = styled(Stack)`
  display: flex;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 6px !important;
`

const Unlogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 33px 48px;
  width: 100%;
  background: var(--Card-Card, rgba(25, 29, 36, 1));
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 798px) {
    flex-wrap: wrap;
    gap: 50px;
  }
  @media (max-width: 504px) {
    justify-content: center;
    align-items: center;
  }
`
const Loginned = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 20px 48px;
  width: 100%;
  background: var(--Card-Card, rgba(25, 29, 36, 1));
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 798px) {
    flex-wrap: wrap;
    gap: 50px;
  }
  @media (max-width: 504px) {
    justify-content: center;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Account = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.div`
  display: flex;
  gap: 5px;
`;
const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: #fff;
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CrossBar = styled.div`
  width: 200px;
  border-radius: 20px;
  height: 8px;
  background-image: linear-gradient(to right, #f23581, #a1f0ff);
`;

const StyleMilestone = styled.div`
  position: absolute;
  height: 22px;
  width: 8px;
  background-color: #fff;
  border-radius: 20px;
  top: -5px;
  /* right: 50px; */
`;

const Slider = styled.div`
  position: relative;
`;

const StyleBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const StyleTop = styled.div``;

const YourRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TitleYourRank = styled.span`
  font-size: 18px;
  color: #919191;
  font-weight: 700;
`;
const Rank = styled.span`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`;
