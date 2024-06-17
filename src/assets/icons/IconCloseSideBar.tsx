import { IIcon } from "@/interface/common.interface";

export default function IconCloseSideBar({
  size = 41,
  color = "#191D24",
}: IIcon) {
  return (
    <svg
      width={size}
      height={size * (40 / 41)}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.566406" width="40" height="40" rx="20" fill={color} />
      <path
        d="M25.1134 13.88L23.2334 12L15.2334 20L23.2334 28L25.1134 26.12L19.0067 20L25.1134 13.88Z"
        fill="white"
      />
    </svg>
  );
}
