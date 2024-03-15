import FireIcon from "@/assets/icons/IconFire";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface CarouselSlideProps {
  slides: string[];
  interval?: number;
  slideHeight?: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slides,
  interval = 3000,
  slideHeight = "400px",
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <Box sx={{ position: "relative", height: slideHeight }}>
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(-50%)",
          paddingX: 2,
        }}
      >
        {/* <IconButton onClick={goToPreviousSlide}>
          <ArrowBackIos />
          <FireIcon />
        </IconButton> */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            YOUR #1 WEB3 Digital Services Platform for
          </Typography>
          <Typography variant="overline" sx={{ color: "white" }}>
            Projects Owners and KOLs
          </Typography>
          <Typography variant="caption" sx={{ color: "white" }}>
            {currentSlide + 1} / {slides.length}
          </Typography>
        </Stack>
        {/* <IconButton onClick={goToNextSlide}>
          <ArrowForwardIos />
          <FireIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default CarouselSlide;
