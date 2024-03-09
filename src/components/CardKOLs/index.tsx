import FireIcon from "@/assets/icons/IconFire";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import * as React from "react";

export interface ICardKOLsProps { }

export default function CardKOLs(props: ICardKOLsProps) {
  return (
    <Card
      sx={{ width: "100%", background: "#252525", borderRadius: 3 }}
      {...props}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography gutterBottom variant="h5" component="div" color={"white"}>
            Meg
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <FireIcon />
          <Typography
            gutterBottom
            variant="h5"
            component="span"
            color={"green"}
          >
            90%
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
