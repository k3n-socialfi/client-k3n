import { TIcon } from "@/types/icons.type";
import React from "react";

const IconChat = ({ height, width, color }: TIcon) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9766 18.5243C17.2677 18.6423 17.5998 18.5952 17.8467 18.4008C18.0942 18.2059 18.2178 17.893 18.1703 17.5816L18.3695 18.8888C18.3841 18.9848 18.2885 19.0601 18.1986 19.0234L16.9766 18.5243Z"
        fill="#E9E9E9"
        stroke="#A7A7A7"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconChat;
