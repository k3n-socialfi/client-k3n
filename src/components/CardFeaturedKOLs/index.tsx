"use client";
import { IconCertification, IconStar, IconThunder } from "@/assets/icons";
import TwitterIcon from "@/assets/icons/IconTwitter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import {
  CustomAvatar,
  StyleChips,
  StyleContentTitle,
  StyleFollower,
  StyleTitleLeft,
  UserPoint,
} from "./style";
import { formatNumberToK } from "@/utils";
import TagList from "../TagList";
import Count from "../Count";
import Link from "next/link";

type TCardProps = {
  data: IUserKOL;
};

export default function CardFeaturedKOLs({ data }: TCardProps) {
  return (
    <Link href={`profile/${data?.username}`}>
      <Card
        sx={{
          minWidth: "281px",
          maxWidth: "281px",
          paddingTop: "19px",
          paddingX: "19px",
          background: "#191d24",
          borderRadius: "10px",
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
              borderRadius: "7px",
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
            <div className="text-[#82EBFF] flex space-x-2">
              <Count countTo={formatNumberToK(data?.twitterInfo?.followers)}/> <p>followers</p>
            </div>
          </StyleFollower>
          <StyleFollower
            style={{
              color: "var(--Text-Color-Text-Color600, rgba(145, 145, 145, 1))",
              marginTop: "10px",
            }}
          >
            Completed jobs: <span style={{ color: "#fff" }}>{0}</span>
          </StyleFollower>
          <StyleChips>
            {data && 
             <TagList tags={data?.tags}/>
            }
          </StyleChips>
        </CardContent>
      </Card>
    </Link>
  );
}
