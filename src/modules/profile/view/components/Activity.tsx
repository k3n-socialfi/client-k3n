import { chains, tokens } from "@/data/ranking/filterData";
import AveragePnl from "./AveragePnl";
import { Tooltip, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils";
import StarRating from "@/components/StarRating";
import { mapMentionedChains, mapMentionedProjects } from "./CustomerInfo";
import svgs from "@/assets/svgs";
import { IconSharePost } from "@/assets/icons";
import Image from "next/image";

const ActivitySeciton = ({ listProjects, rating }: any) => {
  const mappedProjects = mapMentionedProjects(
    listProjects,
    tokens,
    svgs.svg_k3n,
  );
  const mappedChains = mapMentionedChains(listProjects, chains, svgs.svg_k3n);

  if (listProjects && listProjects.length === 0)
    return <div className="pt-40 pb-[48px]"></div>;

  return (
    <>
      {listProjects && listProjects.length !== 0 && (
        <div className="pt-40 pb-[48px] text-white flex flex-col gap-10">
          <p className="text-3xl md:text-[50px] font-extrabold text-white font-kode">
            Activity
          </p>
          <div className="">
            <div className="bg-darkblack-500 flex w-full rounded-md border border-secondary/10 shadow-lg shadow-gray-100/10">
              <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:justify-between lg:items-start py-6 lg:px-20">
                {/* Related Tokens  */}
                <div className="flex flex-col justify-center gap-4 items-center">
                  <p className="text-[28px]">Related Token</p>
                  <Tooltip
                    placement="right"
                    title={
                      <div className="bg-darkblack-500 p-4 border border-gray-200/20">
                        {mappedProjects?.map((project: any, index: any) => (
                          <div className="flex space-x-2" key={index}>
                            <div className="relative h-6 w-6 border bg-darkblack-600 overflow-hidden rounded-full flex-shrink-0">
                              <Image
                                unoptimized
                                src={project.icon}
                                alt={project.symbol}
                                width={24}
                                height={24}
                                className="rounded-full"
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
                    <Typography className="flex items-center justify-center">
                      {mappedProjects.slice(0, 7).map((item: any) => (
                        <div
                          className="relative h-10 w-10 -m-[6px] border bg-darkblack-600 overflow-hidden rounded-full"
                          key={item.symbol}
                        >
                          <Image
                            fill
                            sizes="100%"
                            objectFit="cover"
                            src={item.icon}
                            alt={item.symbol}
                          />
                        </div>
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
                  <p className="text-[28px]">Related Chains</p>
                  <Tooltip
                    placement="right"
                    title={
                      <div className="bg-darkblack-500 p-4 border border-gray-200/20">
                        {mappedChains?.map((project: any, index: any) => (
                          <div className="flex space-x-2" key={index}>
                            <div className="relative h-6 w-6 border bg-darkblack-600 overflow-hidden rounded-full">
                              <Image
                                fill
                                sizes="100%"
                                objectFit="cover"
                                src={project.icon}
                                alt={project.chain}
                              />
                            </div>
                            <h1>{capitalizeFirstLetter(project.chain)}</h1>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <Typography>
                      <div className="flex items-center justify-center">
                        {mappedChains.map((item: any) => (
                          <div
                            className="relative h-10 w-10 bg-darkblack-600 border overflow-hidden rounded-full"
                            key={item.symbol}
                          >
                            <Image
                              fill
                              sizes="100%"
                              objectFit="cover"
                              src={item.icon}
                              alt={item.symbol}
                            />
                          </div>
                        ))}
                      </div>
                    </Typography>
                  </Tooltip>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                  <p className="text-[28px]">Avg.Rating</p>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center">
                      <StarRating
                        size={"text-2xl xl:text-3xl"}
                        rating={rating ?? 0}
                      />
                    </div>
                    <p className="text-[#82EBFF] text-[28px]">{rating}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                  <p className="text-[28px] text-center">
                    Average % Per Mention
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <AveragePnl data={listProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivitySeciton;
