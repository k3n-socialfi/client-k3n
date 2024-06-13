"use client";

import IconArrowRight from "@/assets/icons/IconArrowRight";
import Banner from "@/assets/images/Banner.png";
import CardServices from "@/components/CardServices";
import CardServicesSkeleton from "@/components/CardServices/CardServicesSkeleton";
import CardTrendingKOLs from "@/components/CardTrendingKOLs";
import CardTrendingKolsSkeleton from "@/components/CardTrendingKOLs/CardTrendingKolsSkeleton";
import CardTrendingProjects from "@/components/CardTrendingProjects";
import CardTrendingProjectsSkeleton from "@/components/CardTrendingProjects/CardTrendingProjectsSkeleton";
import { FAKEDATA_SKELETON } from "@/constant/data";
import { BG_COLOR_TOP, DATA_TOP } from "@/constant/dataMockupTop";
import { useHomeContext } from "@/contexts/HomeContext";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {motion} from 'framer-motion'
import Link from "next/link";
import ParallaxText from "@/components/ParallaxText";
import SwipperImage from "@/components/SwipperImage";
import Image from "next/image";
import { SpinnerLoader } from "@/components/SpinnerLoader";

export interface IHomeProps {}

export default function Home({}: IHomeProps) {
  const router = useRouter();

  const { trendingKols, trendingProjects, featureKols, isLoading } =
    useHomeContext();

  const dataServices = useServicesContext();
  const text = "YOUR #1 KOL PLATFORM IN WEB3".split(" ");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Image src={Banner} alt="banner" className="flex absolute"/>
        <SpinnerLoader />
      </div>
    )
  } 

  return (
    <StyleContainer>
      <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] relative bg-darkblack-600">
        <Image src={Banner} alt="banner" className="flex absolute"/>
        <div className="max-w-[1000px] w-full flex flex-wrap gap-8 text-center justify-center items-center mx-auto absolute md:top-[4%] md:left-0 xl:top-[6%] xl:left-[3%] 2xl:top-[12%] 2xl:left-[13%] mr-8">
          {text.map((el, i) => (
            <motion.h1
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.25,
                delay: i /10
              }}
              viewport={{ once: true }}
              key={i}
              className={`text-[50px] md:text-[60px] lg:text-[80px] font-bold ${i === 1 ? "text-primary" : "text-white"}`}
            >
              {el}{""}
            </motion.h1>
          ))}
        </div>
      </div>
      <div>
        <StyleFeaturedKOLs>
          <SwipperImage featureKols={featureKols} />
        </StyleFeaturedKOLs>
      </div>
      <StyleFeaturedProject>
        <StyleTop>
          <StyleLeft>
            <Typography variant="h4">Services</Typography>
          </StyleLeft>
          <Link href="/services" className="flex flex-row text-sm text-[#F23581] justify-end items-end">
            <div className="flex space-x-2 hover:text-[#F23581]/70">
              <p>
                View all
              </p>
              <IconArrowRight />
            </div>
          </Link>
        </StyleTop>
        <div className="flex space-x-4">
          {dataServices?.isLoading
          ? FAKEDATA_SKELETON.map((item, i) => (
            <motion.div 
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 1,
                delay: i * 0.3
              }}
              key={i}
            >
              <CardServicesSkeleton />
            </motion.div>
          ))
          : dataServices?.dataServices.map((item: IServices, i) => (
            <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 1,
                delay: i * 0.3
              }}
              key={i}
            >
              <CardServices data={item} key={item?.jobId} />
            </motion.div>
          ))}
        </div>
      </StyleFeaturedProject>
      <StyleTrending>
        <StyleTrendingKOLs>
          <StyleTop>
            <motion.h4
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 1,
              }}
              className="font-bold">Trending KOLs</motion.h4>
            <MoreTrendingKols onClick={() => router.push("/top-ranking")}>
              <motion.p
                className="text-[#F23581] flex items-center space-x-1"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 1,
                }}
              >
                <span>Explore more</span>
                <IconArrowRight />
              </motion.p>
            </MoreTrendingKols>
          </StyleTop>

          <TabD>
            <ItemTabD>1D</ItemTabD>
            <ItemTabD style={{ backgroundColor: "#191D24", color: "#FFF" }}>
              7D
            </ItemTabD>
            <ItemTabD>30D</ItemTabD>
          </TabD>

          <StyleTrendingTopCard>
            {isLoading
            ? FAKEDATA_SKELETON.map((item, index) => (
              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.25,
                  delay: index /10
                }}
                key={index}
              >
                <CardTrendingKolsSkeleton key={item} point={10} />
              </motion.div>
            ))
            : trendingKols?.map((item, index) => (
              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.25,
                  delay: index /10
                }}
                key={index}
              >
                <StyleTrendingCard key={item?.userId}>
                  <CardTrendingKOLs
                    rank={DATA_TOP[index] ?? index + 1}
                    backgroundColor={
                    BG_COLOR_TOP[index] ?? "bg-darkblack-600"
                    }
                    name={item?.username}
                    point={item?.twitterInfo?.totalPoints}
                    urlAvatar={item?.twitterInfo?.avatar}
                  />
                </StyleTrendingCard>
                {index > 2 && <Divider sx={{ borderColor: "#B9B9B9 " }} />}
              </motion.div>
            ))}
          </StyleTrendingTopCard>
        </StyleTrendingKOLs>
        <StyleTrendingProjects>
          <StyleTop>
            <Typography variant="h4">Web3 Projects</Typography>
          </StyleTop>
          <StyleTrendingProjectsCard>
            {isLoading
            ? FAKEDATA_SKELETON.map((item, i) => (
              <div key={item}>
                <motion.div
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{
                    duration: 0.5,
                    delay: i / 30
                  }}
                  key={i}
                >
                  <CardTrendingProjectsSkeleton key={item} />
                </motion.div>
              </div>
            ))
            : trendingProjects?.slice(0, 7)?.map((item, index) => (
              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.5,
                  delay: index / 30
                }}
                key={index}
              >
                <StyleTrendingCard key={item.id}>
                  <Typography variant={"h5"} color={"#FFF"}>
                    {index + 1}
                  </Typography>
                  <CardTrendingProjects data={item} />
                </StyleTrendingCard>
                <Divider sx={{ borderColor: "#B9B9B9 " }} />
              </motion.div>
            ))}
          </StyleTrendingProjectsCard>
        </StyleTrendingProjects>
      </StyleTrending>
    </StyleContainer>
  );
}

