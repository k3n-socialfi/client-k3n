import axiosInstance from "@/configs/axios.config";

export const loginSolana = (data: any) => {
    return axiosInstance.post(`/api/v1/auth/login-solana`, data);
};

export const getMessageSolana = (address: any) => {
    return axiosInstance.get(`/api/v1/auth/message-solana/${address}`);
};

export const getMyProfile = () => {
    return axiosInstance.get(`/api/v1/users/my/profile`);
} 