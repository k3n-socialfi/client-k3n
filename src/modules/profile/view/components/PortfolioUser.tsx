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
            <table className="w-full">
              <tbody>
                <tr className="bg-[#191D24] h-[71px] rounded-t rounded-md ">
                  {tableTitle.map((item, i) => (
                    <td className="p-5" key={i}>
                      <p className="text-base font-base text-white truncate">
                        {item?.name}
                      </p>
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
                    <td className="px-2 lg:px-1 py-4 text-center w-max ">
                      {index + 1}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={item.image ?? svgs.svg_k3n}
                          alt="bg"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />

                        <p className="text-start truncate">{item?.tokenName}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={mapMentionedProjectsToken(
                            item?.symbol,
                            tokens,
                            svgs.svg_k3n,
                          )}
                          alt={item?.symbol}
                          height={24}
                          width={24}
                          className="border bg-darkblack-600 rounded-full aspect-square"
                        />

                        <p>{item?.symbol}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      {format(item?.firstTweetDate, "MMM d, yyyy")}
                    </td>
                    <td className="px-5 py-4">
                      <Tooltip title={item?.shillPrice}>
                        <p className="cursor-pointer">
                          <span className="mr-1 text-primary">$</span>
                          {item?.shillPrice?.toFixed(5) ?? 0}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-5 py-4">
                      <Tooltip title={item?.ath}>
                        <p>
                          <span className="mr-1 text-primary">$</span>
                          {item?.ath?.toFixed(5) ?? 0}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-5 py-4">
                      <Tooltip title={item?.currentPrice}>
                        <p className="cursor-pointer">
                          <span className="mr-1 text-primary">$</span>
                          {item?.currentPrice?.toFixed(5) ?? "NaN"}
                        </p>
                      </Tooltip>
                    </td>
                    <td className="px-5 py-4">
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
