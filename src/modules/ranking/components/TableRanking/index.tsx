"use client";

import { Fragment, useState } from "react";

import Filter from "./Filter";
import { useQueryRanking } from "@/contexts/ListTabContext";
import { motion } from "framer-motion";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";
import CustomerInfo from "./CustomerInfo";
import { IconSort } from "@/assets/icons";
import PaginationTable from "@/components/Pagination";
import SearchFilter from "./SearchFilter";

const tableTitle: any[] = [
  {
    name: "Rank",
    icon: false,
  },
  {
    name: "Name",
    icon: false,
  },
  {
    name: "Type",
    icon: false,
  },
  {
    name: "Location",
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

export default function TableTopRanking(props: ITableTopRankingProps) {
  const {
    data,
    totalPage,
    isLoading,
    updateQueryParams,
    resetQueryParams,
    sortRankingList,
  } = useQueryRanking();
  const [page, setPage] = useState<number>(0);
  const pageSize = 100;

  const handleChangePage = (value: number) => {
    setPage(value);
    updateQueryParams("page", value);
  };

  return (
    <Fragment>
      <SearchFilter
         title="Search username..."
          onUpdateValue={(value) => updateQueryParams("userName", value)}
          // reset={reset}
        />
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
                    <td className="px-6 py-2" key={i}>
                      <div className="flex w-full items-center gap-2 justify-center truncate">
                        <span className="text-base text-center font-medium text-primary truncate">
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
                            location={user?.location}
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
                            location={user?.location}
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
      <div className="flex items-center justify-center w-full py-4">
        <PaginationTable
          total={totalPage}
          page={page}
          onChange={(value) => handleChangePage(value)}
        />
      </div>
      {/* <Pagination
        color="primary"
        count={10}
        page={page}
        onChange={handleChangePage}
        sx={{ color: "#FFF" }}
      /> */}
    </Fragment>
  );
}
