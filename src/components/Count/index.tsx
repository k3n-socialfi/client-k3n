"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Count({
  countTo,
  textColor,
}: {
  countTo: any;
  textColor?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, countTo, { duration: 4 });

    return animation.stop;
  }, [count, countTo]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      className={`${textColor && textColor}`}
    >
      {rounded}
    </motion.div>
  );
}
