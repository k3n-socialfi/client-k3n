"use client";
import { useProfileContext } from "@/contexts/ProfileContext";
import { Divider } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Experience from "../components/Experiences";
import PostUser from "../components/PostUser";
import PersonSkeleton from "@/components/Skeleton/PersonSkeleton";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import OverviewSkeleton from "@/components/Skeleton/OverviewSkeleton";
import ServicesSkeleton from "@/components/Skeleton/ServicesSkeleton";
import { getMentionedProject } from "../services";
import CompletedProject from "../components/CompletedProject";
import PersonalClientUser from "../components/PersonalClientUser";

export interface IUserProfileProps {
  widthNotData?: boolean;
}

export default function ClientProfile(props: IUserProfileProps) {
  const [listProjects, setListProject] = useState<any[]>();
  const { isLoading, userProfile, dataPosts, getUserProfile } = useProfileContext();
  const { username } = useParams();

  const fetchData = async () => {
    await getUserProfile(username?.toString());
    const dataServices: any = await getMentionedProject(username?.toString());
    setListProject(dataServices?.data?.data);
  };

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
        <ContentRight>
          {isLoading ? (
            <>
              <OverviewSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <ServicesSkeleton />
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <PostSkeleton />
            </>
          ) : (
            <>
              <Divider sx={{ borderColor: "#B9B9B9 " }} />
              <Experience experience={userProfile} />
              <CompletedProject listProjects={listProjects} />
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
  margin-left: 40px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 12px 0;
`;

const PostNotData = styled.div`
  margin: 30px auto;
  color: #f23581;
`;

const StyleContainer = styled.div`
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
