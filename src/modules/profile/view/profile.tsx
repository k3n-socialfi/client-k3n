"use client";

import { Divider } from "@mui/material";
import styled from "styled-components";
import Experience from "../components/Experiences";
import PostUser from "../components/PostUser";
import Services from "../components/ListServices";
import PersonSkeleton from "@/components/Skeleton/PersonSkeleton";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import OverviewSkeleton from "@/components/Skeleton/OverviewSkeleton";
import ServicesSkeleton from "@/components/Skeleton/ServicesSkeleton";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { useMyProfileContext } from "@/contexts/MyProfileConext";
import CompletedProject from "../components/CompletedProject";
import PersonalUserProfile from "../components/PersonalUserProfile";
import { useEffect, useState } from "react";
import { getJobsProfile } from "../services";

export interface IUserProfileProps {
  widthNotData?: boolean;
}

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function UserProfile(props: IUserProfileProps) {
  const { dataPersonal, dataPosts, isLoading, fetchData } =
    useMyProfileContext();
  const [listServicesProfile, setListServicesProfile] = useState<any[]>();
  const fetchDataServices = async () => {
    const dataServices: any = await getJobsProfile();
    setListServicesProfile(dataServices?.data?.data);
  };

  useEffect(() => {
    fetchDataServices()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <StyleContainer>
      {isLoading ? (
        <PersonSkeleton />
      ) : dataPersonal ? (
        <PersonalUserProfile
          dataPersonal={dataPersonal}
          resetPage={() => fetchData()}
        />
      ) : (
        <PersonSkeleton />
      )}
      {}
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <Content>
        {/* <PostLeft>
          {isLoading ? (
            <LoadingSkeleton width="200px" height="30px" />
          ) : (
            <StyleTitle>Post</StyleTitle>
          )}
          <Posts widthNotData={dataPosts?.length > 0}>
            {isLoading ? (
              [1, 2, 3, 4, 5].map((item) => <PostSkeleton key={item} />)
            ) : dataPosts?.length > 0 ? (
              dataPosts.map((item: any, index: number) => (
                <>
                  <PostUser item={item} />
                </>
              ))
            ) : (
              <PostNotData>{`You haven't made any posts yet.`}</PostNotData>
            )}
          </Posts>
        </PostLeft> */}
        <ContentRight>
          {isLoading ? (
            <>
              <OverviewSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <ServicesSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <ServicesSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <PostSkeleton />
            </>
          ) : (
            <>
              {/* <Overview overview={dataPersonal} /> */}
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <Experience experience={dataPersonal} />
              {/* <Divider sx={{ borderColor: "#B9B9B9 " }} /> */}
              <Post>
                <StyleTitle>Completed Project</StyleTitle>
                <CompletedProject />
              </Post>
              <Services
                listServicesProfile={listServicesProfile}
                services={dataPersonal}
              />
              <StyleBox>
                <Post>
                  <StyleTitle>Recent posts</StyleTitle>
                  <Posts widthNotData={dataPosts?.length > 0}>
                    {dataPosts?.length > 0 ? (
                      dataPosts.map((item: any, index: number) => (
                        <PostUser key={index} item={item} />
                      ))
                    ) : (
                      <PostNotData>{`You haven't made any posts yet.`}</PostNotData>
                    )}
                  </Posts>
                </Post>
              </StyleBox>
              {/* <Divider sx={{ borderColor: "#B9B9B9 " }} /> */}
            </>
          )}
        </ContentRight>
      </Content>
    </StyleContainer>
  );
}

const Post = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentRight = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Posts = styled.div<IUserProfileProps>`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  width: 100%;
  padding: 24px 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostNotData = styled.div`
  margin: 30px auto;
  color: #f23581;
`;

const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleBox = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
