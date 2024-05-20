"use client";
import { IconStar, IconThunder, IconVerify } from "@/assets/icons";
import IMGAvatar from "@/assets/images/IMGPoint.png";
import IMG from "@/assets/images/SignUpK3N.png";
import { chipBg, chipColor, IChip } from "@/utils/chip";
import { Avatar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";
import { LinkCustom } from "../CardFeaturedKOLs/style";

interface ICardProps {
  data: IServices;
}

export default function CardServices({ data }: ICardProps) {
  return (
    <CardCustom>
      <LinkCustom href={`/services/payment/${data?.jobId}`}>
        <CardMediaCustom image={data?.image ?? IMG.src} title="green iguana" />
      </LinkCustom>
      <CardContentCustoms>
        <Info>
          <AvatarCustom alt="" src={data?.image ?? IMGAvatar.src} />
          <NamePoint>
            <Rows>
              <Typography variant="h6">
                {data?.projectName ?? "Declan Rice"}
              </Typography>
              <IconVerify width={12} height={12} />
            </Rows>
            <Rows>
              <IconThunder width={12} height={12} />
              <Typography variant="body1">0</Typography>
            </Rows>
          </NamePoint>
        </Info>
        <Chip>
          {(data?.tags ?? []).map((item) => (
            <ItemChip
              key={item}
              bg={chipBg[item as keyof IChip]}
              color={chipColor[item as keyof IChip]}
            >
              <Typography variant="subtitle2">{item}</Typography>
            </ItemChip>
          ))}
        </Chip>
        <Title>
          <Typography variant="h6">
            {data?.jobDescription ?? "Sustainable Future"}
          </Typography>
        </Title>
        <Detail>
          <Columns>
            <TypographyDetailTitle>Offer</TypographyDetailTitle>
            <TypographyDetailValue>
              {data?.offers?.[0] ?? 0}
            </TypographyDetailValue>
          </Columns>
          <Columns>
            <TypographyDetailTitle>Avg.Rating</TypographyDetailTitle>
            <TypographyDetailValue>
              <IconStar width={8} height={8} /> {data?.rating ?? 0}
            </TypographyDetailValue>
          </Columns>
          <Columns>
            <TypographyDetailTitle>Price</TypographyDetailTitle>
            <TypographyDetailValue>${data?.price ?? 0}</TypographyDetailValue>
          </Columns>
        </Detail>
      </CardContentCustoms>
    </CardCustom>
  );
}

const CardCustom = styled(Card)<any>`
  min-width: 342px;
  min-height: 446px;
  background-color: #191d24 !important;
  border-radius: 12px;
`;

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
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    color: #fff;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .MuiTypography-body1 {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    color: #fff;
    max-width: 200px;
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
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemChip = styled.div<any>`
  padding: 2px 8px;
  border-radius: 99px;
  background-color: ${(props) => props.bg ?? "#FFD7F4"};
  color: ${(props) => props.color ?? "#F23581"};
`;

const Title = styled.div`
  h6 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    color: #fff;
    max-width: 200px;
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
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
`;

const TypographyCustoms = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
