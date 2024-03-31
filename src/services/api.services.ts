import axiosInstance from "@/configs/axios.config";

export const getFeaturedKols = async () => {
  return axiosInstance.get("/users");
};

export const getProfileUser = async (username: string) => {
  return axiosInstance.get(`/users/profile/${username}`);
};
