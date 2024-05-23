"use client";
import { IconCertification, IconStar, IconThunder } from "@/assets/icons";
import TwitterIcon from "@/assets/icons/IconTwitter";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { ButtonText } from "../ButtonCustom";
import {
  CustomAvatar,
  LinkCustom,
  StyleChips,
  StyleContentTitle,
  StyleFollower,
  StyleTitleLeft,
  UserPoint,
} from "./style";
import { formatNumberToK } from "@/utils";
import Chip from "../Chip";

type TCardProps = {
  data: IUserKOL;
};

export default function CardFeaturedKOLs({ data }: TCardProps) {
  return (
    <LinkCustom href={`profile/${data?.username}`}>
      <Card
        sx={{
          minWidth: "281px",
          maxWidth: "281px",
          padding: "19px",
          background: "#252525",
          borderRadius: "18px",
          transition: "all 1s ease-in;",
        }}
        {...data}
      >
        <CustomAvatar>
          <Image
            width={243}
            height={243}
            src={data?.twitterInfo?.avatar}
            style={{
              borderRadius: "18px",
            }}
            alt="green iguana"
          />
          <UserPoint>
            <IconThunder />
            <span>{data?.twitterInfo?.totalPoints}</span>
            |
            <IconStar />
            <span>{data?.review}</span>
          </UserPoint>
        </CustomAvatar>
        <CardContent sx={{ padding: "16px 0" }}>
          <StyleContentTitle>
            <StyleTitleLeft>
              {data?.fullName?.slice(0, 15)}
              {data?.twitterInfo?.verificationStatus && <IconCertification />}
            </StyleTitleLeft>
          </StyleContentTitle>
          <StyleFollower>
            <TwitterIcon />
            <Typography color={"#82EBFF"}>
              {formatNumberToK(data?.twitterInfo?.followers)} follower
            </Typography>
          </StyleFollower>
          <StyleFollower
            style={{
              color: "var(--Text-Color-Text-Color600, rgba(145, 145, 145, 1))",
              marginTop: "10px",
            }}
          >
            Completed jobs <span style={{ color: "#fff" }}>{0}</span>
          </StyleFollower>
          <StyleChips>
            {data?.tags?.map(
              (item: string) =>
                item && <Chip key={item} label={item} color="secondary" />,
            )}
          </StyleChips>
        </CardContent>
      </Card>
    </LinkCustom>
  );
}
