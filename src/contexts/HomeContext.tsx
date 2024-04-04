"use client";
import { IconTop1 } from "@/assets/icons";
import { initialHomeContextTypes } from "@/constant/dataInitialHomeContext";
import { IFeature } from "@/interface/feature.interface";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { IUsers } from "@/interface/users.interface";
import {
  getFeature,
  getFeaturedKols,
  getTrendingKols,
  getTrendingProjects,
} from "@/services";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsHomeContextProvider {
  children: React.ReactNode;
}
interface IHomeContextTypes {
  users: IUsers[];
  setUsers: React.Dispatch<React.SetStateAction<IUsers[]>>;
  trendingKols: ITrendingKols[];
  setTrendingKols: React.Dispatch<React.SetStateAction<ITrendingKols[]>>;
  trendingProjects: ITrendingProjects[];
  setTrendingProjects: React.Dispatch<
    React.SetStateAction<ITrendingProjects[]>
  >;
  feature: IFeature[];
  setFeature: React.Dispatch<React.SetStateAction<IFeature[]>>;
}

const HomeContextTypes = {
  users: [initialHomeContextTypes.users],
  setUsers: () => undefined,
  trendingKols: [initialHomeContextTypes.trendingKols],
  setTrendingKols: () => undefined,
  trendingProjects: [initialHomeContextTypes.trendingProjects],
  setTrendingProjects: () => undefined,
  feature: [initialHomeContextTypes.feature],
  setFeature: () => undefined,
};
const homeContext = createContext<IHomeContextTypes>(HomeContextTypes);
const AuthContextProvider = ({ children }: IPropsHomeContextProvider) => {
  const [users, setUsers] = useState<IUsers[]>(HomeContextTypes.users);
  const [trendingKols, setTrendingKols] = useState<ITrendingKols[]>(
    HomeContextTypes.trendingKols
  );
  const [trendingProjects, setTrendingProjects] = useState<ITrendingProjects[]>(
    HomeContextTypes.trendingProjects
  );
  const [feature, setFeature] = useState<IFeature[]>(HomeContextTypes.feature);
  useEffect(() => {
    const fetchData = async () => {
      try {
        Promise.all([
          getFeaturedKols(),
          getTrendingKols(),
          getTrendingProjects(),
          getFeature(),
        ]).then((result) => {
          setUsers(result[0].data?.data?.users);
          setTrendingKols(result[1]?.data?.data?.users);
          setTrendingProjects(result[2].data?.data);
          setFeature(result[3].data?.data?.users);
        });
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <homeContext.Provider
      value={{
        users,
        setUsers,
        trendingKols,
        setTrendingKols,
        trendingProjects,
        setTrendingProjects,
        feature,
        setFeature,
      }}
    >
      {children}
    </homeContext.Provider>
  );
};

const useHomeContext = () => {
  return useContext(homeContext);
};
export { AuthContextProvider, useHomeContext };
