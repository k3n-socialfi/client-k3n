"use client";
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
import { useBoolean } from "@/hooks/useBoolean";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import PreviousDeals from "../components/PreviousDeals";
import AvailableDeals from "../components/AvailableDeals";
import CartMentions from "../components/CardMentions";
import { useProjectContext } from "@/contexts/ProjectContext";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  IJobsDetail,
  IProjectDetail,
} from "@/interface/projectDetail.interface";
import Chips from "@/components/Chip";
import TableProject from "../components/TableProject";
import RecentPosts from "../components/RecentPost";

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Overview = ({ userProfile, isLoading }: any) => {
  const openModal = useBoolean();
  return (
    <StyleOverview>
      <StyleLeft>
        {isLoading && !!userProfile ? (
          <LoadingSkeleton width="200px" height="20px" />
        ) : (
          <StyleTitle>Overview</StyleTitle>
        )}
        <PrimaryTitleLeft>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Project Type</StyleDesOverview>
                <StyleSubTitle>Memecoin</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Primary Ecosystem</StyleDesOverview>
                <StyleSubTitle>Solana Ecosystem</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
        </PrimaryTitleLeft>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Gender</StyleDesOverview>
                <StyleSubTitle>Female</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Type of KOLs</StyleDesOverview>
                <StyleSubTitle>Influencer</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Location</StyleDesOverview>
                <StyleSubTitle>New York, NYC</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
        </PrimaryTitleLeft>
      </StyleLeft>
      <StyleRight>
        <PrimaryTitleRight>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>X Followers</StyleDesOverview>
                <StyleSubTitle>
                  {!userProfile?.twitterInfo?.followers ?? 259000}
                </StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
          <StyleContentOverview>
            {isLoading && !!userProfile ? (
              <>
                <LoadingSkeleton width="100px" height="20px" />
              </>
            ) : (
              <>
                <StyleDesOverview>Avg. Price per deals</StyleDesOverview>
                <StyleSubTitle>2-3 ETH</StyleSubTitle>
              </>
            )}
          </StyleContentOverview>
        </PrimaryTitleRight>
        {isLoading && !!userProfile ? (
          <>
            <LoadingSkeleton width="200px" height="50px" radius="50px" />
          </>
        ) : (
          <>
            <ButtonPrimary onClick={() => openModal.onTrue()}>
              <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
            </ButtonPrimary>
          </>
        )}
      </StyleRight>
      {openModal.value && (
        <div style={{ width: "300ox", height: "300px" }}>
          {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
        </div>
      )}
    </StyleOverview>
  );
};
const KeyMetrics = ({ isLoading, dataProjectDetail }: any) => {
  const openModal = useBoolean();
  return (
    <>
      {isLoading ? (
        <LoadingSkeleton width="200px" height="20px" />
      ) : (
        <StyleTitle>Key Metrics</StyleTitle>
      )}
      <StyleOverview>
        <StyleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="100px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Price </StyleDesOverview>
                  <StyleSubTitle>
                    ${dataProjectDetail?.price ?? 0}
                  </StyleSubTitle>
                </>
              )}
            </StyleContentOverview>

            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Circulating Supply</StyleDesOverview>
                  <StyleSubTitle>65,845,582,624,539 BONK</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Max Supply</StyleDesOverview>
                  <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Total Supply</StyleDesOverview>
                  <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>ATH </StyleDesOverview>
                  <StyleSubTitle>$0.044547</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>ATH Date </StyleDesOverview>
                  <StyleSubTitle>Mar 5, 2024 </StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleLeft>
        </StyleLeft>

        <StyleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Volume 24h</StyleDesOverview>
                  <StyleSubTitle>$239,41M</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Market Cap</StyleDesOverview>
                  <StyleSubTitle>$1,71B</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>FDV</StyleDesOverview>
                  <StyleSubTitle>$2,42B</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>TVL</StyleDesOverview>
                  <StyleSubTitle>-</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleRight>
        </StyleRight>
        {openModal.value && (
          <div style={{ width: "300ox", height: "300px" }}>
            {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
          </div>
        )}
      </StyleOverview>
    </>
  );
};

