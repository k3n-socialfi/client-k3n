"use client";
import { chipBg, chipColor, IChip } from "@/utils/chip";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { LinkCustom } from "../CardFeaturedKOLs/style";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";

interface ICardProjectProps {
  data: ITrendingProjects;
}

export default function CardTrendingProjects({ data }: ICardProjectProps) {
  return (
    <Card sx={{ width: "100%", background: "#252525", borderRadius: 3 }}>
      <LinkCustom href={`/project/${data?.id}`}>
        <CustomCardContent>
          <StackCustom direction="row" spacing={2}>
            <Avatar
              alt={data?.name}
              src={data?.small}
              sx={{ width: 56, height: 56 }}
            />

            <Content>
              <Name>{data?.name}</Name>
              <Detail>
                <Chip>
                  <ItemChip
                    bg={chipBg[data?.symbol as keyof IChip]}
                    color={chipColor[data?.symbol as keyof IChip]}
                  >
                    <Typography variant="subtitle2">{data?.symbol}</Typography>
                  </ItemChip>
                </Chip>

                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="span"
                  color={"white"}
                >
                  #{data?.marketCapRank} mentions
                </Typography>
              </Detail>
            </Content>
          </StackCustom>
        </CustomCardContent>
      </LinkCustom>
    </Card>
  );
}

const CustomCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 0px !important;
  background-color: var(--background-primary) !important;
`;

const StackCustom = styled(Stack)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  &:hover {
    background-color: #191d24;
    .MuiTypography-body1 {
      color: #82ebff !important;
    }
    span {
      color: #82ebff !important;
    }
  }
`;

const Content = styled(Stack)`
  flex-direction: column;
`;

const Name = styled(Typography)<any>`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const Detail = styled(Stack)`
  display: flex;
  flex-direction: row !important;
  gap: 10px;
  align-items: end;
`;

const Chip = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 7.5px 0;
`;

const ItemChip = styled.div<any>`
  padding: 2px 8px;
  border-radius: 99px;
  background-color: ${(props) => props.bg ?? "#FFD7F4"};
  color: ${(props) => props.color ?? "#F23581"};
`;
