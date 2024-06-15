import { TIcon } from "@/types/icons.type";

export default function IconCheck({height, width, color}: TIcon) {
  return (
    <svg
      width={width ?? "12"}
      height={height ?? "13"}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="5.99957"
        cy="6.50006"
        rx="6.0025"
        ry="6.0025"
        fill={color ?? "#F23581"}
      />
      <path
        d="M3.62793 6.72613L5.0732 8.1714L5.06386 8.16206L8.32455 4.90137"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
