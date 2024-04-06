import { ButtonText } from "@/components/ButtonCustom";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

export interface ICardProjectProps {}

export default function CardTrendingProjectsSkeleton(props: any) {
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
          <LoadingSkeleton height="60px" width="60px" radius="100%" />
          <Stack direction="column" gap="10px">
            <LoadingSkeleton height="30px" width="150px" />
            <Stack
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
              direction="row"
            >
              <LoadingSkeleton height="30px" width="100px" radius="20px" />
              <LoadingSkeleton height="15px" width="80px" />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
