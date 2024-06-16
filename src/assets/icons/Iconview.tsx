import { TIcon } from "@/types/icons.type";
import React from "react";

const Iconview = ({ height, width, color }: TIcon) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 6.25C13.5 7.2165 12.7165 8 11.75 8C10.7835 8 10 7.2165 10 6.25C10 5.2835 10.7835 4.5 11.75 4.5C12.7165 4.5 13.5 5.2835 13.5 6.25Z"
        fill={color ?? "#A7A7A7"}
      />
      <path
        d="M13.5 12.25C13.5 13.2165 12.7165 14 11.75 14C10.7835 14 10 13.2165 10 12.25C10 11.2835 10.7835 10.5 11.75 10.5C12.7165 10.5 13.5 11.2835 13.5 12.25Z"
        fill={color ?? "#A7A7A7"}
      />
      <path
        d="M11.75 20C12.7165 20 13.5 19.2165 13.5 18.25C13.5 17.2835 12.7165 16.5 11.75 16.5C10.7835 16.5 10 17.2835 10 18.25C10 19.2165 10.7835 20 11.75 20Z"
        fill={color ?? "#A7A7A7"}
      />
    </svg>
  );
};

export default Iconview;
