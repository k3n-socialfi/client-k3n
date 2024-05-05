import { getListMyOffer } from "@/services";
import { TAcceptOffer } from "@/types/offer";
import { useEffect, useState } from "react";
import { apiAcceptOffer } from "../services";

export default function useMyOffer() {
  const [listOffer, setListOffer] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getDataListOffer = async () => {
    const { data } = await getListMyOffer();
    setListOffer(data?.data);
  };

  useEffect(() => {
    getDataListOffer();
  }, []);

  const acceptOffer = async (dt: TAcceptOffer) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await apiAcceptOffer(dt);
      getDataListOffer();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return { listOffer, acceptOffer, isLoading };
}
