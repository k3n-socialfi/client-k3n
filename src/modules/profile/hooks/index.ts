import axiosInstance from "@/configs/axios.config";
import { useCallback, useEffect, useState } from "react";

//custom hook
export const useListOffer = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/api/v1/jobs/list-offers");
      if (response) {
        const { data } = response.data;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading };
};
