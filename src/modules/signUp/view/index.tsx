"use client";

import k3nImg from "@/assets/svgs/common/k3n.svg";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

type Props = {};

const SignUp = (props: Props) => {
  // const token =
  //   typeof window !== "undefined" && localStorage.getItem("accessToken");

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen">
      <LeftSide img={k3nImg} />
      <RightSide />
    </div>
  );
};

export default SignUp;
