import axiosInstance from "@/configs/axios.config";

export type TUpdateUser = {
  isProjectAccount: boolean;
  projectChain: string | null;
  projectName: string | null;
  tokenName: string | null;
  platform: string | null;
  role: string | null;
  type: string | null;
  location: string | null;
  language: string | null;
  tags: string[];
};

export const apiCreateUser = (data: TUpdateUser) => {
  return axiosInstance.put(`/api/v1/users/sigup/update`, data);
};

export const getPopularServices = () => {
  return axiosInstance.get(`/api/v1/jobs/popular`, {
    params: {
      page: 1,
      limit: 5,
    },
  });
};
