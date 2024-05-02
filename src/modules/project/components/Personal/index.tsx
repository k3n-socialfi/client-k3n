import {
  IJobsDetail,
  IProjectDetail,
} from "@/interface/projectDetail.interface";
import { Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import {
  IconIdProject,
  IconPaper,
  IconPointProfile,
  IconProject,
  IconStar,
  IconTikTok,
  IconVerify,
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface IPropUserDes {
  color?: string;
}
interface IPropsPersonal {
  dataProjectDetail: IProjectDetail;
  isLoading?: boolean;
  dataJobsDetail: IJobsDetail;
}
export default function Personal({
  dataProjectDetail,
  isLoading,
  dataJobsDetail,
}: IPropsPersonal) {
  return (
    <StylePersonal>
      <StylePersonalLeft>
        {isLoading ? (
          <LoadingSkeleton width="220px" height="220px" radius="100%" />
        ) : (
          <StyleImage
            src={
              dataProjectDetail?.image
                ? dataProjectDetail?.image
                : dataJobsDetail?.image
            }
            alt="avatar profile"
            width={220}
            height={220}
          />
        )}

        <StyleContentUser>
          {isLoading ? (
            <>
              <LoadingSkeleton width="200px" height="10px" />
              <LoadingSkeleton width="50px" height="10px" />
              <LoadingSkeleton width="200px" height="100px" />
              <LoadingSkeleton width="200px" height="10px" />
              <LoadingSkeleton width="200px" height="10px" />
              <LoadingSkeleton width="200px" height="10px" />
              <LoadingSkeleton width="200px" height="10px" />
            </>
          ) : (
            <>
              <StyleTitle>
                {dataProjectDetail?.name
                  ? dataProjectDetail?.name
                  : dataJobsDetail?.projectName}
                <IconVerify />
              </StyleTitle>
              <PointProfile>
                <IconPointProfile />
              </PointProfile>
              <StyleContentFlex>
                <StyleContentUser>
                  <StyleUserDes>
                    {dataProjectDetail?.description ??
                      "data null" ??
                      "Data null"}
                  </StyleUserDes>
                  <WrapperCategori>
                    {dataProjectDetail?.categories?.map((item: any) => {
                      return (
                        <StyleUserDes color="#82EBFF" key={item}>
                          {item}
                        </StyleUserDes>
                      );
                    })}
                  </WrapperCategori>
                  <StyleUserSocial>Social</StyleUserSocial>
                  <StyleIcons>
                    <>
                      <IconTikTok></IconTikTok>
                    </>
                  </StyleIcons>
                  {/* <StyleIcons>
                      {dataProjectDetail?.socialProfiles?.map(
                        (item: any, index: number) =>
                          SOCIAL[item?.social] ?? <></>,
                      )}
                    </StyleIcons> */}
                </StyleContentUser>
                <StyleContentUser>
                  <StyleTotal>
                    <StyleDesOverview>Total Achievements:</StyleDesOverview>
                    <StyleSubTitle>32</StyleSubTitle>
                  </StyleTotal>
                  <StyleTotal>
                    <StyleDesOverview>Review:</StyleDesOverview>
                    <StyleSubTitle>28</StyleSubTitle>
                  </StyleTotal>
                  <StyleIcons>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </StyleIcons>
                </StyleContentUser>
                <StyleContentUser>
                  <StyleDesOverview>Location</StyleDesOverview>
                  <StyleSubTitle>New York, NYC</StyleSubTitle>
                </StyleContentUser>
              </StyleContentFlex>
            </>
          )}
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        {isLoading ? (
          <>
            <LoadingSkeleton width="150px" height="20px" />
            <LoadingSkeleton width="150px" height="20px" />
            <LoadingSkeleton width="150px" height="20px" />
          </>
        ) : (
          <>
            <StyleButtons>
              <StyleButtonTitle>
                <IconIdProject />
                CA: DezXAZ....
              </StyleButtonTitle>
              <StyleButtonTitle>
                <IconPaper />
                Whitepaper
              </StyleButtonTitle>
              <StyleButtonTitle>
                <IconProject />
                Project Website
              </StyleButtonTitle>
            </StyleButtons>
            <StyleChips>
              <Chips
                label="X tweets"
                variant="outlined"
                sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
              />
              <Chips
                label="KOLs"
                variant="outlined"
                sx={{ color: "#3EAABE", backgroundColor: "#EBFCFF" }}
                color="primary"
              />
              <Chips
                label="Callers"
                variant="outlined"
                sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
                color="secondary"
              />
              <Chips
                label="Solana Ecosystem"
                color="secondary"
                sx={{ color: "#25002D", backgroundColor: "#F6CCFF" }}
              />
            </StyleChips>
            <StyleTotal>
              <StyleDesOverview>X Followers::</StyleDesOverview>
              <StyleSubTitle>12,000</StyleSubTitle>
            </StyleTotal>
            <ButtonPrimary style={{ width: "100%" }}>
              <Typography sx={{ p: "8px 0" }}>DM to Elena</Typography>
            </ButtonPrimary>
          </>
        )}
      </StylePersonalRight>
    </StylePersonal>
  );
}

const StylePersonal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 14px 24px 14px;
  gap: 20px;
  @media (max-width: 1120px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
  }
  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const StylePersonalLeft = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const StyleImage = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
`;

const StyleContentUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 650px) {
    align-items: center;
    margin-top: -40px;
  }
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 650px) {
    align-items: center;
  }
`;

const PointProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyleContentFlex = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyleUserDes = styled.div<IPropUserDes>`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: ${({ color }) => (color ? color : "#82EBFF")};
  width: fit-content;
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const WrapperCategori = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyleUserSocial = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #82ebff;
`;

const StyleIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 420px) {
    flex-wrap: wrap;
  }
`;

const StyleTotal = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  gap: 10px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
  white-space: nowrap;
`;

const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
  white-space: nowrap;
`;

const StylePersonalRight = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: right;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  @media (max-width: 1120px) {
    width: 100%;
    margin-left: 250px;
    margin-top: 10px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 420px) {
  }
`;

const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyleButtonTitle = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #393939;

  color: #ffd7f4;
  border-radius: 6px;
`;

const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 4px 0;
  color: #ffff !important;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
