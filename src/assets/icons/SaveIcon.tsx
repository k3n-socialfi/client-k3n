import { TIcon } from "@/types/icons.type";

const SaveIcon = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1696_25279)">
        <path
          d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20.692C21 21.5674 19.9548 22.0203 19.3161 21.4216L12.9218 15.4279C12.5451 15.0748 11.9616 15.0665 11.575 15.4087L4.66285 21.5279C4.01751 22.0992 3 21.6411 3 20.7792V3Z"
          fill={color ?? "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1696_25279">
          <rect width="24" height="24" fill={color ?? "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SaveIcon;
