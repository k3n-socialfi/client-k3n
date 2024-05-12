import axiosInstance from "@/configs/axios.config";

export const getJobsUser = (username: string) => {
    return axiosInstance.get(`/api/v1/jobs/list-offers/${username}`);
};

export const getJobsProfile = () => {
    return axiosInstance.get(`/api/v1/jobs/list-offers`);
};

export const getMentionedProject = (username: string) => {
    return axiosInstance.get(`/api/v1/twitter/user/portfolio?username=${username}`)
}