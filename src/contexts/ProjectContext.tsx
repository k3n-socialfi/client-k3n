"use client";
import useJobsDetail from "@/modules/jobs/hook/useJobsDetail";
import { useParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}

interface IProjectContextTypes {
  dataProjectDetail: any;
  dataJobsDetail: any;
  isLoading: boolean;
}

const projectContextTypes = {
  dataProjectDetail: {},
  dataJobsDetail: {},
  isLoading: true,
  getDataProjectDetail: () => undefined,
  getDataJobsDetail: () => undefined,
};

const projectContext = createContext<IProjectContextTypes>(projectContextTypes);
const ProjectContextProvider = ({ children }: IPropsProfileContextProvider) => {
  const { id } = useParams();
  const {
    dataProjectDetail,
    isLoading,
    dataJobsDetail,
    getDataProjectDetail,
    getDataJobsDetail,
  } = useJobsDetail();

  useEffect(() => {
    if (id) {
      getDataProjectDetail(id);
      getDataJobsDetail(id);
    }
  }, [id]);
  return (
    <projectContext.Provider
      value={{
        dataProjectDetail,
        isLoading,
        dataJobsDetail,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

const useProjectContext = () => {
  return useContext(projectContext);
};
export { ProjectContextProvider, useProjectContext };
