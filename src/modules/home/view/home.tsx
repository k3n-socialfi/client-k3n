"use client";
import { ButtonSecondary } from "@/components/ButtonCustom";
import Cards from "@/components/Card";
import CardKOLs from "@/components/CardKOLs";
import CardProject from "@/components/CardProjects";
import CarouselSlide from "@/components/CarouselSlide";
import TrendingKOLsTop from "@/components/TrendingKOLsTop";
import { Button, Stack, Typography } from "@mui/material";
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
  StyleTrendingTop,
  StyleTrendingTopCard,
} from "../components/style/styleHome";
import { IconArrowRight, IconLike, IconPersonMultiple, IconRocket } from "@/assets/icons";
import Chips from "@/components/Chip";

export interface IHomeProps { }

const IMG_NFT = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

export default function Home(props: IHomeProps) {
  const slides = [
    "https://tonghop.vn/wp-content/uploads/2019/02/FILE-20170314-1554KQTUND9YYZQQ.png",
    "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/anh-bia-dep-6-4-696x435.jpg?fit=700%2C20000&quality=95&ssl=1",
    "https://i.pinimg.com/originals/e6/87/3c/e6873c5e0ed4e0aecdad75fe21b0014f.png",
    "https://tophinhanhdep.com/wp-content/uploads/2021/03/anh-bia-chibi-13.jpg",
  ];

  const handleButtonClick = () => {
    // Xử lý khi nút được click
    console.log("Button clicked");
  };

  return (
    <StyleContainer>
      <StyleSlide>
        <CarouselSlide slides={slides} interval={3000} slideHeight="300px" />
      </StyleSlide>
      <StyleFeaturedKOLs>
        <StyleTop>
          <StyleLeft>
            <IconPersonMultiple />
            <h3>Featured KOLs</h3>
          </StyleLeft>
          <StyleRight>
            <h5>1D</h5>
            <h5>7D</h5>
            <h5>30D</h5>
          </StyleRight>
        </StyleTop>
        <StyleBottom>
          {[1, 2, 3].map((index) => (
            <Cards key={index} url={IMG_NFT} title="content" content={<Chips label="Social Fi" variant="outlined" />} actions={<Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>} />
          ))}
        </StyleBottom>
      </StyleFeaturedKOLs>
      <StyleFeaturedProject>
        <StyleTop>
          <StyleLeft>
            <IconRocket />
            <h3>Featured Project</h3>
          </StyleLeft>
          <StyleRight>
            <h5>1D</h5>
            <h5>7D</h5>
            <h5>30D</h5>
          </StyleRight>
        </StyleTop>
        <StyleBottom>
          {[1, 2, 3].map((index) => (
            <Cards key={index} url={IMG_NFT} title="content" content={<Chips label="Social Fi" variant="outlined" />} actions={<Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>} />
          ))}
        </StyleBottom>
      </StyleFeaturedProject>
      <StyleTrending>
        <StyleTrendingKOLs>
          <StyleTop>
            <h3 style={{ paddingTop: "24px" }}>Trending KOLs</h3>
            <Stack
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
              direction="row"
            >
              <Typography color={"#BB2D66"}>View all</Typography>
              <IconArrowRight />
            </Stack>
          </StyleTop>

          <StyleTrendingTop>
            <TrendingKOLsTop />
          </StyleTrendingTop>

          <StyleTrendingTopCard>
            {[1, 2, 3, 4].map((item, index) => (
              <StyleTrendingCard key={item}>
                <Typography component={"h4"} color={"#949292"}>
                  {index + 4}
                </Typography>
                <CardKOLs />
              </StyleTrendingCard>
            ))}
          </StyleTrendingTopCard>
        </StyleTrendingKOLs>
        <StyleTrendingProjects>
          <StyleTop>
            <h3>Trending Project</h3>
          </StyleTop>
          <StyleTrendingProjectsCard>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <StyleTrendingCard key={item}>
                <Typography component={"h4"} color={"#949292"}>
                  {index + 1}
                </Typography>
                <CardProject />
              </StyleTrendingCard>
            ))}
            <ButtonSecondary
              fullWidth
              colorBt="primary.whiteText"
              endIcon={<IconArrowRight color="#FFF" />}
            >
              Check It Out
            </ButtonSecondary>
          </StyleTrendingProjectsCard>
        </StyleTrendingProjects>
      </StyleTrending>
    </StyleContainer >
  );
}
