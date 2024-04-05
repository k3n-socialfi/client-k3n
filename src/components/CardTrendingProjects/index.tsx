import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import Chips from "../Chip";
import { ButtonText } from "../ButtonCustom";
import { LinkCustom } from "../CardFeaturedKOLs/style";

export interface ICardProjectProps {}

export default function CardTrendingProjects(props: any) {
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
            alt={props?.name}
            src={props?.avatar}
            sx={{ width: 56, height: 56 }}
          />

          <Stack direction="column">
            <LinkCustom href={`/project/${props?.id}`}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"white"}
              >
                {props?.name}
              </Typography>
            </LinkCustom>
            <Stack
              sx={{ display: "flex", gap: 1, alignItems: "end" }}
              direction="row"
            >
              <ButtonText
                size="small"
                borderColorBt={"#FFD7F4"}
                backgroundColorBt={"#FFD7F4"}
              >
                <Typography color={"#F23581"} sx={{ padding: "0 5px" }}>
                  {props?.wallet}
                </Typography>
              </ButtonText>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="span"
                color={"gray"}
              >
                #{props?.mention} mentions
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
