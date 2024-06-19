"use client";
import React from "react";
import MyRanking from "../components/MyRanking";
import SkeletonMyRanking from "@/components/Skeleton/MyRanking";
import TableTopRanking from "../components/TableRanking";
import { useMyProfileContext } from "@/contexts/MyProfileContext";

export interface IRankingProps {}

export default function Ranking(props: IRankingProps) {
  const { dataPersonal, isLoading } = useMyProfileContext();

  return (
    <div className="flex flex-col gap-10 w-full p-6">
      <div className="flex flex-col w-full gap-4">
        <h1 className="font-bold text-white text-3xl">My Ranking</h1>
        {isLoading ? (
          <SkeletonMyRanking />
        ) : (
          <MyRanking dataPersonal={dataPersonal} />
        )}
      </div>
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold text-white text-3xl">Top 100 Ranking</h1>
        <TableTopRanking />
      </div>
    </div>
  );
}
