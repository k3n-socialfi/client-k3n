import { IIcon } from "@/interface/common.interface";

export default function IconCopy({ size = 16, color = "#A5A1A1" }: IIcon) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="16"
        height="16"
        fill="white"
        fillOpacity="0.01"
        className="mix-blend-mode:multiply"
      />
      <path
        d="M14 5V14H5V5H14ZM14 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4Z"
        fill={color}
      />
      <path
        d="M2 9H1V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H9V2H2V9Z"
        fill={color}
      />
    </svg>
  );
}
