import { useState, useEffect } from "react";
import { getMyProfile, getPostUser } from "@/services";
import { useAlert } from "@/contexts/AlertContext";

const useFetchDataMyProfile = () => {
  const [dataPersonal, setDataPersonal] = useState<any>();
  const [dataPosts, setDataPosts] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const { setAlertError } = useAlert();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data }: any = await getMyProfile();
      setDataPersonal(data?.data);
      if (data?.data?.username) {
        const arrayPost: any = await getPostUser(data?.data?.username);
        setDataPosts(arrayPost);
      }
    } catch (error) {
      setAlertError(`Fail`, `${error}`);
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
    dataPosts,
    isLoading,
    error,
    fetchData,
  };
};

export default useFetchDataMyProfile;
