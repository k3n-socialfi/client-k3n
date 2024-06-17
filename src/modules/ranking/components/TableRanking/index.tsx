"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import Filter from "./Filter";
import { useListTabContext } from "@/contexts/ListTabContext";
import { SpinnerLoader } from "@/components/SpinnerLoader";
import { getKolsFilter } from "@/services";
import { IFilterKOL } from "@/interface/users.interface";
import Banner from "@/assets/images/Banner.png";
import UserTab from "./UserTab";
import Image from "next/image";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

interface IPropItemFillter {
  color?: string;
  arrowChange?: any;
}

interface IPCustomTableCell {
  background?: string;
  padding?: string;
  borderLeftColor?: string;
  isBorderLeft?: boolean;
}

export default function TableTopRanking(props: ITableTopRankingProps) {
  const { queryParams, updateQueryParams } = useListTabContext();
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  // Sort down: -1
  // Sort up: 1

  const fetchUsersList = useCallback(async () => {
    try {
      setIsLoading(true);
      const apiParams: IFilterKOL = {
        page,
        limit: queryParams.limit,
        top: queryParams.top,
        type: queryParams.type,
        tags: queryParams.tags,
        shillScoreSort: -1,
      };
      if (queryParams?.minFollower)
        apiParams.minFollower = queryParams.minFollower;
      if (queryParams?.maxFollower)
        apiParams.maxFollower = queryParams.maxFollower;
      if (queryParams?.minShillScore)
        apiParams.minShillScore = queryParams.minShillScore;
      if (queryParams?.maxShillScore)
        apiParams.maxShillScore = queryParams.maxShillScore;
      if (queryParams?.tags && queryParams?.tags.length > 0)
        apiParams.tags = queryParams.tags;
      if (queryParams?.mentionedProject)
        apiParams.mentionedProject = queryParams.mentionedProject;
      const res = await getKolsFilter(apiParams);
      if (res) {
        const { data } = res.data;
        if (data) {
          setUsersList(data.users);
          setTotalPage(data.totalPages);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [page, queryParams]);

  const handleChangePage = (e: any, value: any) => {
    setPage(value - 1);
  };

  useEffect(() => {
    setPage(0);
    fetchUsersList();
  }, [queryParams, fetchUsersList]);

  return (
    <Fragment>
      <Filter />
      {isLoading ? (
        // <div className="absolute flex items-center justify-center w-full h-screen">
        //   <Image
        //     src={Banner}
        //     alt="banner"
        //     className="flex absolute"
        //     fill
        //     style={{ objectFit: "cover" }}
        //   />
        //   <SpinnerLoader />
        // </div>
        <SkeletonTableTopRanking />
      ) : (
        <UserTab pageSize={10} users={usersList} />
      )}

      {/* <Pagination
        count={totalPage}
        page={page}
        onChange={handleChangePage}
        sx={{ color: "#FFF" }}
      /> */}
    </Fragment>
  );
}
