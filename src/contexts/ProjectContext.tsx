"use client";
import { getJobsDetail } from "@/modules/jobs/services/inedx";
import useFetchDataProjectDetail from "@/modules/project/hook/useFetchDataProfileDetail";
import { getProjectDetail } from "@/modules/project/services";
import { get } from "http";
import { useParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}

interface IProjectContextTypes {
  dataProjectDetail: any;
  dataJobsDetail: any;
  isLoading: boolean;
  // getDataProjectDetail: (id: string) => void;
  // getDataJobsDetail: (id: string) => void;
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
  const [dataProjectDetail, setdataProjectDetail] = useState<any>(
    projectContextTypes.dataProjectDetail
  );

  const [dataJobsDetail, setDataJobsDetail] = useState<any>(
    projectContextTypes.dataJobsDetail
  );
  const [isLoading, setIsloading] = useState<boolean>(
    projectContextTypes.isLoading
  );

  const { id } = useParams();
  useEffect(() => {
    const getDataProjectDetail = async (id: string) => {
      try {
        if (dataJobsDetail) setDataJobsDetail({});
        setIsloading(true);
        const { data } = await getProjectDetail(id);
        setdataProjectDetail(data?.data);
      } catch (error) {
        console.error("error", error);
      } finally {
        setIsloading(false);
      }
    };
    if (id) getDataProjectDetail(id.toString());
  }, [id]);

  useEffect(() => {
    const getDataJobsDetail = async (id: string) => {
      try {
        if (dataProjectDetail) setdataProjectDetail({});
        setIsloading(true);
        const { data } = await getJobsDetail(id);
        setDataJobsDetail(data?.data);
      } catch (error) {
        console.error("error", error);
      } finally {
        setIsloading(false);
      }
    };
    if (id) getDataJobsDetail(id.toString());
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
