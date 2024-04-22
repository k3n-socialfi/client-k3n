import axiosInstance from "@/configs/axios.config";

export const kolRanking = () => {
  return axiosInstance.get(`api/v1/users/kols/ranking`, {
    params: {
      top: 100,
      page: 1,
      limit: 10,
    },
  });
};
