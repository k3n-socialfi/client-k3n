import axiosInstance from "@/configs/axios.config";
import { TService } from "@/types/service";
import { IFilterKOL } from "@/interface/users.interface";

export const loginSolana = (data: any) => {
  return axiosInstance.post(`/api/v1/auth/login-solana`, data);
};

export const loginTwitterSolana = (data: any) => {
  return axiosInstance.post(`/api/v1/users/connect/wallet/solana`, data);
};
export const getMessageSolana = (address: any) => {
  return axiosInstance.get(`/api/v1/auth/message-solana/${address}`);
};

export const getMyProfile = () => {
  return axiosInstance.get(`/api/v1/users/my/profile`);
};

export const getFeaturedKols = async () => {
  return axiosInstance.get("/api/v1/users", {
    params: {
      page: 1,
      param: 5,
    },
  });
};

export const getProfileUser = async (username: string) => {
  return axiosInstance.get(`/api/v1/users/profile/${username}`);
};

export const getTrendingProjects = async () => {
  return axiosInstance.get("/api/v1/jobs/trending/projects", {
    params: {
      page: 1,
      param: 10,
    },
  });
};

export const getTrendingKols = async () => {
  return axiosInstance.get("/api/v1/users/kols/trending", {
    params: {
      page: 1,
      param: 10,
    },
  });
};

export const getFeatureKolsRanking = async () => {
  return axiosInstance.get("/api/v1/users/kols/ranking", {
    params: {
      page: 1,
      param: 15,
    },
  });
};

export const getKolsFilter = async (params: IFilterKOL) => {
  return axiosInstance.get("/api/v1/users/kols/ranking", { params });
};

export const getFeatureProject = async () => {
  return axiosInstance.get("/api/v1/jobs", {
    params: {
      page: 1,
      param: 5,
    },
  });
};

export const checkExists = (address: any) => {
  return axiosInstance.get(`api/v1/users/check-exists/${address}`);
};

export const updateProfile = (data: any) => {
  return axiosInstance.put(`api/v1/users/profile/update`, data);
};

export const createServices = (data: TService) => {
  return axiosInstance.post(`/api/v1/jobs/create`, data);
};
