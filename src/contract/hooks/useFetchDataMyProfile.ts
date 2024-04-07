import { useState, useEffect } from "react";
import { getMyProfile } from "@/services";

const useFetchDataMyProfile = () => {
  const [dataPersonal, setDataPersonal] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data }: any = await getMyProfile();
      setDataPersonal(data?.data);
    } catch (error) {
      return { message: "Database Error: Get Data Personal Failed" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (dataPersonal) return;
    const token = localStorage.getItem("accessToken");
    if (token) fetchData();
  }, [dataPersonal]);

  return {
    dataPersonal,
    isLoading,
    error,
  };
};

export default useFetchDataMyProfile;
