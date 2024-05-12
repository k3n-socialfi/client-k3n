import { TService } from "@/types/service";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  apiCompleteOfferr,
  apiCreateOffer,
  getServiceDetail,
} from "../services";

export default function useServiceDetail() {
  const [serviceDetail, setServiceDetail] = useState<TService>();
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const path = usePathname();
  const { id } = useParams();

  const fetchServiceDetail = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const { data } = await getServiceDetail(id.toString());
      setServiceDetail(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const createOffer = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      await apiCreateOffer(id.toString());
      push(path + `?step_payment=3`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const completeOffer = async (id: string) => {
    setIsLoading(true);
    try {
      await apiCompleteOfferr(id);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetail();
  }, [id]);

  return { serviceDetail, createOffer, completeOffer, isLoading };
}
