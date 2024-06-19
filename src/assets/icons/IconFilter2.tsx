import { TIcon } from "@/types/icons.type";
import React from "react";

const IconFilter2 = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? "9"}
      height={height ?? "17"}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.173148 4.98858C0.125775 4.87439 0.11333 4.74871 0.137387 4.62745C0.161445 4.50619 0.220925 4.39478 0.308304 4.30733L4.0583 0.557328C4.11635 0.499217 4.18528 0.453118 4.26115 0.421665C4.33703 0.390212 4.41836 0.374023 4.50049 0.374023C4.58263 0.374023 4.66396 0.390212 4.73983 0.421665C4.8157 0.453118 4.88463 0.499217 4.94268 0.557328L8.69268 4.30733C8.78019 4.39474 8.83979 4.50615 8.86395 4.62745C8.8881 4.74875 8.87573 4.8745 8.82838 4.98876C8.78104 5.10302 8.70085 5.20067 8.59798 5.26934C8.49511 5.33801 8.37418 5.37461 8.25049 5.37452H0.750492C0.62688 5.37449 0.506051 5.33781 0.403284 5.26911C0.300518 5.20042 0.22043 5.10279 0.173148 4.98858ZM8.25049 11.6245H0.750492C0.626807 11.6244 0.505875 11.661 0.403004 11.7297C0.300132 11.7984 0.219948 11.896 0.172603 12.0103C0.125258 12.1245 0.11288 12.2503 0.137036 12.3716C0.161193 12.4929 0.220797 12.6043 0.308304 12.6917L4.0583 16.4417C4.11635 16.4998 4.18528 16.5459 4.26115 16.5774C4.33703 16.6088 4.41836 16.625 4.50049 16.625C4.58263 16.625 4.66396 16.6088 4.73983 16.5774C4.8157 16.5459 4.88463 16.4998 4.94268 16.4417L8.69268 12.6917C8.78019 12.6043 8.83979 12.4929 8.86395 12.3716C8.8881 12.2503 8.87573 12.1245 8.82838 12.0103C8.78104 11.896 8.70085 11.7984 8.59798 11.7297C8.49511 11.661 8.37418 11.6244 8.25049 11.6245Z"
        fill={color ?? "#676767"}
      />
    </svg>
  );
};

export default IconFilter2;