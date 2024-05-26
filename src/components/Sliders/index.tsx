import React from "react";
import { Slider } from "@mui/material";

export default function Sliders(props: any) {
  const { isFollower, isShillScore, valueShillScore, setValueShillScore, valueFollower, setValueFollower, setFilter, maxNumberShillScore, maxNumberFollower } = props

  const valuetext = (value: number) => {
    return `${value}follower`;
  }

  const handleChangeSlide = (event: Event, newValue: number | number[]) => {
    if (isShillScore) {
      setValueShillScore(newValue as number[]);
      setFilter((prevFilter: any) => {
        return {
          ...prevFilter,
          minShillScore: valueShillScore[0],
          maxShillScore: valueShillScore[1],
        };
      });
    }
    if (isFollower) {
      setValueFollower(newValue as number[]);
      setFilter((prevFilter: any) => {
        return {
          ...prevFilter,
          minFollower: valueFollower[0],
          maxFollower: valueFollower[1],
        };
      });
    }
  };

  return (
    <Slider
      getAriaLabel={() => 'Minimum distance shift'}
      value={valueFollower || valueShillScore}
      onChange={handleChangeSlide}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
      max={maxNumberFollower || maxNumberShillScore}
    />
  );
}

