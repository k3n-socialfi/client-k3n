import axiosInstance from "@/configs/axios.config";
import { TAcceptOffer } from "@/types/offer";

export const getJobsUser = (username: string) => {
  return axiosInstance.get(`/api/v1/jobs/list-offers/${username}`);
};

export const getJobsProfile = () => {
  return axiosInstance.get(`/api/v1/jobs/list-offers`);
};

export const apiAcceptOffer = (data: TAcceptOffer) => {
  return axiosInstance.post(`/api/v1/jobs/offer/accept`, data);
};
