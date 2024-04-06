"use client";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import PersonMultipleIcon from "@/assets/icons/IconPersonMultiple";
import IconRocket from "@/assets/icons/IconRocket";
import { ButtonPrimary } from "@/components/ButtonCustom";
import CarouselSlide from "@/components/CarouselSlide";
import { Stack, Typography } from "@mui/material";
import {
  StyleBottom,
  StyleContainer,
  StyleFeaturedKOLs,
  StyleFeaturedProject,
  StyleLeft,
  StyleRight,
  StyleSlide,
  StyleTop,
  StyleTrending,
  StyleTrendingCard,
  StyleTrendingKOLs,
  StyleTrendingProjects,
  StyleTrendingProjectsCard,
  StyleTrendingTopCard,
} from "../components/style/styleHome";
import { useRouter } from "next/navigation";
import Popup from "@/components/Header/components/Popup";
import { useState } from "react";
import { useHomeContext } from "@/contexts/HomeContext";
import CardFeaturedKolsSkeleton from "@/components/CardFeaturedKOLs/CardFeaturedKolsSkeleton";
import CardFeaturedProjectsSkeleton from "@/components/CardFeaturedProjects/CardFeaturedProjectsSkeleton";
import CardTrendingKolsSkeleton from "@/components/CardTrendingKOLs/CardTrendingKolsSkeleton";
import CardTrendingProjectsSkeleton from "@/components/CardTrendingProjects/CardTrendingProjectsSkeleton";
import CardFeaturedKOLs from "@/components/CardFeaturedKOLs";
import CardFeaturedProjects from "@/components/CardFeaturedProjects";
import CardTrendingKOLs from "@/components/CardTrendingKOLs";
import { IconTop1 } from "@/assets/icons";
import CardTrendingProjects from "@/components/CardTrendingProjects";
import CarouselSlideSkeleton from "@/components/CarouselSlide/CarouselSlideSkeleton";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [showPoppup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();
  const slides = [
    "https://pbs.twimg.com/media/GEEozaoWkAAzeqB?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GEEo_DjXcAAZAtp?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/EdOpG_jWkAAv7q3?format=jpg&name=large",
    "https://rawcdn.githack.com/paintincode/bored-ape-clone/c4c0344e1259878d5aa18d6691ac0592bbedea72/src/assets/bayc-mutant-hero.png",
    "https://pbs.twimg.com/media/D0V4z7lX0AA3ugH?format=jpg&name=small",
  ];

  const {
    trendingKols,
    trendingProjects,
    featureKols,
    featureProjects,
    isLoading,
  } = useHomeContext();

  const FAKEDATA_SKELETON = [0, 1, 2, 3, 4];
  const DATACARDFEATUREDKOLS = featureKols.map((item) => {
    return {
      id: item?.userId,
      name: item?.fullName,
      username: item?.username,
      numberLike: "1k",
      followers: item?.twitterInfo?.followers,
      wallet: [
        {
          label: "Airdrops",
          color: "chip.airdropsColor",
          background: "chip.airdropsBg",
        },
        {
          label: "Marketer",
          color: "chip.marketerColor",
          background: "chip.marketerBg",
        },
        {
          label: "Injective",
          color: "chip.injectiveColor",
          background: "chip.injectiveBg",
        },
      ],
      thumbnail: item?.twitterInfo?.avatar,
      verificationStatus: item?.twitterInfo?.verificationStatus,
    };
  });

  const DATACARDFEATUREDPROJECTS = featureProjects.map((item) => {
    return {
      id: item?.jobId,
      name: item?.projectName,
      numberLike: "1k",
      wallet: [
        {
          label: item?.tags[0],
          color: "chip.airdropsColor",
          background: "chip.airdropsBg",
        },
        {
          label: item?.tags[1],
          color: "chip.marketerColor",
          background: "chip.marketerBg",
        },
        {
          label: item?.tags[2],
          color: "chip.injectiveColor",
          background: "chip.injectiveBg",
        },
      ],
      thumbnail: item?.image,
    };
  });
  return (
    <StyleContainer>
      <StyleSlide>
        <CarouselSlide slides={slides} interval={3000} slideHeight="400px" />
        {/* <CarouselSlideSkeleton /> */}
      </StyleSlide>
      <StyleFeaturedKOLs>
        <StyleTop>
          <StyleLeft>
            <PersonMultipleIcon />
            <Typography variant="h4">Featured KOLs</Typography>
          </StyleLeft>
          <StyleRight></StyleRight>
        </StyleTop>
        <StyleBottom>
          {isLoading
            ? FAKEDATA_SKELETON.map((item) => (
                <div key={item}>
                  <CardFeaturedKolsSkeleton />
                </div>
              ))
            : DATACARDFEATUREDKOLS.map((item) => (
                <CardFeaturedKOLs
                  key={item.id}
                  name={item.name}
                  username={item?.username}
                  numberLike={item.numberLike}
                  follower={item.followers}
                  thumbnail={item.thumbnail}
                  wallet={item.wallet}
                  status={item?.verificationStatus}
                />
              ))}
        </StyleBottom>
      </StyleFeaturedKOLs>
      <StyleFeaturedProject>
        <StyleTop>
          <StyleLeft>
            <IconRocket />
            <Typography variant="h4">Featured Project</Typography>
          </StyleLeft>
          <StyleRight></StyleRight>
        </StyleTop>
        <StyleBottom>
          {isLoading
            ? FAKEDATA_SKELETON.map((item) => (
                <div key={item}>
                  <CardFeaturedProjectsSkeleton />
                </div>
              ))
            : DATACARDFEATUREDPROJECTS.map((item) => (
                <CardFeaturedProjects
                  key={item?.id}
                  id={item?.id}
                  numberLike={item?.numberLike}
                  thumbnail={item?.thumbnail}
                  name={item?.name}
                  wallet={item?.wallet}
                />
              ))}
        </StyleBottom>
      </StyleFeaturedProject>
      <StyleTrending>
        <StyleTrendingKOLs>
          <StyleTop>
            <Typography variant="h4">Trending KOLs</Typography>
            <Stack
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
              direction="row"
              onClick={() => router.push("/top-ranking")}
            >
              <Typography color={"#BB2D66"}>View all</Typography>
              <IconArrowRight />
            </Stack>
          </StyleTop>

          <StyleTrendingTopCard>
            {isLoading
              ? FAKEDATA_SKELETON.map((item) => (
                  <div key={item}>
                    <CardTrendingKolsSkeleton />
                  </div>
                ))
              : trendingKols.map((item) => (
                  <StyleTrendingCard key={item?.userId}>
                    <CardTrendingKOLs
                      rank={<IconTop1 />}
                      backgroundColor="
                #42362E"
                      name={item?.username}
                      point={item?.totalPoints}
                      urlAvatar={item?.avatar}
                    />
                  </StyleTrendingCard>
                ))}
          </StyleTrendingTopCard>
        </StyleTrendingKOLs>
        <StyleTrendingProjects>
          <StyleTop>
            <Typography variant="h4">Trending Project</Typography>
          </StyleTop>
          <StyleTrendingProjectsCard>
            {isLoading
              ? FAKEDATA_SKELETON.map((item) => (
                  <div key={item}>
                    <CardTrendingProjectsSkeleton />
                  </div>
                ))
              : trendingProjects.map((item, index) => (
                  <StyleTrendingCard key={item.id}>
                    <Typography component={"h4"} color={"#949292"}>
                      {index + 1}
                    </Typography>
                    <CardTrendingProjects
                      id={item?.id}
                      avatar={item?.small}
                      name={item?.name}
                      wallet="socialfi"
                      mention={item?.marketCapRank}
                    />
                  </StyleTrendingCard>
                ))}

            <ButtonPrimary fullWidth colorBt="primary.enabled">
              <Typography sx={{ padding: "8px 0" }}>Check It Out</Typography>
            </ButtonPrimary>
          </StyleTrendingProjectsCard>
        </StyleTrendingProjects>
      </StyleTrending>
      {showPoppup ? <Popup /> : <></>}
    </StyleContainer>
  );
}
