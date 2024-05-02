import axiosInstance from "@/configs/axios.config";

export const getServiceDetail = (id: string) => {
  return axiosInstance.get(`/api/v1/jobs/${id}/detail`);
};

export const apiCreateOffer = (id: string) => {
  return axiosInstance.post(`/api/v1/jobs/${id}/offer`);
};