interface IPropsPersonal {
  dataProjectDetail: IProjectDetail;
  isLoading?: boolean;
  dataJobsDetail: IJobsDetail;
}
interface IPropUserDes {
  color?: string;
}
const Personal = ({
  dataProjectDetail,
  isLoading,
  dataJobsDetail,
}: IPropsPersonal) => {
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
              <StyleSubTitle>12,314</StyleSubTitle>
            </StyleTotal>
            <ButtonPrimary style={{ width: "100%" }}>
              <Typography sx={{ p: "8px 0" }}>DM to Elena</Typography>
            </ButtonPrimary>
          </>
        )}
      </StylePersonalRight>
    </StylePersonal>
  );
};

interface IProjectsDetail {}
export default function ProjectDetail(props: IProjectsDetail) {
  const { dataProjectDetail, isLoading, dataJobsDetail } = useProjectContext();
  return (
    <StyleContainer>
      {isLoading ? (
        <>
          <Personal
            dataProjectDetail={dataProjectDetail}
            dataJobsDetail={dataJobsDetail}
            isLoading={isLoading}
          />
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <Wrapper>
            <PostLeft>
              {isLoading ? (
                <LoadingSkeleton width="200px" height="20px" />
              ) : (
                <StyleTitle>Mentions</StyleTitle>
              )}
              <Posts>
                {isLoading ? (
                  <>
                    <LoadingSkeleton width="100%" height="400px" />
                    <LoadingSkeleton width="100%" height="400px" />
                    <LoadingSkeleton width="100%" height="400px" />
                  </>
                ) : (
                  <>
                    {dataProjectDetail?.tweets?.map((item: any) => {
                      return (
                        <>
                          <CartMentions item={item} />
                        </>
                      );
                    })}
                  </>
                )}
              </Posts>
            </PostLeft>
            <div style={{ width: "70%" }}>
              <Overview userProfile={dataProjectDetail} isLoading={isLoading} />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <KeyMetrics
                dataProjectDetail={dataProjectDetail}
                isLoading={isLoading}
              />
            </div>
          </Wrapper>
        </>
      ) : (
        <>
          <Personal
            dataProjectDetail={dataProjectDetail}
            dataJobsDetail={dataJobsDetail}
          />
          <Wrapper style={{ display: "flex", width: "100%" }}>
            <WrapperContentRight style={{ width: "100%" }}>
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <PreviousDeals />
              <TableProject />
              <AvailableDeals />
              <RecentPosts
                dataPosts={dataProjectDetail?.tweets}
                isLoading={isLoading}
              />
            </WrapperContentRight>
          </Wrapper>
        </>
      )}
    </StyleContainer>
  );
}

const PostLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  padding: 12px;
  @media (max-width: 1250px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: row;
    overflow: visible;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 420px) {
    flex-direction: row;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
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
const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
`;
const PrimaryTitleLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
  @media (max-width: 1024px) {
    overflow: visible;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
`;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
  white-space: nowrap;
`;
const StyleContentOverview = styled.div``;
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
  white-space: nowrap;
`;
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
const StyleImage = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
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

const StyleUserDes = styled.div<IPropUserDes>`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  /* white-space: pre-wrap; */
  border-radius: 12px;
  color: ${({ color }) => (color ? color : "#82EBFF")};
  width: fit-content;
  @media (max-width: 650px) {
    width: 100%;
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
const StyleOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 100px;
  @media (max-width: 1120px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
  }
`;
const StyleLeft = styled.div`
  width: 70%;
  margin-left: -20px;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;

const StyleRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;
const StyleModalBox = styled(Box)`
  position: fixed;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  box-shadow: 24;
  padding: 0;
`;

const StyleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyleBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
  flex-wrap: nowrap;
  background-color: #252525;
  border-radius: 10px;
  width: 100%;
  padding: 20px 50px;
`;

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`;

const StyleBottomSubmit = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const StyleBottomGotIt = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyleInput = styled(TextField)`
  border-radius: 20px;
  color: #fff;
  background-color: #353535;
  border: 0px #353535 solid;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleRequest = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #f23581;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: left;
  padding: 20px;
  gap: 50px;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1120px) {
    gap: 10px;
    align-items: flex-start;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
const WrapperContentRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1250px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;
const WrapperCategori = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyleContentFlex = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 50px;
`;

const StyleTotal = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  gap: 10px;
`;

const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 4px 0;
  color: #ffff !important;
`;
