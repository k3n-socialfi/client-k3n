import axiosInstance from "@/configs/axios.config";

export const getServiceDetail = (id: string) => {
  return axiosInstance.get(`/api/v1/jobs/${id}`);
};
