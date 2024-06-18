import { TIcon } from "@/types/icons.type";

const HeartIconReaction = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1696_25271)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.50053 3.71298C4.85985 3.71298 2.79599 5.77684 2.79599 8.41752C2.79599 10.0462 3.5213 11.5862 4.96001 13.3452C6.40785 15.1153 8.49387 17.0087 11.0849 19.3583L11.086 19.3593L12.0026 20.1937L12.9156 19.3688L12.9167 19.3678C15.5074 17.0136 17.5931 15.1179 19.0409 13.3466C20.4798 11.5862 21.2051 10.0462 21.2051 8.41752C21.2051 5.77684 19.1412 3.71298 16.5005 3.71298C15.0014 3.71298 13.5501 4.41475 12.6062 5.52325C12.455 5.70073 12.2336 5.80298 12.0005 5.80298C11.7674 5.80298 11.546 5.70073 11.3949 5.52325C10.451 4.41475 8.99968 3.71298 7.50053 3.71298ZM1.20508 8.41752C1.20508 4.89821 3.98122 2.12207 7.50053 2.12207C9.18089 2.12207 10.795 2.78285 12.0005 3.86939C13.2061 2.78285 14.8202 2.12207 16.5005 2.12207C20.0199 2.12207 22.796 4.89821 22.796 8.41752C22.796 10.5688 21.8213 12.4588 20.2727 14.3534C18.749 16.2175 16.5892 18.1802 14.0643 20.4746L13.9838 20.5478L12.5338 21.8578C12.2301 22.1322 11.7677 22.1313 11.465 21.8557L10.015 20.5357L9.96279 20.4884C7.42674 18.1887 5.25749 16.2217 3.72856 14.3524C2.17977 12.4589 1.20508 10.5688 1.20508 8.41752Z"
          fill={color ?? "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1696_25271">
          <rect width="24" height="24" fill={color ?? "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartIconReaction;
