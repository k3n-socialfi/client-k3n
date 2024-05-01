//service call api
import axiosInstance from "@/configs/axios.config";

export const getJobsUser = (username: string) => {
    return axiosInstance.get(`/api/v1/jobs/list-offers/${username}`);
};
