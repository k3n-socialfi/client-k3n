import FireIcon from "@/assets/icons/IconFire";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import Chips from "../Chip";

export interface ITrendingKOLsTopProps { }

export default function TrendingKOLsTop(props: ITrendingKOLsTopProps) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        backgroundImage: "linear-gradient(to right, #9A96B7, #F23581)",
        border: "3px #F23481 solid",
        borderRadius: "10px",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: "2px #F23481 solid" }}
          />
          <Typography sx={{ color: "white" }}>ElenaABC</Typography>
          <Chips label="Top 3" color="warning" />
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FireIcon />
            <Typography
              gutterBottom
              variant="h5"
              component="span"
              color={"#31D673"}
            >
              80%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 80,
              height: 80,
              border: "2px #F23481 solid",
            }}
          />
          <Typography sx={{ color: "white" }}>Elena123</Typography>
          <Chips label="Top 1" color="warning" />
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FireIcon />
            <Typography
              gutterBottom
              variant="h5"
              component="span"
              color={"#31D673"}
            >
              100%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: "2px #F23481 solid" }}
          />
          <Typography sx={{ color: "white" }}>Elena45KOLs</Typography>
          <Chips label="Top 2" color="warning" />
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FireIcon />
            <Typography
              gutterBottom
              variant="h5"
              component="span"
              color={"#31D673"}
            >
              90%
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
