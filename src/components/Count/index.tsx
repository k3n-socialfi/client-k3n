'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Count({countTo} : {countTo: any}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, countTo, { duration: 4 });

    return animation.stop;
  }, []);

  return (
    <motion.div
      whileInView="onscreen"
      initial="offscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {rounded}
    </motion.div>
  );
}
