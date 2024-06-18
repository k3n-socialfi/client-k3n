import { motion } from "framer-motion";
// import defaultIcon from '../../assets/images/k3n.svg'
import TimeAgo from "./TimeAgo";
import svgs from "@/assets/svgs";
import { Tooltip } from "@mui/material";
import { IconFilter2 } from "@/assets/icons";
import { format } from "date-fns";
import Image from "next/image";
import {
  mapMentionedProjects,
  mapMentionedProjectsToken,
} from "./CustomerInfo";
import { tokens } from "@/data/ranking/filterData";

// import {Tooltip, Typography} from '@material-tailwind/react'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const PortfolioUser = ({ mentionedProjects, showAll }: any) => {
  const mappedProjects = mapMentionedProjects(
    mentionedProjects,
    tokens,
    svgs.svg_k3n,
  );

  const changeStyle = {
    positive: "text-green-500 text-xs",
    negative: "text-red-500 text-xs",
    neutral: "text-gray-500 text-xs",
  };

  const getChangeStyle = (pnl: any) => {
    if (pnl > 0) return changeStyle.positive;
    if (pnl < 0) return changeStyle.negative;
    return changeStyle.neutral;
  };

  const displayedProjects = showAll
    ? mentionedProjects
    : mentionedProjects?.slice(0, 5);

  return (
    <>
      {mentionedProjects && mentionedProjects.length !== 0 && (
        <div className="table-content w-full pt-8 py-12 flex flex-col gap-4">
          <h1 className="text-xl lg:text-3xl font-bold text-white font-kode">
            Mentioned Project
          </h1>
          <div className="">
            <table className="w-full ">
              <tbody>
                <tr className="items-center  bg-[#191D24] h-[71px] rounded-t rounded-md ">
                  {tableTitle.map((item, i) => (
                    <td className="p-5  " key={i}>
                      <div
                        className={`flex w-full items-center space-x-2.5 ${
                          i === 0 ? "w-[115px] justify-center" : "justify-start"
                        }  ${i === 7 && "w-[115px]"}`}
                      >
                        <span className="text-base font-base text-white truncate">
                          {item?.name}
                        </span>
                        {i === 7 && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <IconFilter2 />
                          </motion.button>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                {displayedProjects?.map((item: any, index: any) => (
                  <motion.tr
                    onClick={() => window.open(item?.firstTweet)}
                    key={item?.userId}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t-[0.25px] border-[#B4BACA] group hover:bg-darkblack-100 transition-all duration-300 text-white cursor-pointer"
                  >
                    <td className="px-2 lg:px-1 py-4 text-center  w-[60px] ">
                      {index + 1}
                    </td>
                    <td className="px-2 lg:px-1 py-4 flex items-center gap-2 text-center w-[250px]">
                      <div className="relative w-[30px] h-[30px] rounded-full flex-shrink-0">
                        <Image
                          unoptimized
                          src={item.image ?? svgs.svg_k3n}
                          alt="bg"
                          fill
                          sizes="100%"
                          objectFit="contain"
                          className="rounded-full"
                        />
                      </div>

                      <p className="pl-2 text-start truncate">
                        {item?.tokenName}
                      </p>
                    </td>
                    <td className="pl-12">
                      <div className="flex gap-2">
                        <div className="relative h-6 w-6 border bg-darkblack-600 overflow-hidden rounded-full flex-shrink-0">
                          <Image
                            unoptimized
                            src={mapMentionedProjectsToken(
                              item?.symbol,
                              tokens,
                              svgs.svg_k3n,
                            )}
                            alt={item?.symbol}
                            fill
                            sizes="100%"
                            objectFit="contain"
                            className="rounded-full"
                          />
                        </div>

                        <p>{item?.symbol}</p>
                      </div>
                    </td>
                    <td className="px-2 lg:px-1 py-4 text-center">
                      {format(item?.firstTweetDate, "MMM d, yyyy")}
                    </td>
                    <td className="px-2 lg:px-1 py-4 text-center">
                      <Tooltip
                        //  animate={{
                        //    mount: { scale: 1, y: 0 },
                        //    unmount: { scale: 0, y: 25 },
                        //  }}
                        title={item?.shillPrice}
                      >
                        <p className="cursor-pointer">
                          <span className="mr-1 text-primary">$</span>
                          {item?.shillPrice?.toFixed(5) ?? 0}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-2 lg:px-1 py-4 text-center">
                      <Tooltip
                        //  animate={{
                        //    mount: { scale: 1, y: 0 },
                        //    unmount: { scale: 0, y: 25 },
                        //  }}
                        title={item?.ath}
                      >
                        <p className="cursor-pointer">
                          <span className="mr-1 text-primary">$</span>
                          {item?.ath?.toFixed(5) ?? 0}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-2 lg:px-1 py-4 text-center">
                      <Tooltip
                        //  animate={{
                        //    mount: { scale: 1, y: 0 },
                        //    unmount: { scale: 0, y: 25 },
                        //  }}
                        title={item?.currentPrice}
                      >
                        <p className="cursor-pointer">
                          <span className="mr-1 text-primary">$</span>
                          {item?.currentPrice?.toFixed(5) ?? "NaN"}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-2 lg:px-1 py-4 truncate text-center">
                      <p className={`${getChangeStyle(item?.pnl)}`}>
                        {item?.pnl > 0
                          ? `▲ ${item?.pnl.toFixed(2) ?? 0}`
                          : item?.pnl < 0
                          ? `▼ ${Math.abs(item?.pnl?.toFixed(2) ?? 0)}`
                          : "="}
                      </p>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioUser;

const tableTitle = [
  {
    name: "No",
    icon: false,
  },
  {
    name: "Project",
    icon: false,
  },
  {
    name: "MentionedToken",
    icon: false,
  },
  {
    name: "Date",
    icon: false,
  },
  {
    name: "Price at mention",
    icon: false,
  },
  {
    name: "ATH after Mention",
    icon: false,
  },
  {
    name: "Current Price",
    icon: false,
  },
  {
    name: "Change(7D)",
    icon: false,
  },
  // {
  //   name: "Link",
  //   icon: false,
  // },
];
