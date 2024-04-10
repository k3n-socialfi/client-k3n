import axiosInstance from "@/configs/axios.config";

export const getJobsDetail = (id: string) => {
  return axiosInstance.get(`/api/v1/jobs/${id}`);
};
