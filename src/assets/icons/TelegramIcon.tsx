import { TIcon } from "@/types/icons.type";
import React from "react";

const TelegramIcon = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM8.16667 14.5833L8.33681 12.0343L8.33667 12.0342L12.9737 7.84958C13.1772 7.66897 12.9293 7.58089 12.6591 7.74472L6.93637 11.3551L4.46445 10.5836C3.93062 10.4202 3.92679 10.0533 4.5843 9.78961L14.2168 6.07536C14.6567 5.87562 15.0814 6.18102 14.9134 6.85437L13.273 14.5846C13.1585 15.134 12.8265 15.2653 12.3667 15.0116L9.8678 13.1654L8.66667 14.3333C8.66288 14.337 8.65911 14.3407 8.65536 14.3443C8.52102 14.4751 8.40988 14.5833 8.16667 14.5833Z"
        fill={color ?? "#BDBDBD"}
      />
    </svg>
  );
};

export default TelegramIcon;
