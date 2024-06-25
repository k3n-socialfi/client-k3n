import { IconPointProfile, IconTop1, IconTop2, IconTop3 } from "@/assets/icons";
import { chains, tokens } from "@/data/ranking/filterData";
import { formatNumberToK, numberWithCommas } from "@/utils";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import defaultIcon from "@/assets/svgs/common/k3n.svg";
import { useCallback, useMemo } from "react";
import TagList from "@/components/TagList";

export const mapMentionedProjects = (
  mentionedProjects: any,
  tokensArr: any,
  defaultIcon: any,
) => {
  const uniqueProjects = new Set();

  return mentionedProjects
    ?.filter((project: any) => {
      const isDuplicate = uniqueProjects.has(project.symbol);
      uniqueProjects.add(project.symbol);
      return !isDuplicate;
    })
    .map((project: any) => {
      const token = tokensArr.find(
        (token: any) => token.title === project.symbol,
      );
      return {
        ...project,
        icon: token ? token.icon : defaultIcon,
      };
    });
};

export const mapMentionedChains = (
  mentionedProjects: any,
  chainArr: any,
  defaultIcon: any,
) => {
  const uniqueChains = new Set();
  return mentionedProjects
    ?.filter((project: any) => {
      const isDuplicate = uniqueChains.has(project.chain);
      uniqueChains.add(project.chain);
      return !isDuplicate;
    })
    .map((project: any) => {
      const token = chainArr.find(
        (chain: any) => chain.title === project.chain,
      );
      return {
        ...project,
        icon: token ? token.icon : defaultIcon,
      };
    });
};

