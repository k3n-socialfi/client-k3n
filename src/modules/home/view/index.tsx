"use client";

import IconArrowRight from "@/assets/icons/IconArrowRight";
import Banner from "@/assets/images/Banner.png";
import CardTrendingKolsSkeleton from "@/components/CardTrendingKOLs/CardTrendingKolsSkeleton";
import CardTrendingProjectsSkeleton from "@/components/CardTrendingProjects/CardTrendingProjectsSkeleton";
import { FAKEDATA_SKELETON } from "@/constant/data";
import { useHomeContext } from "@/contexts/HomeContext";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import SwipperImage from "@/components/SwipperImage";
import Image from "next/image";
import { SpinnerLoader } from "@/components/SpinnerLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import TredingKols from "@/components/TrendingKols";
import RankRange from "@/components/TrendingKols/RankRange";
import TrendingProjects from "@/components/TrendingProjects";
import CardKols from "@/modules/MarketingServices/Components/CardKols";

export interface IHomeProps {}

export default function Home({}: IHomeProps) {
  const router = useRouter();

  const {
    trendingKols,
    trendingProjects,
    featureKols,
    isLoading,
    selectedRange,
    handleRangeChange,
  } = useHomeContext();

  const dataServices = useServicesContext();
  const text = "YOUR #1 KOL PLATFORM IN WEB3".split(" ");

  if (isLoading) {
    return (
      <div className="relative flex items-center justify-center w-full h-screen">
        <Image src={Banner} alt="banner" fill style={{ objectFit: "cover" }} />
        <SpinnerLoader />
      </div>
    );
  }

  return (
    <StyleContainer>
      <div className="w-full h-[300px] md:h-[350px] lg:h-[600px] relative bg-darkblack-600">
        <Image src={Banner} alt="banner" fill style={{ objectFit: "cover" }} />
        <div className="max-w-[1000px] w-full flex flex-wrap gap-8 text-center justify-center items-center mx-auto absolute md:top-[4%] md:left-0 xl:top-[6%] xl:left-[3%] 2xl:top-[12%] 2xl:left-[13%] mr-8">
          {text.map((el, i) => (
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              viewport={{ once: true }}
              key={i}
              className={`text-[50px] md:text-[60px] lg:text-[80px] font-bold ${
                i === 1 ? "text-primary" : "text-white"
              }`}
            >
              {el}
            </motion.h1>
          ))}
        </div>
      </div>
      <div>
        <StyleFeaturedKOLs>
          <SwipperImage featureKols={featureKols} />
        </StyleFeaturedKOLs>
      </div>
      <div>
        <div className="flex items-center justify-between mt-8 px-4 py-2">
          <h4 className="font-bold text-secondary text-2xl md:text-3xl xl:text-4xl">
            Services
          </h4>

          <Link
            href="/services"
            className="flex items-center gap-2 text-primary "
          >
            <p className="hover:underline">View all</p>
            <IconArrowRight />
          </Link>
        </div>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }}
          freeMode={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          grabCursor={true}
          modules={[FreeMode, Autoplay]}
        >
          {dataServices?.dataServices?.map((service: any, i: number) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                viewport={{ once: true }}
                className="flex flex-wrap px-2 justify-center lg:justify-start py-4"
              >
                {/* <ServiceCard service={service} /> */}
                <CardKols
                  image={service?.image}
                  projectName={service?.projectName}
                  price={`${service?.price}`}
                  paymentMethod={service?.paymentMethod}
                  jobId={service?.jobId}
                  tags={service?.tags}
                  projectDescription={service?.jobDescription}
                  reviews={service?.review}
                  creatorInfo={service?.creatorInfo}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <StyleTrending>
        <div className="w-full">
          <div className="flex items-center justify-between mt-8 p-4">
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className="font-bold text-secondary text-2xl md:text-3xl xl:text-4xl"
            >
              Trending KOLs
            </motion.h4>
            <div className="flex items-center justify-center">
              <RankRange
                onRangeChange={handleRangeChange}
                selectedRange={selectedRange}
              />
              <MoreTrendingKols onClick={() => router.push("/top-ranking")}>
                <motion.p
                  className="text-[#F23581] flex items-center space-x-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <span className="hover:underline">Explore more</span>
                  <IconArrowRight />
                </motion.p>
              </MoreTrendingKols>
            </div>
          </div>

          {isLoading ? (
            FAKEDATA_SKELETON.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                <CardTrendingKolsSkeleton key={item} point={10} />
              </motion.div>
            ))
          ) : (
            <TredingKols data={trendingKols} />
          )}
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between mt-8 p-4">
            <h4 className="font-bold text-secondary text-2xl md:text-3xl xl:text-4xl">
              Projects Trending
            </h4>
          </div>

          {isLoading
            ? FAKEDATA_SKELETON.map((item, i) => (
                <div key={item}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i / 30,
                    }}
                    key={i}
                  >
                    <CardTrendingProjectsSkeleton key={item} />
                  </motion.div>
                </div>
              ))
            : trendingProjects
                ?.slice(0, 10)
                .map((project, index) => (
                  <TrendingProjects project={project} key={index} />
                ))}
        </div>
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
    padding: 0 4px;
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

const StyleTrending = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  /* justify-content: space-between;
  gap: 100px;
  @media (max-width: 1224px) {
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  } */
`;
