"use client";

import { useProfileContext } from "@/contexts/ProfileContext";
import { Divider } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Experience from "../components/Experiences";
import PostUser from "../components/PostUser";
import Services from "../components/Services";
import PersonSkeleton from "@/components/Skeleton/PersonSkeleton";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import OverviewSkeleton from "@/components/Skeleton/OverviewSkeleton";
import ServicesSkeleton from "@/components/Skeleton/ServicesSkeleton";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { getJobsUser } from "../services";
import CompletedProject from "../components/CompletedProject";
import PersonalClientUser from "../components/PersonalClientUser";

export interface IUserProfileProps {
  widthNotData?: boolean;
}

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function ClientProfile(props: IUserProfileProps) {
  const [listServices, setListServices] = useState<any[]>();
  const { isLoading, userProfile, dataPosts, getUserProfile } =
    useProfileContext();

  const { dataPopularServices } = useServicesContext();
  const { username } = useParams();

  const fetchData = async () => {
    await getUserProfile(username?.toString());
    const dataServices: any = await getJobsUser(username?.toString());
    setListServices(dataServices?.data?.data);
  };

  console.log("listServices", listServices);

  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [username]);

  return (
    <StyleContainer>
      {isLoading ? (
        <PersonSkeleton />
      ) : (
        <PersonalClientUser userProfile={userProfile} />
      )}
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <Content>
        {/* <PostLeft>
          <StyleTitle>Post</StyleTitle>
          <Posts widthNotData={dataPosts?.length > 0}>
            {isLoading ? (
              <PostSkeleton />
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
              {/* <Overview overView={userProfile} /> */}
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <Experience experience={userProfile} />
              {/* <Divider sx={{ borderColor: "#B9B9B9 " }} /> */}
              <Post>
                <StyleTitle>Completed Project</StyleTitle>
                <CompletedProject />
              </Post>
              <Services
                listServices={listServices}
                services={userProfile}
                username={username}
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
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
  margin-top: 50px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
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
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
`;