function CustomerInfo({
  rank,
  imgKol,
  typeKol,
  location,
  nameKol,
  mentionedProject,
  followers,
  shillScore,
  change,
  chain,
  tags,
  previousRank,
  username,
}: {
  rank: number;
  imgKol: string | null;
  typeKol: string | null;
  location: string | null;
  nameKol: string | null;
  mentionedProject: any[];
  followers: number;
  shillScore: number;
  change: number;
  chain: string | null;
  tags: string[];
  previousRank: number;
  username: string | null;
}) {
  const rankChange = previousRank - rank;

  const getChangeStyle = useCallback((change: any) => {
    const rankChangeStyle = {
      positive: "text-green-500 text-xs",
      negative: "text-red-500 text-xs",
      neutral: "text-gray-500 text-xs",
    };
    if (change > 0) return rankChangeStyle.positive;
    if (change < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  }, []);

  const getRankChangeStyle = useMemo(() => {
    const rankChangeStyle = {
      positive: "text-green-500 text-xs",
      negative: "text-red-500 text-xs",
      neutral: "text-gray-500 text-xs",
    };
    if (rankChange > 0) return rankChangeStyle.positive;
    if (rankChange < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  }, [rankChange]);

  const mappedProjects = mapMentionedProjects(
    mentionedProject,
    tokens,
    defaultIcon,
  );

  const mappedChains = mapMentionedChains(
    mentionedProject,
    chains,
    defaultIcon,
  );

  return (
    <motion.tr
      transition={{
        duration: 0.5,
        delay: rank * 0.1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      className={
        rank === 0
          ? "bg-darkblack-200/50 group hover:bg-darkblack-100 transition-all duration-300 text-white"
          : rank === 1
          ? "bg-darkblack-300/50 group hover:bg-darkblack-100 transition-all duration-300 text-white"
          : rank === 2
          ? "bg-darkblack-400/50 group hover:bg-darkblack-100 transition-all duration-300 text-white"
          : rank % 2 === 0
          ? "bg-darkblack-500/50 group hover:bg-darkblack-100 transition-all duration-300 text-white"
          : "group hover:bg-darkblack-100 transition-all duration-300 text-white"
      }
    >
      <td className="px-6 py-5 xl:px-2">
        <div className="flex justify-center items-center gap-2">
          <p className={`${getRankChangeStyle}`}>
            {rankChange > 0
              ? `▲ ${rankChange}`
              : rankChange < 0
              ? `▼ ${Math.abs(rankChange)}`
              : "="}
          </p>
          {rank === 0 && <IconTop1 />}
          {rank === 1 && <IconTop2 />}
          {rank === 2 && <IconTop3 />}
          {rank !== 0 && rank !== 1 && rank !== 2 && rank + 1}
        </div>
      </td>
      <td className="px-6 py-5 ">
        <div className="flex justify-center w-full items-center space-x-2.5">
          <div className="flex flex-col items-center w-[100px] gap-2">
            <Link
              href={`/profile/${username}`}
              className="relative transition-all duration-300 h-10 w-10 group-hover:w-14 group-hover:h-14 overflow-hidden rounded-full "
            >
              <Image
                src={imgKol ?? defaultIcon}
                alt="avatar"
                fill
                objectFit="cover"
              />
            </Link>
            <p className="text-base font-semibold text-white text-center truncate w-full overflow-hidden">
              {nameKol}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5 ">
        <div
          className={`bg-darkblack-500 w-max mx-auto hover:bg-darkblack-300 shadow-md shadow-gray-100/20 text-sm ${
            typeKol === "Experts"
              ? "text-primary"
              : typeKol === "KOL"
              ? "text-green-500"
              : typeKol === "Celebrities"
              ? "text-secondary"
              : typeKol === "Threador"
              ? "text-portage"
              : typeKol === "Caller"
              ? "text-yellow-400"
              : "text-white"
          } font-medium rounded-lg py-1 px-3`}
        >
          {typeKol}
        </div>
      </td>
      <td className="px-6 py-5 ">
        
        <p>
        {location}

        </p>
        
      </td>
      <td className="px-6 py-5 w-[200px] ">
        <Tooltip
          placement="right"
          title={
            <div className="bg-darkblack-500 p-4 border border-gray-200/20">
              {mappedProjects?.map((project: any, index: any) => (
                <div className="flex space-x-2" key={index}>
                  <div className="h-6 w-6 -m-1 bg-darkblack-600 border overflow-hidden rounded-full flex items-center justify-center">
                    <Image
                      src={project.icon}
                      alt={project.symbol}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h1>
                    {project.tokenName} ({project.symbol})
                  </h1>
                </div>
              ))}
            </div>
          }
        >
          <div className="text-base font-medium text-bgray-900 dark:text-white flex">
            {mappedProjects?.slice(0, 5).map((item: any) => (
              <Image
                key={item.symbol}
                src={item.icon}
                alt={item.symbol}
                width={24}
                height={24}
                className="p-1 aspect-square -m-1 bg-darkblack-600 border overflow-hidden rounded-full flex items-center justify-center"
              />
            ))}
            {mappedProjects?.length >= 5 && (
              <div className="h-6 w-6 -m-1 border overflow-hidden rounded-full bg-white text-primary items-center justify-center text-center pt-[3px]">
                <p className="text-[10px] font-bold">
                  {mappedProjects.length - 5}+
                </p>
              </div>
            )}
          </div>
        </Tooltip>
      </td>
      <td className="px-6 py-5 min-w-[180px]">
        <p className="text-base font-medium text-bgray-900 text-center dark:text-white">
          {formatNumberToK(followers).toLocaleString()}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5">
        <p className="text-base font-semibold text-primary group-hover:text-white flex items-center gap-1">
          <IconPointProfile />
          {numberWithCommas(shillScore)}
        </p>
      </td>
      <td className="px-6 py-5 text-center">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <p className={`${getChangeStyle(change)} truncate`}>
            {change > 0
              ? `▲ ${change.toFixed(2) ?? 0} %`
              : change < 0
              ? `▼ ${Math.abs(Number(change?.toFixed(2) ?? 0))} %`
              : "="}
          </p>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5">
        <Tooltip
          placement="right"
          title={
            <div className="bg-darkblack-500 p-4 border border-gray-200/20">
              {mappedChains?.map((project: any, index: any) => (
                <div className="flex space-x-2" key={index}>
                  <div className="h-6 w-6 -m-1 bg-darkblack-600 border overflow-hidden rounded-full flex items-center justify-center">
                    <Image
                      src={project.icon}
                      alt={project.chain}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h1>{project.chain}</h1>
                </div>
              ))}
            </div>
          }
        >
          <div className="text-base font-semibold text-white flex">
            {mappedChains.map((item: any) => (
              <div
                className="h-6 w-6 -m-1 bg-darkblack-600 border overflow-hidden rounded-full flex items-center justify-center"
                key={item.symbol}
              >
                <Image
                  src={item.icon}
                  alt={item.symbol}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </Tooltip>
      </td>
      <td className="px-6 py-5 ">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <TagList tags={tags} length={3} />
        </p>
      </td>
    </motion.tr>
  );
}

export default CustomerInfo;
