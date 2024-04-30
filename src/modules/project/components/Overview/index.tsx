import { ButtonPrimary } from "@/components/ButtonCustom";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useBoolean } from "@/hooks/useBoolean";
import { Typography } from "@mui/material";
import styled from "styled-components";

export default function Overview({ userProfile, isLoading }: any) {
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
}

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
const StyleContentOverview = styled.div``;

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

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
`;
