export default function IconPointProfile({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <svg
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1065_7791)">
        <path
          d="M8.01108 19.9525C8.27565 20.0656 8.58327 19.9712 8.7378 19.7271L15.7691 8.55519C15.8829 8.37437 15.8898 8.14605 15.7868 7.95953C15.6838 7.77242 15.4869 7.65625 15.2735 7.65625H10.5808L12.3261 0.730115C12.3965 0.450311 12.254 0.161326 11.9891 0.0474592C11.7258 -0.0658221 11.4163 0.0291389 11.2623 0.272889L4.23108 11.4448C4.11721 11.6256 4.11034 11.8539 4.21335 12.0404C4.31636 12.2275 4.51319 12.3437 4.72663 12.3437H9.41928L7.67405 19.2698C7.60366 19.5497 7.74612 19.8386 8.01108 19.9525Z"
          fill={color ?? "#F23581"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1065_7791">
          <rect width={width ?? "20"} height={height ?? "20"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
