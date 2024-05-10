import React from "react";

export interface IIconThunderProps {
  width?: number;
  height?: number;
}

export default function IconThunder({ width, height }: IIconThunderProps) {
  return (
    <svg
      width={width ?? 12}
      height={height ?? 20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.01169 19.9525C4.27626 20.0656 4.58388 19.9712 4.73841 19.7271L11.7697 8.55522C11.8835 8.3744 11.8904 8.14608 11.7874 7.95956C11.6844 7.77245 11.4876 7.65628 11.2741 7.65628H6.58146L8.32669 0.730146C8.39708 0.450341 8.25458 0.161357 7.98966 0.0474897C7.72646 -0.0657916 7.41689 0.0291694 7.26294 0.272919L0.231692 11.4448C0.117825 11.6256 0.11095 11.8539 0.213958 12.0405C0.316966 12.2276 0.513802 12.3437 0.727239 12.3437H5.4199L3.67466 19.2699C3.60427 19.5497 3.74673 19.8387 4.01169 19.9525Z"
        fill="#F23581"
      />
    </svg>
  );
}
