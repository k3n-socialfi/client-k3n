import { useState, useEffect, useCallback } from "react";
import {
  IQueryParams,
  getFeatureKolsRanking,
  getFeatureProject,
  getFeaturedKols,
  getKolsFilter,
  getTrendingKols,
  getTrendingProjects,
} from "@/services";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { IFeatureProjects } from "@/interface/featureProjects.interface";

const useFetchDataHomePage = () => {
  const [users, setUsers] = useState<IUserKOL[]>([]);
  const [trendingKols, setTrendingKols] = useState<ITrendingKols[]>([]);
  const [trendingProjects, setTrendingProjects] = useState<ITrendingProjects[]>(
    [],
  );
  const [featureKols, setFeatureKols] = useState<IUserKOL[]>([]);

  const [kols, setKols] = useState<IUserKOL[]>([]);
  const [totalItemKols, setTotalItemKols] = useState<number>(0);

  const [featureProjects, setFeatureProjects] = useState<IFeatureProjects[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

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
      setKols(data.data.users);
      setTotalItemKols(data?.data?.totalItems ?? 0);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await Promise.all([
        getFeaturedKols(),
        getTrendingKols(),
        getTrendingProjects(),
        getFeatureKolsRanking(),
        getFeatureProject(),
      ]);

      setUsers(result[0]?.data?.data?.users);
      setTrendingKols(result[1]?.data?.data?.users);
      setTrendingProjects(result[2]?.data?.data);
      setFeatureKols(result[3]?.data?.data?.users);
      setFeatureProjects(result[4]?.data?.data?.jobs);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchKolsFilter();
    fetchData();
  }, [fetchKolsFilter, fetchData]);

  return {
    users,
    trendingKols,
    trendingProjects,
    featureKols,
    featureProjects,
    isLoading,
    error,
    kols,
    totalItemKols,
  };
};

export default useFetchDataHomePage;
