import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import { ButtonText } from "../ButtonCustom";
import { LinkCustom } from "../CardFeaturedKOLs/style";
import styled from "styled-components";

export interface ICardProjectProps { }

export default function CardTrendingProjects(props: any) {
  return (
    <Card
      sx={{ width: "100%", background: "#252525", borderRadius: 3 }}
      {...props}
    >
      <LinkCustom href={`/project/${props?.id}`}>
        <CustomCardContent>
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
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"white"}
              >
                {props?.name}
              </Typography>
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
                  color={"white"}
                >
                  #{props?.mention} mentions
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CustomCardContent>
      </LinkCustom>
    </Card>
  );
}

const CustomCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 11.5px !important;
  background-color: var(--background-primary) !important;
`