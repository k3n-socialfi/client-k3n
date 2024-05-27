"use client";

import { IconStar, IconThunder, IconVerify } from "@/assets/icons";
import IMGAvatar from "@/assets/images/IMGPoint.png";
import { Avatar, Typography } from "@mui/material";
import BGService from "@/assets/images/BgSignUpK3N.png";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";
import TagList from "../TagList";
import Link from "next/link";
import Image from "next/image";
import Count from "../Count";

interface ICardProps {
  data: IServices;
}

export default function CilassardServices({ data }: ICardProps) {
  return (
    <div className="w-[350px] bg-[#191d24] rounded-[12px] transition-all duration-200 hover:scale-105 overflow-hidden">

      <Link href={`/services/payment/${data?.jobId}`}>
        <Image src={data?.image ?? BGService.src} title="green iguana" width={1920} height={1080} alt="image"/>
      </Link>
      <CardContentCustoms>
        <Info>
          <AvatarCustom
            alt={data?.creatorInfo?.fullName ?? "avatar"}
            src={data?.creatorInfo?.twitterInfo?.avatar ?? IMGAvatar?.src}
          />
          <NamePoint>
            <Rows>
              <Typography variant="h6">
                {data?.creatorInfo?.fullName ?? ""}
              </Typography>
              <IconVerify width={12} height={12} />
            </Rows>
            <Rows>
              <IconThunder width={12} height={12} />
              <Typography variant="body1">
                {data?.creatorInfo?.twitterInfo?.totalPoints ?? 0}
              </Typography>
            </Rows>
          </NamePoint>
        </Info>
        <Chip>
          <TagList tags={data?.tags ?? []} />
        </Chip>
        <Title>
          <Typography variant="h6">{data?.projectName ?? ""}</Typography>
        </Title>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-gray-400">Offer</h2>
            <span className="text-white"> {data?.offers?.[0] ?? 0}</span>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-gray-400">Avg.Rating</h2>
            <div className="flex space-x-1 items-center">
              <IconStar width={12} height={12} />
              <span className="text-white"> {data?.rating ?? 0}</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-gray-400">Price</h2>
            <span className="flex space-x-1 text-white">
              <span>$</span><Count countTo={data?.price ?? 0}/>
            </span>
          </div>
        </div>
      </CardContentCustoms>
      
    </div>
  );
}

const CardMediaCustom = styled(CardMedia)<any>`
  height: 222px;
`;

const CardContentCustoms = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background-color: #191d24;
  gap: 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const AvatarCustom = styled(Avatar)`
  width: 56px;
  height: 56px;
  border: 2px solid #82ebff;
`;

const NamePoint = styled.div`
  color: #fff;
`;
const Rows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  h6 {
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 21.6px;
  color: #fff;
  max-width: 222px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }

  .MuiTypography-body1 {
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 16.8px;
  color: #fff;
  max-width: 222px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
`;

const Chip = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 7.5px 0;
  max-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  text-overflow: ellipsis;
  &::-webkit-scrollbar {
  display: none;
  }
`;

const Title = styled.div`
  h6 {
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  color: #fff;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  color: #fff;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

const TypographyDetailTitle = styled(Typography)<any>`
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 14.4px !important;
  color: #919191 !important;
`;

const TypographyDetailValue = styled(Typography)<any>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500 !important;
  color: #fff !important;
  font-size: 10px !important;
  line-height: 12px !important;
  span {
    max-width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis !important;
  }
`;

const TypographyCustoms = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
