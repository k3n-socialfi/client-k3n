"use client";

import useFetchDataTableTopRanking from "@/hooks/useFetchDataTableTopRanking";
import { createContext, useContext } from "react";

interface IPropsTableRakingContextProvider {
  children: React.ReactNode;
}

interface ITableRankingContextTypes {
  dataRanking: any;
  isLoading: boolean;
  error?: any;
}

const TableRankingContextTypes = {
  dataRanking: [{}],
  isLoading: true,
  error: "",
};

const tableRankingContext = createContext<ITableRankingContextTypes>(
  TableRankingContextTypes,
);

const TableRankingContextProvider = ({
  children,
}: IPropsTableRakingContextProvider) => {
  const { dataRanking, isLoading, error } = useFetchDataTableTopRanking({});

  return (
    <tableRankingContext.Provider value={{ dataRanking, isLoading, error }}>
      {children}
    </tableRankingContext.Provider>
  );
};

const useTableRankingContext = () => {
  return useContext(tableRankingContext);
};
export { TableRankingContextProvider, useTableRankingContext };
