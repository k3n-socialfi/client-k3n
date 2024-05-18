"use client";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import IconRocket from "@/assets/icons/IconRocket";
import BannerBG from "@/assets/images/Banner.png";
import { ButtonPrimary } from "@/components/ButtonCustom";
import CardFeaturedKOLs from "@/components/CardFeaturedKOLs";
import CardFeaturedKolsSkeleton from "@/components/CardFeaturedKOLs/CardFeaturedKolsSkeleton";
import CardFeaturedProjects from "@/components/CardFeaturedProjects";
import CardFeaturedProjectsSkeleton from "@/components/CardFeaturedProjects/CardFeaturedProjectsSkeleton";
import CardTrendingKOLs from "@/components/CardTrendingKOLs";
import CardTrendingKolsSkeleton from "@/components/CardTrendingKOLs/CardTrendingKolsSkeleton";
import CardTrendingProjects from "@/components/CardTrendingProjects";
import CardTrendingProjectsSkeleton from "@/components/CardTrendingProjects/CardTrendingProjectsSkeleton";
import { FAKEDATA_SKELETON } from "@/constant/data";
import { BG_COLOR_TOP, DATA_TOP } from "@/constant/dataMockupTop";
import { useHomeContext } from "@/contexts/HomeContext";
import { Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

export interface IHomeProps {}

export default function Home({}: IHomeProps) {
  const router = useRouter();

  const {
    trendingKols,
    trendingProjects,
    featureKols,
    featureProjects,
    isLoading,
  } = useHomeContext();

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
      <Banner bg={BannerBG}>
        <h1>
          YOUR <span>#1</span> KOL <br /> PLATFORM IN WEB3
        </h1>
        <StyleFeaturedKOLs>
          <Marquee pauseOnClick={true} pauseOnHover={true} loop={0}>
            {isLoading
              ? FAKEDATA_SKELETON.map((item) => (
                  <CardFeaturedKolsSkeleton key={item} />
                ))
              : featureKols.map((item: IUserKOL) => (
                  <CardFeaturedKOLs data={item} key={item.userId} />
                ))}
          </Marquee>
        </StyleFeaturedKOLs>
      </Banner>
      <StyleFeaturedProject>
        <StyleTop>
          <StyleLeft>
            <IconRocket />
            <Typography variant="h4">Featured Services</Typography>
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
              : trendingKols?.map((item, index) => (
                  <>
                    <StyleTrendingCard key={item?.userId}>
                      <CardTrendingKOLs
                        rank={DATA_TOP[index] ?? index + 1}
                        backgroundColor={
                          BG_COLOR_TOP[index] ?? "var(--background-primary)"
                        }
                        name={item?.username}
                        point={item?.twitterInfo?.totalPoints}
                        urlAvatar={item?.twitterInfo?.avatar}
                      />
                    </StyleTrendingCard>
                    {index > 2 && <Divider sx={{ borderColor: "#B9B9B9 " }} />}
                  </>
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
              : trendingProjects?.slice(0, 7)?.map((item, index) => (
                  <>
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
                    <Divider sx={{ borderColor: "#B9B9B9 " }} />
                  </>
                ))}
          </StyleTrendingProjectsCard>
        </StyleTrendingProjects>
      </StyleTrending>
    </StyleContainer>
  );
}

const Banner = styled.div<any>`
  min-height: 1168px;
  background-position-x: center;
  background-image: ${({ bg }) => `url(${bg.src})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h1 {
    font-size: 144px;
    font-weight: 700;
    line-height: 172.8px;
    text-align: center;
    color: #fff;
  }
  span {
    color: var(--Primary-Primary, rgba(242, 53, 129, 1));
  }
`;

const StyleContainer = styled.div`
  background-color: var(--background-primary);
`;

const StyleFeaturedKOLs = styled.div`
  margin-top: 150px;
  .rfm-initial-child-container,
  .rfm-marquee,
  .rfm-marquee-container {
    gap: 28px;
  }
`;
const StyleFeaturedProject = styled.div``;

const StyleTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 20px 0;
  padding-top: 24px;
  @media (max-width: 520px) {
    padding-top: 0px;
    h4 {
      font-size: 25px;
    }
  }
`;

const StyleBottom = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 15px;
  /* scrollbar-width: none; */
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
  gap: 10px;
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

const StyleTrendingTopCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
`;
