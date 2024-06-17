"use client";

import { Fragment, useState } from "react";

import Filter from "./Filter";
import { useQueryRanking } from "@/contexts/ListTabContext";
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
  const {
    data,
    isLoading,
    updateQueryParams,
    resetQueryParams,
    sortRankingList,
  } = useQueryRanking();
  const [page, setPage] = useState<number>(0);
  const pageSize = 10;

  const handleChangePage = (e: any, value: any) => {
    setPage(value - 1);
  };

  return (
    <Fragment>
      <Filter
        resetQueryParams={resetQueryParams}
        updateQueryParams={updateQueryParams}
      />
      <div className="py-4">
        {isLoading ? (
          <SkeletonTableTopRanking />
        ) : (
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
                              sortRankingList(item.value);
                            }}
                          >
                            <IconSort color={"#f0f0f0"} />
                          </motion.button>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                {data &&
                  data?.length > 0 &&
                  data.map((user, index) =>
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
                        ),
                  )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* <Pagination
        count={totalPage}
        page={page}
        onChange={handleChangePage}
        sx={{ color: "#FFF" }}
      /> */}
    </Fragment>
  );
}
