"use client";
import React, { useState } from "react";
import ModalPayment01 from "./ModalPayment01";
import ModalPayment02 from "./ModalPayment02";
import ModalPayment03 from "./ModalPayment03";
import ModalPayment04 from "./ModalPayment04";

type Props = {};

const ModalPaymentSections = (props: Props) => {
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
        <ModalPayment02
          nextScreen={handleNextScreen}
          prevScreen={handlePrevScreen}
        />
      );
    case 1:
      return (
        <ModalPayment03
          nextScreen={handleNextScreen}
          prevScreen={handlePrevScreen}
        />
      );
    case 2:
      return (
        <ModalPayment04
          nextScreen={handleNextScreen}
          prevScreen={handlePrevScreen}
        />
      );
    default:
      return <ModalPayment01 nextScreen={handleNextScreen} />;
  }
};

export default ModalPaymentSections;
