import axiosInstance from "@/configs/axios.config";

export const postConnect = (data: any) => {
    return axiosInstance.post(`/api/v1/users/connect/wallet/solana`, data);
};