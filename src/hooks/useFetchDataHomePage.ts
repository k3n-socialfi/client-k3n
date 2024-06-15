import { useState, useEffect } from "react";
import {
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
import { useSearchParams } from "next/navigation";
import { IFilterKOL } from "@/interface/users.interface";

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

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const verification = searchParams.get("kyc");
  const lowerLimit = searchParams.get("lowerLimit");
  const upperLimit = searchParams.get("upperLimit");
  const tags = searchParams.get("tags");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  useEffect(() => {
    const fetchKolsFilter = async () => {
      try {
        const params: IFilterKOL = {
          type: type ? type : undefined,
          verification: verification
            ? verification === "true"
              ? true
              : false
            : undefined,
          limit: lowerLimit ? +lowerLimit : 10,
          top: upperLimit ? +upperLimit : 100,
          tags: tags ? tags.split(",") : undefined,
          page: page ?? 0,
        };
        const { data } = await getKolsFilter(params);
        setKols(data.data.users);
        setTotalItemKols(data?.data?.totalItems ?? 0);
      } catch (err) {
        console.error(err);
      }
    };
    fetchKolsFilter();
  }, [type, verification, lowerLimit, upperLimit, tags, limit, page]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
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
    };

    fetchData();
  }, []);

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
