"use client";
import { getProjectDetail } from "@/modules/project/services";
import { useEffect, useState } from "react";
import { getJobsDetail } from "../services/inedx";

export default function useJobsDetail(id: any) {
  const [dataProjectDetail, setdataProjectDetail] = useState<any>({});

  const [dataJobsDetail, setDataJobsDetail] = useState<any>({});
  const [isLoading, setIsloading] = useState<boolean>(true);
  useEffect(() => {
    const getDataProjectDetail = async () => {
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

    const getDataJobsDetail = async () => {
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
    if (id) {
      getDataProjectDetail();
      getDataJobsDetail();
    }
  }, [id]);
  return { dataJobsDetail, dataProjectDetail, isLoading };
}
