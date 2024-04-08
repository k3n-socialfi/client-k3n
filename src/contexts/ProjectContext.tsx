"use client";
import useFetchDataProjectDetail from "@/modules/project/hook/useFetchDataProfileDetail";
import { getProjectDetail } from "@/modules/project/services";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}

interface IProjectContextTypes {
  dataProjectDetail: any;
  isLoading: boolean;
  getDataProjectDetail: (id: string) => void;
}

const projectContextTypes = {
  dataProjectDetail: {},
  isLoading: true,
  getDataProjectDetail: () => undefined,
};

const projectContext = createContext<IProjectContextTypes>(projectContextTypes);
const ProjectContextProvider = ({ children }: IPropsProfileContextProvider) => {
  const [dataProjectDetail, setdataProjectDetail] = useState<any>(
    projectContextTypes.dataProjectDetail
  );
  const [isLoading, setIsloading] = useState<boolean>(
    projectContextTypes.isLoading
  );

  const getDataProjectDetail = async (id: string) => {
    // try {
    //   const { dataProjectDetail, isLoading } = useFetchDataProjectDetail(id);
    //   setdataProjectDetail(dataProjectDetail);
    //   setIsloading(isLoading);
    // } catch (error) {
    //   console.error("error", error);
    // } finally {
    // }
    try {
      setIsloading(true);
      const { data } = await getProjectDetail(id);
      setdataProjectDetail(data?.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <projectContext.Provider
      value={{ dataProjectDetail, isLoading, getDataProjectDetail }}
    >
      {children}
    </projectContext.Provider>
  );
};

const useProjectContext = () => {
  return useContext(projectContext);
};
export { ProjectContextProvider, useProjectContext };
