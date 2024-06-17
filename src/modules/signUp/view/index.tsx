"use client";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

type Props = {};

const SignUp = (props: Props) => {
  // const token =
  //   typeof window !== "undefined" && localStorage.getItem("accessToken");

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SignUp;
