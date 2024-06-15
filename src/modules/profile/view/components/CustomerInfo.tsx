import ProtoTypes from "prop-types";

import {motion} from 'framer-motion'

import Link from "next/link";
import { PointIcon, Top1Icon, Top2Icon, Top3Icon } from '@/assets/icons';
import TagList from '@/components/TagList';
import { Tooltip } from "@mui/material";
import { capitalizeFirstLetter, numberWithCommas } from "@/utils";



export const mapMentionedProjects = (mentionedProjects:any, tokensArr:any, defaultIcon:any) => {
  const uniqueProjects = new Set();

  return mentionedProjects?.filter((project:any) => {
    const isDuplicate = uniqueProjects.has(project.symbol);
    uniqueProjects.add(project.symbol);
    return !isDuplicate;
  }) .map((project:any) => {
    const token = tokensArr.find((token:any) => token.name === project.symbol);
    return {
      ...project,
      icon: token ? token.icon : defaultIcon,
    };
  });
};

export const mapMentionedChains = (mentionedProjects:any, chainArr:any, defaultIcon:any) => {
  const uniqueChains = new Set();
  return mentionedProjects?.filter((project:any) => {
    const isDuplicate = uniqueChains.has(project.chain);
    uniqueChains.add(project.chain);
    return !isDuplicate;
  }) .map((project:any) => {
    const token = chainArr.find((chain:any) => chain.name === project.chain);
    return {
      ...project,
      icon: token ? token.icon : defaultIcon,
    };
  });
};

