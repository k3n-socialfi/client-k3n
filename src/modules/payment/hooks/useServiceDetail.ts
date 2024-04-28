import { TService } from "@/types/service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getServiceDetail } from "../services";

export default function useServiceDetail() {
  const [serviceDetail, setServiceDetail] = useState<TService>();
  const [isLoading, setIsLoading] = useState(false);

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
  useEffect(() => {
    fetchServiceDetail();
  }, [id]);

  return { serviceDetail, isLoading };
}