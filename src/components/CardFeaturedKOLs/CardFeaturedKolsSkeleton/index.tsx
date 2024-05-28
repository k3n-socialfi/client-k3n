"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  StyleChips,
  StyleContentTitle,
  StyleFollower,
  StyleTitleLeft,
  StyleTitleRight,
} from "../style";
import { Divider, Skeleton, Typography } from "@mui/material";
import { ButtonText } from "@/components/ButtonCustom";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function CardFeaturedKolsSkeleton(props: any) {
  return (
    <Card sx={{ minWidth: 350, background: "#252525" }} {...props}>
      <div
        style={{
          paddingTop: "20px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* h-[200px] w-[215px] lg:h-[300px] lg:w-[350px] */}
        <LoadingSkeleton height="300px" width="350px" radius="100%" />
      </div>
      <CardContent>
        <StyleContentTitle>
          <StyleTitleLeft>
            <LoadingSkeleton height="10px" width="100px" />
            <LoadingSkeleton height="10px" width="10px" />
          </StyleTitleLeft>
          <StyleTitleRight>
            <LoadingSkeleton height="30px" width="60px" radius="50px" />
          </StyleTitleRight>
        </StyleContentTitle>
        <StyleFollower>
          <LoadingSkeleton height="10px" width="10px" />
          <LoadingSkeleton height="10px" width="100px" />
        </StyleFollower>
        <Divider color={"#C4C4C4"} sx={{ m: 2 }} />

        <StyleChips>
          {props?.wallet?.map((item: any) => (
            <>
              <ButtonText
                size="small"
                borderColorBt={item?.background}
                backgroundColorBt={item?.background}
              >
                <Typography color={item?.color} sx={{ padding: "0 5px" }}>
                  {item.label}
                </Typography>
              </ButtonText>
            </>
          ))}
        </StyleChips>
      </CardContent>
    </Card>
  );
}
