import React, { useEffect, useState } from "react";
import { kolRanking } from "@/services/TableTopRanking";

type Props = {};

const useFetchDataTableTopRanking = (props: Props) => {
  const [dataRanking, setDataRanking] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetchDataRanking = async () => {
    setIsLoading(true);
    try {
      const { data } = await kolRanking();
      setDataRanking(data?.data);
    } catch (error) {
      setError(error);
      return { message: "Database Error: Get Data Kols Ranking Failed" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (dataRanking) return;
    fetchDataRanking();
  }, [dataRanking]);

  return {
    dataRanking,
    isLoading,
    error,
  };
};

export default useFetchDataTableTopRanking;
