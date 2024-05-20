import axiosInstance from '@/configs/axios.config';
import { IFilterRanking } from './../type/index';

export const getTopRanking = async (params: IFilterRanking) => {
    return axiosInstance.get("/api/v1/users/kols/ranking", { params });
};