import { useState, useEffect } from "react";
import { getAllServices, getPopularServices } from "../services";

const useFetchDataServices = () => {
  const [dataServices, setDataServices] = useState<any>();
  const [dataPopularServices, setDataPopularServices] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await Promise.all([
        getAllServices(),
        getPopularServices(),
      ]);
      setDataServices(result[0]?.data?.data?.jobs);
      setDataPopularServices(result[1]?.data?.data);
    } catch (error) {
      return { message: "Database Error: Get Data Personal Failed" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    dataServices,
    dataPopularServices,
    isLoading,
    error,
  };
};

export default useFetchDataServices;
