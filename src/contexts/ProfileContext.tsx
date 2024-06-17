"use client";
import { IUserProfile } from "@/interface/profile.interface";
import { getMentionedProject } from "@/modules/profile/services";
import { getPostUser, getProfileUser } from "@/services";
import { useParams } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}
interface IProfileContextTypes {
  userProfile: IUserProfile | any;
  dataPosts: any[];
  listProjects: any[];
  isLoading: boolean;
}

const ProfileContextTypes = {
  userProfile: {
    createdAt: 0,
    updatedAt: 0,
    isDeleted: true,
    userId: "",
    username: "",
    role: "",
    type: "",
    jobTitle: "",
    organization: "",
    experience: [],
    fullName: "",
    email: "",
    phoneNumber: "",
    wallets: [],
    socialProfiles: [],
    twitterPoints: 0,
    royaltyPoints: 0,
    totalPoints: 0,
    avatar: "",
    bio: "",
    coverImage: "",
    dob: "",
    gender: "",
    location: "",
    verificationStatus: "",
    referralCode: "",
    lastLogin: "",
    posts: [],
  },
  dataPosts: [{}],
  listProjects: [{}],

  isLoading: true,
};
const profileContext = createContext<IProfileContextTypes>(ProfileContextTypes);
const ProfileContextProvider = ({ children }: IPropsProfileContextProvider) => {
  const params = useParams<{ username: string }>();

  const [userProfile, setUserProfile] = useState<IUserProfile>(
    ProfileContextTypes?.userProfile,
  );
  const [dataPosts, setDataPosts] = useState<any>();
  const [listProjects, setListProject] = useState<[]>([]);

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

      // if (data?.data?.username) {
      //   const arrayPost: any = await getPostUser(data?.data?.username);
      //   setDataPosts(arrayPost?.data?.data?.posts);
      // }
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

  return (
    <profileContext.Provider
      value={{
        isLoading,
        userProfile,
        listProjects,
        dataPosts,
      }}
    >
      {children}
    </profileContext.Provider>
  );
};

const useProfileContext = () => {
  return useContext(profileContext);
};
export { ProfileContextProvider, useProfileContext };
