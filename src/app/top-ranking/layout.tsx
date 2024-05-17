import React from "react";
import { TableRankingContextProvider } from "@/contexts/TableTopRanking";
import HomeProvider from "@/layout/HomeProvider";

const LayoutTopRanking = ({ children }: IChildren) => {
  return (
    <HomeProvider>
      <TableRankingContextProvider>{children}</TableRankingContextProvider>;
    </HomeProvider>
  );
};

export default LayoutTopRanking;