function CustomerInfo({ rank, imgKol, typeKol, nameKol, mentionedProject, followers, shillScore, change, chain, tags, previousRank, username }:any) {

  const rankChange = previousRank - rank;

  const getChangeStyle = (change:any) => {
    if (change > 0) return rankChangeStyle.positive;
    if (change < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  };

  const rankChangeStyle = {
    positive: "text-green-500 text-xs", 
    negative: "text-red-500 text-xs", 
    neutral: "text-gray-500 text-xs"
  };

  const getRankChangeStyle = () => {
    if (rankChange > 0) return rankChangeStyle.positive;
    if (rankChange < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  };

  // const mappedProjects = mapMentionedProjects(mentionedProject, tokensArr, defaultIcon);
  // const mappedChains = mapMentionedChains(mentionedProject, chainArr, defaultIcon);

  return (
    <motion.tr
      transition={{
        duration: 0.5,
        delay: rank * 0.1
      }}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      viewport={{once: true}}
      className={
        rank === 0 ? "bg-darkblack-200/50 group hover:bg-darkblack-100 transition-all duration-300 text-white" :
          rank === 1 ? "bg-darkblack-300/50 group hover:bg-darkblack-100 transition-all duration-300 text-white" :
          rank === 2 ? "bg-darkblack-400/50 group hover:bg-darkblack-100 transition-all duration-300 text-white" :
          rank % 2 === 0 ? "bg-darkblack-500/50 group hover:bg-darkblack-100 transition-all duration-300 text-white" : "group hover:bg-darkblack-100 transition-all duration-300 text-white"
      }
    >
      <td className="px-6 py-5 xl:px-2">
        <div className="flex items-center gap-2">
          <p className={`${getRankChangeStyle()}`}> 
            {rankChange > 0 ? `▲ ${rankChange}` : rankChange < 0 ? `▼ ${Math.abs(rankChange)}` : "="}
          </p>
          {rank === 0 && <Top1Icon />}
          {rank === 1 && <Top2Icon />}
          {rank === 2 && <Top3Icon />}
          {rank !== 0 && rank !== 1 && rank !== 2 && rank + 1}
        </div>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <div className="flex w-full items-center space-x-2.5">
          <div className="flex flex-col items-center w-[100px] gap-2">
            <Link href={`/user/${username}`} className="transition-all duration-300 h-10 w-10 group-hover:w-14 group-hover:h-14 overflow-hidden rounded-full ">
              <img
                src={imgKol}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            </Link>
            <p className="text-base font-semibold text-white text-center truncate w-full overflow-hidden">
              {nameKol}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          <span className={`bg-darkblack-500 hover:bg-darkblack-300 shadow-md shadow-gray-100/20 text-sm ${
            typeKol === "Experts" ? "text-primary" : 
            typeKol === "KOL" ? "text-green-500" : 
            typeKol === "Celebrities" ? "text-secondary" : 
            typeKol === "Threador" ? "text-portage" : 
            typeKol === "Caller" ? "text-yellow-400" : "text-white"
          } font-medium rounded-lg py-1 px-3`}
          >
            {typeKol}
          </span>
        </p>
      </td>
      <td className="px-6 py-5 w-[200px] xl:px-0">
        <Tooltip
          placement="right"
          title={
            <div className="bg-darkblack-500 p-4 border border-gray-200/20">
              {/* {mappedProjects?.map((project:any, index:any) => (
                <div className="flex space-x-2" key={index}>
                  <div className="h-6 w-6 border bg-darkblack-600 overflow-hidden rounded-full">
                    <img src={project.icon} alt={project.symbol} className="h-full w-full object-cover"/>
                  </div>
                  <h1>{project.tokenName} ({project.symbol})</h1>
                </div>
              ))} */}
              12
            </div>
          }
        >
          <p className="text-base font-medium text-bgray-900 dark:text-white flex">
            23
            {/* {mappedProjects.slice(0,5).map((item:any) => (
              <div className="h-6 w-6 -m-1 border bg-darkblack-600 overflow-hidden rounded-full" key={item.symbol}>
                <img src={item.icon} alt={item.symbol} className="h-full w-full object-cover"/>
              </div>
            ))}
            {mappedProjects.length >= 5 &&
             <div className="h-6 w-6 -m-1 border overflow-hidden rounded-full bg-white text-primary items-center justify-center text-center pt-[3px]">
               <p className="text-[10px]  font-bold">
                 {mappedProjects.length - 5}+
               </p>
             </div>
            } */}
          </p>
        </Tooltip>
      </td>
      <td className="px-6 py-5 xl:px-0 min-w-[180px]">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {numberWithCommas(followers)}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-primary group-hover:text-white flex items-center gap-1">
          <PointIcon />
          {numberWithCommas(shillScore)}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0 text-center">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <p className={`${getChangeStyle(change)} truncate`}> 
            {change > 0 ? `▲ ${change.toFixed(2) ?? 0} %` : change < 0 ? `▼ ${Math.abs(change?.toFixed(2) ?? 0) } %` : "="}
          </p>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <Tooltip
          placement="right"
          title={
            <div className="bg-darkblack-500 p-4 border border-gray-200/20">
              {/* {mappedChains?.map((project:any, index:any) => (
                <div className="flex space-x-2" key={index}>
                  <div className="h-6 w-6 border bg-darkblack-600 overflow-hidden rounded-full">
                    <img src={project.icon} alt={project.chain} className="h-full w-full object-cover"/>
                  </div>
                  <h1>{capitalizeFirstLetter(project.chain)}</h1>
                </div>
              ))} */}
              33
            </div>
          }
        >
          <p className="text-base font-semibold text-white flex">
            {/* {mappedChains.map((item:any) => (
              <div className="h-6 w-6 -m-1 bg-darkblack-600 border overflow-hidden rounded-full" key={item.symbol}>
                <img src={item.icon} alt={item.symbol} className="h-full w-full object-cover"/>
              </div>
            ))} */}

            454
          </p>
        </Tooltip>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <TagList tags={tags}/>
        </p>
      </td>
    </motion.tr>
  );
}

CustomerInfo.propTypes = {
  rank: ProtoTypes.number,
  imgKol: ProtoTypes.string,
  typeKol: ProtoTypes.string,
  nameKol: ProtoTypes.string,
  mentionedProject: ProtoTypes.array.isRequired,
  followers: ProtoTypes.number,
  shillScore: ProtoTypes.number,
  change: ProtoTypes.number,
  chain: ProtoTypes.string,
  tags: ProtoTypes.array,
  previousRank: ProtoTypes.number,
};

export default CustomerInfo;
