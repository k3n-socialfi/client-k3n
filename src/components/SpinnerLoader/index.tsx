import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

export function SpinnerLoader() {
  const text = "LOADING! LOADING! LOADING!";
  const characters = text.split("");

  const radius = 200;
  const fontSize = "30px";
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: any[] = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
        ]);
      });
      animate(letterAnimation, {
        repeat: Infinity
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, [animate, characters, scope]);

  return (
    <motion.div ref={scope} className="circle" style={{ width: radius * 2 }}>
      <span aria-label={text} />
      <span aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`letter letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize
            }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
