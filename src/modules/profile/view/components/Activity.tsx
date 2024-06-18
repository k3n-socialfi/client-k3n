import { chains, tokens } from "@/data/ranking/filterData";
import AveragePnl from "./AveragePnl";
import { Tooltip, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils";
import StarRating from "@/components/StarRating";
import { mapMentionedChains, mapMentionedProjects } from "./CustomerInfo";
import svgs from "@/assets/svgs";
import Image from "next/image";

const ActivitySeciton = ({ listProjects, rating }: any) => {
  const mappedProjects = mapMentionedProjects(
    listProjects,
    tokens,
    svgs.svg_k3n,
  );
  const mappedChains = mapMentionedChains(listProjects, chains, svgs.svg_k3n);

  return (
    <div className="w-full py-12 flex flex-col gap-4">
      <h1 className="text-xl lg:text-3xl font-bold text-white font-kode">
        Activity
      </h1>
      {listProjects && listProjects.length !== 0 ? (
        <div className="flex flex-col lg:flex-row justify-center bg-[#FFFFFF11] rounded-lg items-center w-full gap-4 lg:justify-between lg:items-start py-6 lg:px-20">
          {/* Related Tokens  */}
          <div className="flex flex-col justify-center gap-4 items-center">
            <p className="text-[18px] font-bold">Related Token</p>
            <Tooltip
              placement="right"
              title={
                <div className="bg-darkblack-500 p-4 border border-gray-200/20">
                  {mappedProjects?.map((project: any, index: any) => (
                    <div className="flex space-x-2" key={index}>
                      <Image
                        unoptimized
                        src={project.icon}
                        alt={project.symbol}
                        width={24}
                        height={24}
                        className="border bg-darkblack-600 rounded-full my-1 p-1 aspect-square"
                      />
                      <h1>
                        {project.tokenName} ({project.symbol})
                      </h1>
                    </div>
                  ))}
                </div>
              }
            >
              <Typography className="flex items-center justify-center">
                {mappedProjects.slice(0, 7).map((item: any) => (
                  <Image
                    key={item.symbol}
                    src={item.icon}
                    alt={item.symbol}
                    width={40}
                    height={40}
                    className="border bg-darkblack-600 rounded-full -mx-1 p-2 aspect-square"
                  />
                ))}
                {mappedProjects.length >= 5 && (
                  <div className="h-10 w-10 border overflow-hidden rounded-full bg-white text-primary items-center justify-center text-center pt-[3px]">
                    <p className="text-xl font-bold">
                      {mappedProjects.length - 7}+
                    </p>
                  </div>
                )}
              </Typography>
            </Tooltip>
          </div>
          {/* Related Tokens  */}

          <div className="flex flex-col justify-center gap-4 items-top">
            <p className="text-[18px] font-bold">Related Chains</p>
            <Tooltip
              placement="right"
              title={
                <div className="bg-darkblack-500 p-4 border border-gray-200/20">
                  {mappedChains?.map((project: any, index: any) => (
                    <div className="flex space-x-2" key={index}>
                      <Image
                        src={project.icon}
                        alt={project.chain}
                        width={24}
                        height={24}
                        className="border bg-darkblack-600 rounded-full p-1 my-1 aspect-square"
                      />
                      <h1>{capitalizeFirstLetter(project.chain)}</h1>
                    </div>
                  ))}
                </div>
              }
            >
              <Typography>
                <div className="flex items-center justify-center">
                  {mappedChains.map((item: any) => (
                    <Image
                      key={item.symbol}
                      src={item.icon}
                      alt={item.chain}
                      width={40}
                      height={40}
                      className="border bg-darkblack-600 rounded-full -mx-1 p-2 aspect-square"
                    />
                  ))}
                </div>
              </Typography>
            </Tooltip>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <p className="text-[18px] font-bold">Avg.Rating</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center">
                <StarRating rating={rating ?? 0} size="text-2xl" />
              </div>
              <p className="text-[#82EBFF] text-[18px]">{rating}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <p className="text-[18px] font-bold text-center">
              Average % Per Mention
            </p>
            <div className="flex items-center justify-center gap-1">
              <AveragePnl data={listProjects} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#FFFFFF11] rounded-lg w-full px-4 py-10">
          <p className="text-2xl text-center text-primary">No Activity</p>
        </div>
      )}
    </div>
  );
};

export default ActivitySeciton;
