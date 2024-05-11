import axiosInstance from "@/configs/axios.config";

export const getJobsUser = (username: string) => {
    return axiosInstance.get(`/api/v1/jobs/list-offers/${username}`);
};

export const getJobsProfile = () => {
    return axiosInstance.get(`/api/v1/jobs/list-offers`);
};
