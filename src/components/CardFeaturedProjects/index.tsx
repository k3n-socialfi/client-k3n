"use client";
import IconLike from "@/assets/icons/IconLike";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonText } from "../ButtonCustom";
import Chips from "../Chip";
import { StyleChips, StyleSubscribe } from "./style";
import Link from "next/link";
import { LinkCustom } from "../CardFeaturedKOLs/style";

export default function CardFeaturedProjects(props: any) {
  return (
    <Card sx={{ minWidth: 350, background: "#252525" }} {...props}>
      <div style={{ position: "relative" }}>
        <StyleSubscribe>
          <ButtonText
            startIcon={<IconLike />}
            size="medium"
            borderColorBt={"textCustom.borderLike"}
            backgroundColorBt="#4D4D5C"
          >
            <Typography color={"#FFF"} sx={{ padding: "0 5px" }}>
              {props?.numberLike}
            </Typography>
          </ButtonText>
        </StyleSubscribe>

        <CardMedia
          sx={{ height: "222px" }}
          image={props?.thumbnail}
          title="green iguana"
        />
      </div>
      <CardContent>
        <LinkCustom href={`/jobs/${props?.id}`}>
          <Typography variant="h5" color={"#82EBFF"}>
            {props?.name}
          </Typography>
        </LinkCustom>

        <StyleChips>
          {props?.wallet?.map((item: any) => (
            <>
              <ButtonText
                size="small"
                borderColorBt={item?.background}
                backgroundColorBt={item?.background}
              >
                <Typography color={item?.color} sx={{ padding: "0 5px" }}>
                  {item?.label}
                </Typography>
              </ButtonText>
            </>
          ))}
        </StyleChips>
      </CardContent>
    </Card>
  );
}
