"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import Filter from "./Filter";
import { useListTabContext } from "@/contexts/ListTabContext";
import { getKolsFilter } from "@/services";
import { IFilterKOL } from "@/interface/users.interface";
import { motion } from "framer-motion";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";
import CustomerInfo from "./CustomerInfo";
import { IconSort } from "@/assets/icons";

const tableTitle: any[] = [
  {
    name: "Rank",
    icon: false,
  },
  {
    name: "KOL",
    icon: false,
  },
  {
    name: "Type",
    icon: false,
  },
  {
    name: "Mentioned Project",
    icon: false,
  },
  {
    name: "#X Followers",
    icon: true,
    value: "xFollowerSort",
  },
  {
    name: "Shill Score",
    icon: true,
    value: "shillScoreSort",
  },
  {
    name: "7D%",
    icon: false,
  },
  {
    name: "Chains",
    icon: false,
  },
  {
    name: "Tags",
    icon: false,
  },
];

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
  const { queryParams } = useListTabContext();
  const [usersList, setUsersList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;
  const [shillScoreSortValue, setShillScoreSortValue] = useState<string>("-1");
  const [xFollowerSortValue, setXFollowerSort] = useState<string>("-1");
  // Sort down: -1
  // Sort up: 1

  const fetchUsersList = useCallback(
    async (key?: string, value?: any) => {
      try {
        setIsLoading(true);
        const apiParams: IFilterKOL = {
          page,
          limit: queryParams.limit,
          top: queryParams.top,
          type: queryParams.type,
          tags: queryParams.tags,
          [key ?? "shillScoreSort"]: Number(value ?? "-1"),
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
    },
    [page, queryParams],
  );

  const handleChangePage = (e: any, value: any) => {
    setPage(value - 1);
  };

  const handleUpdateParams = useCallback(
    (key: string) => {
      switch (key) {
        case "xFollowerSort":
          fetchUsersList(key, xFollowerSortValue === "-1" ? "1" : "-1");
          setXFollowerSort(xFollowerSortValue === "-1" ? "1" : "-1");
          return;
        case "shillScoreSort":
          fetchUsersList(key, shillScoreSortValue === "-1" ? "1" : "-1");
          setShillScoreSortValue(xFollowerSortValue === "-1" ? "1" : "-1");
          return;
        default:
          break;
      }
    },
    [fetchUsersList, shillScoreSortValue, xFollowerSortValue],
  );

  useEffect(() => {
    fetchUsersList();
  }, [fetchUsersList]);

  return (
    <Fragment>
      <Filter />
      {isLoading ? (
        <SkeletonTableTopRanking />
      ) : (
        // <UserTab pageSize={10} users={usersList} />
        <div className="table-content w-full overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-bgray-300 dark:border-darkblack-400 items-center">
                {tableTitle.map((item, i) => (
                  <td className="px-6 py-2 xl:px-0 " key={i}>
                    <div className="flex w-full items-center space-x-2 truncate">
                      <span className="text-base font-medium text-primary truncate text-start">
                        {item.name}
                      </span>
                      {item.icon && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            handleUpdateParams(item.value);
                          }}
                        >
                          <IconSort color={"#f0f0f0"} />
                        </motion.button>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
              {usersList.length > 0 &&
                usersList.map((user, index) =>
                  pageSize
                    ? index + 1 <= pageSize && (
                        <CustomerInfo
                          key={user?.userId}
                          rank={index}
                          previousRank={user?.twitterInfo.previousRank}
                          imgKol={user?.twitterInfo.avatar}
                          typeKol={user?.type}
                          nameKol={user?.twitterInfo?.fullName}
                          mentionedProject={user?.mentionedProjects}
                          followers={user?.twitterInfo.followers}
                          shillScore={user?.twitterInfo?.totalPoints}
                          change={
                            user?.twitterInfo?.previousRank +
                            Math.floor(Math.random() * 41) -
                            10
                          }
                          chain={user?.projectChain}
                          tags={user?.tags}
                          username={user?.username}
                        />
                      )
                    : index < 3 && (
                        <CustomerInfo
                          key={user?.userId}
                          rank={index}
                          previousRank={user?.twitterInfo.previousRank}
                          imgKol={user?.twitterInfo.avatar}
                          typeKol={user?.type}
                          nameKol={user?.socialProfiles?.username}
                          mentionedProject={user?.mentionedProjects}
                          followers={user?.twitterInfo.followers}
                          shillScore={user?.twitterInfo?.totalPoints}
                          change={
                            user?.twitterInfo?.previousRank +
                            Math.floor(Math.random() * 41) -
                            10
                          }
                          chain={user?.projectChain}
                          tags={user?.tags}
                          username={user?.username}
                        />
                      ),
                )}
            </tbody>
          </table>
        </div>
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
