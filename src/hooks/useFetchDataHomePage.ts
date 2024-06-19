import { useState, useEffect, useCallback } from "react";
import {
  getFeaturedKols,
  getFeatureKolsRanking,
  getTrendingKols,
  getTrendingProjects,
} from "@/services";
import {
  ITrendingKols,
  ITrendingKolsQueryParams,
} from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";

const useFetchDataHomePage = () => {
  // Trending KOLs
  const [trendingKols, setTrendingKols] = useState<ITrendingKols[]>([]);
  const [isTrendingKolsLoading, setIsTrendingKolsLoading] =
    useState<boolean>(false);
  const [trendingKolsQueryParams, setTrendingKolsQueryParams] =
    useState<ITrendingKolsQueryParams>({
      page: 0,
      limit: 10,
      type: null,
      date: null,
      change1D: -1,
      change7D: null,
      change30D: null,
    });

  const fetchTrendingKols = useCallback(async () => {
    try {
      setIsTrendingKolsLoading(true);
      const response = await getTrendingKols(trendingKolsQueryParams);
      if (response) {
        const { data } = response.data;
        if (data) {
          setTrendingKols(data.users);
        }
      }
    } catch (error) {
      throw new Error("Fetch trending kols fail");
    } finally {
      setIsTrendingKolsLoading(false);
    }
  }, [trendingKolsQueryParams]);

  const updateTrendingKolsQuery = useCallback(
    (key: string, value?: any) => {
      switch (key) {
        case "1D":
          setTrendingKolsQueryParams({
            ...trendingKolsQueryParams,
            change1D: -1,
            change7D: null,
            change30D: null,
          });
          break;
        case "7D":
          setTrendingKolsQueryParams({
            ...trendingKolsQueryParams,
            change1D: null,
            change7D: -1,
            change30D: null,
          });
          break;
        case "30D":
          setTrendingKolsQueryParams({
            ...trendingKolsQueryParams,
            change1D: null,
            change7D: null,
            change30D: -1,
          });
          break;
        default:
          setTrendingKolsQueryParams({
            ...trendingKolsQueryParams,
            [key]: value,
          });
          break;
      }
    },
    [trendingKolsQueryParams],
  );

  // Trending projects
  const [trendingProjects, setTrendingProjects] = useState<ITrendingProjects[]>(
    [],
  );
  const [isTrendingProjectsLoading, setIsTrendingProjectsLoading] =
    useState<boolean>(false);

  const fetchTrendingProjects = useCallback(async () => {
    try {
      setIsTrendingProjectsLoading(true);
      const response = await getTrendingProjects();
      if (response) {
        const { data } = response.data;
        if (data) {
          setTrendingProjects(data);
        }
      }
    } catch (error) {
      throw new Error("Fetch trending projects fail");
    } finally {
      setIsTrendingProjectsLoading(false);
    }
  }, []);

  // Feature KOLs
  const [featureKols, setFeatureKols] = useState<IUserKOL[]>([]);
  const [isFeatureKolsLoading, setIsFeatureKolsLoading] =
    useState<boolean>(false);

  const fetchFeatureKols = useCallback(async () => {
    try {
      setIsFeatureKolsLoading(true);
      const response = await getFeaturedKols();
      if (response) {
        const { data } = response.data;
        if (data) {
          setFeatureKols(data.users);
        }
      }
    } catch (error) {
      throw new Error("Fetch trending kols fail");
    } finally {
      setIsFeatureKolsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrendingProjects();
    fetchTrendingKols();
    fetchFeatureKols();
  }, [fetchTrendingProjects, fetchTrendingKols, fetchFeatureKols]);

  return {
    trendingKols,
    trendingProjects,
    featureKols,
    isTrendingKolsLoading,
    isFeatureKolsLoading,
    isTrendingProjectsLoading,
    updateTrendingKolsQuery,
  };
};

export default useFetchDataHomePage;