const StyleContainer = styled.div`
  background-color: var(--background-primary);
`;

const StyleFeaturedKOLs = styled.div`
  .rfm-initial-child-container,
  .rfm-marquee,
  .rfm-marquee-container {
  gap: 14px;
  transition-timing-function: ease-in-out;
  transition: 0.5s;
  height: 526px;
  &:hover {
  .rfm-child {
  transition-timing-function: ease-in-out;
  transition: 0.5s;
  }
  }
  .rfm-child:hover {
  transform: scale(1.1);
  transition-timing-function: ease-in-out;
  transition: 0.5s;
  }
  }
`;
const StyleFeaturedProject = styled.div``;

const StyleTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 20px 0;
  padding-top: 14px;
  flex-wrap: wrap;
  h4 {
  font-size: 40px !important;
  }
  @media (max-width: 520px) {
  padding-top: 0px;
  padding-right: 10px;
  padding-left: 10px;
  h4 {
  font-size: 25px;
  }
  }
`;

const MoreTrendingKols = styled(Stack)<any>`
  display: flex;
  align-items: center;
  flex-direction: row !important;
  gap: 10px;
  cursor: pointer;
  .MuiTypography-body1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`;

const StyleBottom = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 1px;
  /* scrollbar-width: none; */
  &::-webkit-scrollbar {
  display: none;
  }
`;

const StyleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  padding-top: 24px;
  @media (max-width: 520px) {
  padding-top: 0px;
  h4 {
  font-size: 25px !important;
  }
  }
`;
const StyleRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .MuiTypography-body1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  }
`;

const StyleTrending = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 1224px) {
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  }
`;

const StyleTrendingKOLs = styled.div`
  width: 100%;
`;

const TabD = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: #fff;
  padding: 6px 0;
  gap: 4px;
`;

const ItemTabD = styled.div`
  padding: 4px 18px;
  border-radius: 99px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  color: #a7a7a7;
  cursor: pointer;
`;

const StyleTrendingTopCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyleTrendingProjects = styled.div`
  width: 100%;
`;

const StyleTrendingProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyleTrendingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  &:hover {
  .MuiTypography-h5 {
  color: #82ebff;
  }
  }
`;
