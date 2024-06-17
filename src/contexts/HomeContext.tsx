"use client";
import useFetchDataHomePage from "@/hooks/useFetchDataHomePage";
import { IFeatureProjects } from "@/interface/featureProjects.interface";
import { ITrendingKols } from "@/interface/trendingKols.interface";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";

import React, { createContext, useContext } from "react";

interface IPropsHomeContextProvider {
  children: React.ReactNode;
}
interface IHomeContextTypes {
  users: IUserKOL[];
  trendingKols: ITrendingKols[];
  trendingProjects: ITrendingProjects[];
  featureKols: IUserKOL[];
  kols: IUserKOL[];
  featureProjects: IFeatureProjects[];
  isLoading: boolean;
  totalItemKols: number;
  selectedRange: string;
  handleRangeChange:(selectedRange: string) => void
}

const HomeContextTypes = {
  users: [],
  trendingKols: [],
  trendingProjects: [],
  featureKols: [],
  featureProjects: [],
  kols: [],
  isLoading: false,
  totalItemKols: 0,
  selectedRange: "1D",
  handleRangeChange:() => undefined,
};

const homeContext = createContext<IHomeContextTypes>(HomeContextTypes);
const AuthContextProvider = ({ children }: IPropsHomeContextProvider) => {
  const {
    users,
    featureKols,
    featureProjects,
    trendingKols,
    trendingProjects,
    isLoading,
    kols,
    totalItemKols,
 
  } = useFetchDataHomePage();

  const [selectedRange, setSelectedRange] = React.useState("1D");

  const handleRangeChange = (selectedRange: string) => {
    setSelectedRange(selectedRange);
  };

  return (
    <homeContext.Provider
      value={{
        users,
        trendingKols,
        trendingProjects,
        featureKols,
        featureProjects,
        isLoading,
        kols,
        totalItemKols,
        selectedRange,
        handleRangeChange
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
