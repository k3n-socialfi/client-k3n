import axiosInstance from "@/configs/axios.config";

export const UpdateProfile = (values: any) => {
  return axiosInstance.put(`/api/v1/users/profile/update`, values);
};
