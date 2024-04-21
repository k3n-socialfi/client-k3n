import axiosInstance from "@/configs/axios.config";
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
  return axiosInstance.get("/api/v1/users");
};

export const getProfileUser = async (username: string) => {
  return axiosInstance.get(`/api/v1/users/profile/${username}`);
};

export const getTrendingProjects = async () => {
  return axiosInstance.get("/api/v1/jobs/trending/projects");
};

export const getTrendingKols = async () => {
  return axiosInstance.get("/api/v1/users/kols/trending");
};

export const getFeatureKolsRanking = async () => {
  return axiosInstance.get("/api/v1/users/kols/ranking");
};

export const getKolsFilter = async (params: IFilterKOL) => {
  return axiosInstance.get("/api/v1/users/kols/ranking", { params });
};

export const getFeatureProject = async () => {
  return axiosInstance.get("/api/v1/jobs");
};

export const checkExists = (address: any) => {
  return axiosInstance.get(`api/v1/users/check-exists/${address}`);
};

export const updateProfile = (data: any) => {
  return axiosInstance.put(`api/v1/users/profile/update`, data);
};
