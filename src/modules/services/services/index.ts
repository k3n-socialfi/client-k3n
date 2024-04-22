import axiosInstance from "@/configs/axios.config";

export const getAllServices = () => {
  return axiosInstance.get(`/api/v1/jobs`, {
    params: {
      page: 1,
      limit: 5,
    },
  });
};

export const getPopularServices = () => {
  return axiosInstance.get(`/api/v1/jobs/popular`, {
    params: {
      page: 1,
      limit: 5,
    },
  });
};
