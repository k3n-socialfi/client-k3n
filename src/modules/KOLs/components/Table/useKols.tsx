import { getKolsFilter, IQueryParams } from "@/services";
import { useCallback, useEffect, useState } from "react";

export default function useKols() {
  const [data, setData] = useState<IUserKOL[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const fetchKolsFilter = useCallback(async () => {
    const queryParamsDefault: IQueryParams = {
      page: 0,
      limit: 10,
      top: 100,
      type: null,
      verification: false,
      tags: [],
      review: null,
      minFollower: 0,
      maxFollower: undefined,
      minShillScore: 0,
      maxShillScore: undefined,
      mentionedProject: null,
      shillScoreSort: -1,
      xFollowerSort: null,
    };
    try {
      setIsLoading(true);
      const { data } = await getKolsFilter(queryParamsDefault);
      setData(data.data.users);
      setTotal(data?.data?.totalItems ?? 0);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchKolsFilter();
  }, [fetchKolsFilter]);

  return { data, isLoading, total };
}
