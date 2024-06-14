import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
        prevSlide === slides?.length - 1 ? 0 : prevSlide + 1,
      );
    }, interval);
    return () => clearInterval(timer);
  }, [slides?.length, interval]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides?.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides?.length - 1 : prevSlide - 1,
    );
  };

  return (
    <Box sx={{ position: "relative", height: slideHeight }}>
      <Image
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <BoxCustom>
        {/* <IconButton onClick={goToPreviousSlide}>
          <ArrowBackIos />
          <FireIcon />
        </IconButton> */}
        <StackCustom>
          <Typography variant="h4" sx={{ color: "white" }}>
            YOUR #1 WEB3 Digital Services Platform for
          </Typography>
          <Typography variant="overline" sx={{ color: "white" }}>
            Projects Owners and KOLs
          </Typography>
          <Typography variant="caption" sx={{ color: "white" }}>
            {currentSlide + 1} / {slides?.length}
          </Typography>
        </StackCustom>
        {/* <IconButton onClick={goToNextSlide}>
          <ArrowForwardIos />
          <FireIcon />
        </IconButton> */}
      </BoxCustom>
    </Box>
  );
};

export default CarouselSlide;

const BoxCustom = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  padding: 0 20px;
`;

const StackCustom = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 520px) {
    h4 {
      font-size: 25px !important;
    }
  }
`;
