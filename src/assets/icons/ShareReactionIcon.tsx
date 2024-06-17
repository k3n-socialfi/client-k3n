import { TIcon } from "@/types/icons.type";

const ShareReactionIcon = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6764 5.0625C22.8327 4.79178 22.8327 4.45823 22.6764 4.1875C22.5201 3.91678 22.2312 3.75 21.9186 3.75L2.00002 3.75C1.65241 3.75 1.33777 3.95576 1.19841 4.27421C1.05906 4.59266 1.12142 4.9634 1.35728 5.21873L8.15135 12.5735L11.1238 22.1348C11.2269 22.4667 11.5168 22.7061 11.8623 22.7446C12.2078 22.7831 12.5433 22.6135 12.7171 22.3125L22.6764 5.0625ZM18.653 5.5L3.99951 5.5L9.09639 11.0175L18.653 5.5ZM9.97139 12.5331L12.2013 19.7059L19.5281 7.01553L9.97139 12.5331Z"
        fill={color ?? "white"}
      />
    </svg>
  );
};

export default ShareReactionIcon;
