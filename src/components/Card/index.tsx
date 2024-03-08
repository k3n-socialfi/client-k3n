"use client";
import LikeIcon from "@/assets/icons/IconLike";
import TickIcon from "@/assets/icons/IconTick";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chips from "../Chip";
import {
  StyleChips,
  StyleContentTitle,
  StyleSubscribe,
  StyleTitleLeft,
  StyleTitleRight,
} from "./style";
import TwitterIcon from "@/assets/icons/IconTwitter";

const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Cards(props: any) {
  return (
    <Card sx={{ minWidth: 300, background: "#252525" }} {...props}>
      <div style={{ position: "relative" }}>
        {props.KOLs && (
          <StyleSubscribe>
            <Chips
              label="subscribe"
              variant="outlined"
              sx={{
                color: "#FFF",
                cursor: "pointer",
                border: "1px #F23581 solid",
              }}
            />
          </StyleSubscribe>
        )}
        <CardMedia sx={{ height: 140 }} image={IMG_NFT} title="green iguana" />
      </div>
      <CardContent>
        <StyleContentTitle>
          <StyleTitleLeft>
            Title
            {props.KOLs && <TickIcon />}
          </StyleTitleLeft>
          {props.KOLs && (
            <StyleTitleRight>
              <TwitterIcon />
              87.5K follower
            </StyleTitleRight>
          )}
        </StyleContentTitle>
        <StyleChips>
          <Chips label="Social Fi" variant="outlined" />
          <Chips label="Researcher" color="success" />
          <Chips label="Ethereum" color="warning" />
        </StyleChips>
      </CardContent>
      <CardActions sx={{ paddingLeft: "16px" }}>
        <Button
          sx={{ borderRadius: "14px" }}
          color="primary"
          variant="outlined"
          size="medium"
          startIcon={<LikeIcon />}
        >
          4.6M
        </Button>
      </CardActions>
    </Card>
  );
}
