import { IIcon } from "@/interface/common.interface";

export default function IconMenuBar({ size = 32, color = "#BDBDBD" }: IIcon) {
  return (
    <svg
      width={size}
      height={size * (26 / 32)}
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" width="16" height="6" rx="2" fill={color} />
      <rect y="10" width="32" height="6" rx="2" fill={color} />
      <rect x="13" y="20" width="16" height="6" rx="2" fill={color} />
    </svg>
  );
}
