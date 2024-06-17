"use client";

import { IUserProfile } from "@/interface/profile.interface";
import { getMentionedProject } from "@/modules/profile/services";
import { getPostUser, getProfileUser } from "@/services";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useProfile = () => {
  const params = useParams<{ username: string }>();

  const [userProfile, setUserProfile] = useState<IUserProfile>();
  const [dataPosts, setDataPosts] = useState<any>();
  const [listProjects, setListProject] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getListProject = useCallback(async () => {
    try {
      setIsLoading(true);
      const mentionProjects = await getMentionedProject(params?.username);
      if (mentionProjects) {
        setListProject(mentionProjects?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [params?.username]);

  const getUserProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await getProfileUser(params?.username);
      setUserProfile(data?.data);
      const arrayPost = await getPostUser(params?.username);
      if (arrayPost) {
        setDataPosts(arrayPost?.data?.data?.posts);
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  }, [params?.username]);

  useEffect(() => {
    getUserProfile();
    getListProject();
  }, [getUserProfile, getListProject]);

  return { userProfile, dataPosts, listProjects, isLoading };
};
