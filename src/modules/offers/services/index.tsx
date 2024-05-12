import axiosInstance from "@/configs/axios.config";
import { TAcceptOffer } from "../types/offer";

export const getJobsProfile = () => {
    return axiosInstance.get(`/api/v1/jobs/list-offers`);
};

export const apiAcceptOffer = (data: TAcceptOffer) => {
    return axiosInstance.post(`/api/v1/jobs/offer/accept`, data);
};

export const getListMyOffer = () => {
    return axiosInstance.get(`/api/v1/jobs/my-offers`);
};