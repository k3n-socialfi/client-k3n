"use client";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyleChips } from "../style";

export default function CardServicesSkeleton(props: any) {
  return (
    <Card sx={{ minWidth: 350, background: "#252525" }}>
      <div style={{ position: "relative" }}>
        <LoadingSkeleton height="300px" />
      </div>
      <CardContent>
        <LoadingSkeleton height="25px" width="250px" />
        <StyleChips>
          {[0, 1, 2].map((item: any) => (
            <>
              <LoadingSkeleton height="30px" width="100px" radius="80px" />
            </>
          ))}
        </StyleChips>
      </CardContent>
    </Card>
  );
}
