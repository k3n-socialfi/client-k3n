"use client";

import { Divider } from "@mui/material";
import styled from "styled-components";
import PreviousDeals from "../components/PreviousDeals";
import AvailableDeals from "../components/AvailableDeals";
import CartMentions from "../components/CardMentions";
import { useProjectContext } from "@/contexts/ProjectContext";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import TableProject from "../components/TableProject";
import RecentPosts from "../components/RecentPost";
import Personal from "../components/Personal";
import KeyMetrics from "../components/KeyMetrics";
import Overview from "../components/Overview";

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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

const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
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
