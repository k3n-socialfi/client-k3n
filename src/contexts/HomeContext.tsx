"use client";
import { initialHomeContextTypes } from "@/constant/dataInitialHomeContext";
import useFetchDataHomePage from "@/contract/hooks/useFetchDataHomePage";
import { IFeatureKols } from "@/interface/featureKols.interface";
import { IFeatureProjects } from "@/interface/featureProjects.interface";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { IUsers } from "@/interface/users.interface";

import React, { createContext, useContext } from "react";

interface IPropsHomeContextProvider {
  children: React.ReactNode;
}
interface IHomeContextTypes {
  users: IUsers[];
  trendingKols: ITrendingKols[];
  trendingProjects: ITrendingProjects[];

  featureKols: IFeatureKols[];
  featureProjects: IFeatureProjects[];
}

const HomeContextTypes = {
  users: [initialHomeContextTypes.users],
  trendingKols: [initialHomeContextTypes.trendingKols],
  trendingProjects: [initialHomeContextTypes.trendingProjects],
  featureKols: [initialHomeContextTypes.featureKols],
  featureProjects: [initialHomeContextTypes.featureProjects],
};
const homeContext = createContext<IHomeContextTypes>(HomeContextTypes);
const AuthContextProvider = ({ children }: IPropsHomeContextProvider) => {
  const {
    users,
    featureKols,
    featureProjects,
    trendingKols,
    trendingProjects,
  } = useFetchDataHomePage();
  return (
    <homeContext.Provider
      value={{
        users,
        trendingKols,
        trendingProjects,
        featureKols,
        featureProjects,
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
