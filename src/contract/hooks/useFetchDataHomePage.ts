import { useState, useEffect } from "react";
import {
  getFeatureKols,
  getFeatureProject,
  getFeaturedKols,
  getTrendingKols,
  getTrendingProjects,
} from "@/services";
import { initialHomeContextTypes } from "@/constant/dataInitialHomeContext";
import { IUsers } from "@/interface/users.interface";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { IFeatureKols } from "@/interface/featureKols.interface";
import { IFeatureProjects } from "@/interface/featureProjects.interface";

const useFetchDataHomePage = () => {
  const [users, setUsers] = useState<IUsers[]>([initialHomeContextTypes.users]);
  const [trendingKols, setTrendingKols] = useState<ITrendingKols[]>([
    initialHomeContextTypes.trendingKols,
  ]);
  const [trendingProjects, setTrendingProjects] = useState<ITrendingProjects[]>(
    [initialHomeContextTypes.trendingProjects]
  );
  const [featureKols, setFeatureKols] = useState<IFeatureKols[]>([
    initialHomeContextTypes.featureKols,
  ]);
  const [featureProjects, setFeatureProjects] = useState<IFeatureProjects[]>([
    initialHomeContextTypes.featureProjects,
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await Promise.all([
          getFeaturedKols(),
          getTrendingKols(),
          getTrendingProjects(),
          getFeatureKols(),
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
  };
};

export default useFetchDataHomePage;
