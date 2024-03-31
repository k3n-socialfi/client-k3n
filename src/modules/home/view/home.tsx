"use client";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import PersonMultipleIcon from "@/assets/icons/IconPersonMultiple";
import IconRocket from "@/assets/icons/IconRocket";
import { ButtonPrimary } from "@/components/ButtonCustom";
import CardFeaturedKOLs from "@/components/CardFeaturedKOLs";
import CardFeaturedProjects from "@/components/CardFeaturedProjects";
import CardTrendingKOLs from "@/components/CardTrendingKOLs";
import CardTrendingProjects from "@/components/CardTrendingProjects";
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
import { IconTop1 } from "@/assets/icons";
import Link from "next/link";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [showPoppup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();
  const slides = [
    "https://s3-alpha-sig.figma.com/img/e1cb/18b1/bc2b456ac7d9fbd4cc65af30315f50ae?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OW3LC4lhs1Fm6nvQmBH36AsDUTxrzUAUsGn8UtG5AHYXhKDMRofmUuVfKvlI~rx2uwg5JXcR~jz9E6bnXPyRFe6JrkNdktvkDe3llhMYWUpu0ARnESaqBCGaAKb98r0qUxHCKyJLqPg~Oios9jcZQmAAnoOFt8zH59L3s2JM2fjll8zIRF8vewWzs74Y7hZFTh1KJC~fSbkHppAaJMoh6sXiwS9QUSNgsZh6UFCP55EGW4LaEUZTpB0I0wtuSx-k2VdOJODYCLwG1A2mNPaBzDTveuWcERP24LgUtzlbrLJo5ktx06xr5iJhzhKWIkRCJmrg1lvzIgg~9Jo8cj52ag__",
    "https://tonghop.vn/wp-content/uploads/2019/02/FILE-20170314-1554KQTUND9YYZQQ.png",
    "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/anh-bia-dep-6-4-696x435.jpg?fit=700%2C20000&quality=95&ssl=1",
    "https://i.pinimg.com/originals/e6/87/3c/e6873c5e0ed4e0aecdad75fe21b0014f.png",
    "https://tophinhanhdep.com/wp-content/uploads/2021/03/anh-bia-chibi-13.jpg",
  ];

  const handleButtonClick = () => {
    // Xử lý khi nút được click
    console.log("Button clicked");
  };
  const { users } = useHomeContext();

  const DATACARDFEATUREDKOLS = users.map((item) => {
    return {
      id: 1,
      name: item.username,
      numberLike: "1k",
      followers: "85.7k",
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
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/6c53/0c3a/5069334414ecf7ad899d2bcd671d8342?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6u7EK4WbEZ1vBNRsDy0YvsBm2e0eieM-uYdmLqF-urKYO05PufvgdD3N3hWYEJzC-HLm80SdnXatko9asHmHO1Gtws0AW4XAO55pxDdx~idbH1BHGgrgmwMSwLcp1i6oP2mbbctx641TNQFlxz0OQlUt8g7bAch44qW8Qz7drHms2YbHQR8~J-DzngLuWlQoV~XilrONQNm1tWihMx1VRrfI-Ku5EZ-BIA9T5ZAAJIgwTkMV9otrW7aXSJ18jCrHND9d8DBk2ZTCw9bJRhfy-3KsmbxQcq92ttkYNDADtwB3at0VtSlFH~~8jHMJBLaz-0JHq8kVU44XMUxekEz6w__",
    };
  });
  const DATATRENDINGKOLs = users.map((item) => {
    return {
      id: 1,
      name: item.username,
      avatar:
        "https://s3-alpha-sig.figma.com/img/6c53/0c3a/5069334414ecf7ad899d2bcd671d8342?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6u7EK4WbEZ1vBNRsDy0YvsBm2e0eieM-uYdmLqF-urKYO05PufvgdD3N3hWYEJzC-HLm80SdnXatko9asHmHO1Gtws0AW4XAO55pxDdx~idbH1BHGgrgmwMSwLcp1i6oP2mbbctx641TNQFlxz0OQlUt8g7bAch44qW8Qz7drHms2YbHQR8~J-DzngLuWlQoV~XilrONQNm1tWihMx1VRrfI-Ku5EZ-BIA9T5ZAAJIgwTkMV9otrW7aXSJ18jCrHND9d8DBk2ZTCw9bJRhfy-3KsmbxQcq92ttkYNDADtwB3at0VtSlFH~~8jHMJBLaz-0JHq8kVU44XMUxekEz6w__",
      rank: <IconTop1 />,
      point: "1,250",
      bgColor: "#42362E",
    };
  });
  const DATACARDTRENDINGPROJECT = users.map((item) => {
    return {
      id: 1,
      avatar:
        "https://s3-alpha-sig.figma.com/img/d83e/f16d/be2413523d90c13532e23428190f7334?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cS8dv0iMSemmz-gwyhodo7ZUVII06UJCM5691cHWqeiI~YuK-hCjv48-Boipgh8BCtS4LhNalHZZkJ70lb1CYWBiLl80f-RAP44C7BAiqS9y~KgnrMyj2LSJp-ak0eO0pmIQIHlH5lXWCbMh4rbwQv5gsp3NrxNDMW1CAEmXr5GDcheAKxl26KCV3tpi26spzeLDyIQ6rW2BV7FZLxDiP-SJD~0uVAWbXqWYQvbnyZtKKsHWutFiefeQdzYIUyNVaX6~6RyEsu-JD7rKMMXkP5vkvqZYY1EpAIpqpYzjWqQGMjkbg6QAoBUZx3xD3R7gTFRd2O4OpMY8P4uSBLwvmw__",
      name: item.username,
      wallet: "socialfi",
      mention: "821",
    };
  });
  return (
    <StyleContainer>
      <StyleSlide>
        <CarouselSlide slides={slides} interval={3000} slideHeight="400px" />
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
          {DATACARDFEATUREDKOLS.map((item) => (
            <CardFeaturedKOLs
              key={item.id}
              name={item.name}
              numberLike={item.numberLike}
              follower={item.followers}
              thumbnail={item.thumbnail}
              wallet={item.wallet}
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
          {DATACARDFEATUREDKOLS.map((item) => (
            <CardFeaturedProjects
              key={item.id}
              numberLike={item.numberLike}
              thumbnail={item.thumbnail}
              name={item.name}
              wallet={item.wallet}
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
            {DATATRENDINGKOLs.map((item, index) => (
              <StyleTrendingCard key={item.id}>
                <CardTrendingKOLs
                  rank={item.rank}
                  backgroundColor={item.bgColor}
                  name={item.name}
                  point={item.point}
                  urlAvatar={item.avatar}
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
            {DATACARDTRENDINGPROJECT.map((item, index) => (
              <StyleTrendingCard key={item.id}>
                <Typography component={"h4"} color={"#949292"}>
                  {index + 1}
                </Typography>
                <CardTrendingProjects
                  avatar={item.avatar}
                  name={item.name}
                  wallet={item.wallet}
                  mention={item.mention}
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
