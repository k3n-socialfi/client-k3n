import axiosInstance from "@/configs/axios.config";

export const kolRanking = () => {
  return axiosInstance.get(`api/v1/users/kols/ranking`);
};
