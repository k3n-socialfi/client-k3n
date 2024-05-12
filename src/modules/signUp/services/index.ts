import axiosInstance from "@/configs/axios.config";

type TUpdateUser = {
  isProjectAccount?: boolean;
  projectChain?: string;
  projectName?: string;
  tokenName?: string;
  platform?: string;
  role?: string;
  type?: string;
  location?: string;
  language?: string;
  tags?: string[];
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
