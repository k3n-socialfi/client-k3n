import { useState, useEffect } from "react";
import { getProjectDetail } from "../services";

const useFetchDataProjectDetail = (id: any) => {
  const [dataProjectDetail, setDataProjectDetail] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const fetchData = async (id: any) => {
    try {
      setIsLoading(true);
      const { data }: any = await getProjectDetail(id);
      setDataProjectDetail(data?.data);
    } catch (error) {
      return { message: "Database Error: Get Data Personal Failed" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return {
    dataProjectDetail,
    isLoading,
    error,
  };
};

export default useFetchDataProjectDetail;
