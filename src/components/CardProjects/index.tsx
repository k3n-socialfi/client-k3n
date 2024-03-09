import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import Chips from "../Chip";

export interface ICardProjectProps {}

export default function CardProject(props: ICardProjectProps) {
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

          <Stack direction="column">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"white"}
            >
              Grass
            </Typography>
            <Stack
              sx={{ display: "flex", gap: 1, alignItems: "end" }}
              direction="row"
            >
              <Chips label="SocialFi" color="warning" />
              <Typography
                gutterBottom
                variant="subtitle2"
                component="span"
                color={"gray"}
              >
                #1234
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
