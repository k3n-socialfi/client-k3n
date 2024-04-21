import axiosInstance from "@/configs/axios.config";

export const getAllServices = () => {
  return axiosInstance.get(`/api/v1/jobs`);
};

export const getPopularServices = () => {
  return axiosInstance.get(`/api/v1/jobs/popular`);
};
