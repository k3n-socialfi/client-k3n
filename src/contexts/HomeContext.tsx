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
  trendingKols: ITrendingKols[];
  trendingProjects: ITrendingProjects[];
  featureKols: IUserKOL[];
  handleRangeChange: (selectedRange: string) => void;
}

const HomeContextTypes = {
  trendingKols: [],
  trendingProjects: [],
  featureKols: [],
  handleRangeChange: () => undefined,
};

const homeContext = createContext<IHomeContextTypes>(HomeContextTypes);
const AuthContextProvider = ({ children }: IPropsHomeContextProvider) => {
  const { featureKols, trendingKols, trendingProjects } =
    useFetchDataHomePage();

  const [selectedRange, setSelectedRange] = React.useState("1D");

  const handleRangeChange = (selectedRange: string) => {
    setSelectedRange(selectedRange);
  };

  return (
    <homeContext.Provider
      value={{
        trendingKols,
        trendingProjects,
        featureKols,
        handleRangeChange,
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
