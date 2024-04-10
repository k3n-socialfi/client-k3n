"use client";
import { getProjectDetail } from "@/modules/project/services";
import { useState } from "react";
import { getJobsDetail } from "../services/inedx";
import {
  IJobsDetail,
  IProjectDetail,
} from "@/interface/projectDetail.interface";
import { dataInitalProjectDetail } from "@/constant/dataInitalProjectDetail";

export default function useJobsDetail() {
  const [dataProjectDetail, setdataProjectDetail] = useState<IProjectDetail>(
    dataInitalProjectDetail.projectDetail
  );

  const [dataJobsDetail, setDataJobsDetail] = useState<IJobsDetail>(
    dataInitalProjectDetail.jobsDetail
  );
  const [isLoading, setIsloading] = useState<boolean>(true);

  const getDataProjectDetail = async (id: any) => {
    try {
      if (dataJobsDetail) setDataJobsDetail(dataInitalProjectDetail.jobsDetail);
      setIsloading(true);
      const { data } = await getProjectDetail(id);
      setdataProjectDetail(data?.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsloading(false);
    }
  };
  const getDataJobsDetail = async (id: any) => {
    try {
      if (dataProjectDetail)
        setdataProjectDetail(dataInitalProjectDetail.projectDetail);
      setIsloading(true);
      const { data } = await getJobsDetail(id);
      setDataJobsDetail(data?.data);
      console.log("datajobsdetail", data?.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsloading(false);
    }
  };
  return {
    dataJobsDetail,
    dataProjectDetail,
    isLoading,
    getDataProjectDetail,
    getDataJobsDetail,
  };
}
