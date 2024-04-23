"use client";
import IconLike from "@/assets/icons/IconLike";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  StyleChips,
  StyleContentTitle,
  StyleFollower,
  StyleTitleLeft,
  StyleTitleRight,
  LinkCustom,
  CustomAvatar,
  CustomImage,
  Subscribe,
} from "./style";
import TwitterIcon from "@/assets/icons/IconTwitter";
import { ButtonPrimary, ButtonText } from "../ButtonCustom";
import { IconCertification } from "@/assets/icons";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function CardFeaturedKOLs(props: any) {
  return (
    <Card sx={{ minWidth: 350, background: "#252525" }} {...props}>
      <LinkCustom href={`profile/${props?.username}`}>
        <CustomAvatar>
          <Subscribe>
            <ButtonPrimary size="medium">subscribe</ButtonPrimary>
          </Subscribe>
          <CustomImage>
            <Image
              width={222}
              height={222}
              src={props?.thumbnail}
              style={{
                borderRadius: "50%",
                margin: "-2px",
                padding: "1px",
              }}
              alt="green iguana"
            />
          </CustomImage>
        </CustomAvatar>
        <CardContent style={{ marginTop: "50px" }}>
          <StyleContentTitle>
            <StyleTitleLeft>
              {props?.name}
              {props?.status && <IconCertification />}
            </StyleTitleLeft>
            <StyleTitleRight>
              <CardActions sx={{ paddingLeft: "16px" }}>
                <ButtonText
                  startIcon={<IconLike />}
                  size="medium"
                  borderColorBt={"#4D4D5C"}
                  backgroundColorBt={"#4D4D5C"}
                >
                  <Typography color={"#FFF"} sx={{ padding: "0 5px" }}>
                    {props?.numberLike}
                  </Typography>
                </ButtonText>
              </CardActions>
            </StyleTitleRight>
          </StyleContentTitle>
          <StyleFollower>
            <TwitterIcon />
            <Typography color={"#82EBFF"}>{props.follower} follower</Typography>
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
      </LinkCustom>
    </Card>
  );
}
