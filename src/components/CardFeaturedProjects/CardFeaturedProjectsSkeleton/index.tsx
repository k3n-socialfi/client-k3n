"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyleChips, StyleSubscribe } from "../style";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function CardFeaturedProjectsSkeleton(props: any) {
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
