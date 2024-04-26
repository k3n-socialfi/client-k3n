"use client";
import React, { useState } from "react";
import Payment01 from "./Payment01";
import Payment03 from "./Payment03";
import Payment02 from "./Payment02";
import { useServiceDetailCtx } from "../../contexts/ServiceDetailCtx";

type Props = {};

const PaymentSections = (props: Props) => {
  const [screen, setScreen] = useState(-1);

  const handlePrevScreen = () => {
    setScreen((prev) => prev - 1);
  };

  const handleNextScreen = () => {
    setScreen((prev) => prev + 1);
  };

  switch (screen) {
    case 0:
      return (
        <Payment02
          nextScreen={handleNextScreen}
          prevScreen={handlePrevScreen}
        />
      );
    case 1:
      return (
        <Payment03
          nextScreen={handleNextScreen}
          prevScreen={handlePrevScreen}
        />
      );
    default:
      return <Payment01 nextScreen={handleNextScreen} />;
  }
};

export default PaymentSections;
