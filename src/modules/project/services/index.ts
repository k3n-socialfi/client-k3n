import axiosInstance from "@/configs/axios.config";

export const getProjectDetail = (id: string) => {
  return axiosInstance.get(`/api/v1/jobs/project/${id}`);
};
