import { useState, useEffect } from "react";
import {
  getFeatureKolsRanking,
  getFeatureProject,
  getFeaturedKols,
  getKolsFilter,
  getTrendingKols,
  getTrendingProjects,
} from "@/services";
import { initialHomeContextTypes } from "@/constant/dataInitialHomeContext";
import { IUsers } from "@/interface/users.interface";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { IFeatureKols } from "@/interface/featureKols.interface";
import { IFeatureProjects } from "@/interface/featureProjects.interface";
import { useSearchParams } from "next/navigation";

const useFetchDataHomePage = () => {
  const [users, setUsers] = useState<IUsers[]>([initialHomeContextTypes.users]);
  const [trendingKols, setTrendingKols] = useState<ITrendingKols[]>([
    initialHomeContextTypes.trendingKols,
  ]);
  const [trendingProjects, setTrendingProjects] = useState<ITrendingProjects[]>(
    [initialHomeContextTypes.trendingProjects],
  );
  const [featureKols, setFeatureKols] = useState<IFeatureKols[]>([
    initialHomeContextTypes.featureKols,
  ]);

  const [kols, setKols] = useState<IFeatureKols[]>([]);

  const [featureProjects, setFeatureProjects] = useState<IFeatureProjects[]>([
    initialHomeContextTypes.featureProjects,
  ]);

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
        const params = {
          type: type ? type : undefined,
          verification: verification
            ? verification === "true"
              ? true
              : false
            : undefined,
          lowerLimit: lowerLimit ? +lowerLimit : undefined,
          upperLimit: upperLimit ? +upperLimit : undefined,
          tags: tags ? tags.split(",") : undefined,
          page: page ? page : 0,
          limit: limit ? limit : 10,
          top: 100,
        };
        const { data } = await getKolsFilter(params);
        setKols(data.data.users);
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
  };
};

export default useFetchDataHomePage;
