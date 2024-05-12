"use client";
import IconLike from "@/assets/icons/IconLike";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonText } from "../ButtonCustom";
import { StyleChips, StyleSubscribe } from "./style";
import { LinkCustom } from "../CardFeaturedKOLs/style";
import styled from "styled-components";

export default function CardFeaturedProjects(props: any) {
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <Card
      sx={{ minWidth: 350, minHeight: 350, background: "#252525" }}
      {...props}
    >
      <LinkCustom href={`/project/${props?.id}`}>
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
            image={props?.thumbnail ?? IMG2}
            title="green iguana"
          />
        </div>
      </LinkCustom>
      <CardContentCustoms>
        <TypographyCustoms variant="h5" color={"#82EBFF"}>
          {props?.name}
        </TypographyCustoms>
        <StyleChips>
          {props?.wallet?.map(
            (item: any) =>
              item?.label && (
                <ButtonText
                  key={item?.label}
                  size="small"
                  borderColorBt={item?.background}
                  backgroundColorBt={item?.background}
                >
                  <Typography
                    color={item?.color}
                    sx={{ padding: "0 5px", whiteSpace: "nowrap" }}
                  >
                    {item?.label}
                  </Typography>
                </ButtonText>
              ),
          )}
        </StyleChips>
      </CardContentCustoms>
    </Card>
  );
}

const CardContentCustoms = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TypographyCustoms = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
