"use client";
import { getProjectDetail } from "@/modules/project/services";
import { useState } from "react";
import { getJobsDetail } from "../services/inedx";

export default function useJobsDetail() {
  const [dataProjectDetail, setdataProjectDetail] = useState<any>({});

  const [dataJobsDetail, setDataJobsDetail] = useState<any>({});
  const [isLoading, setIsloading] = useState<boolean>(true);

  const getDataProjectDetail = async (id: any) => {
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
  const getDataJobsDetail = async (id: any) => {
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
  return {
    dataJobsDetail,
    dataProjectDetail,
    isLoading,
    getDataProjectDetail,
    getDataJobsDetail,
  };
}
