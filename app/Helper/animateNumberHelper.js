import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedElement = ({ endValue, duration, delay }) => {
  const variants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration || 1.25,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const ref = useRef(null);
  const useView = useInView(ref, { amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (useView) {
      const animation = animate(count, endValue, {
        duration: duration || 10, // Set a default duration if not provided
        delay: delay,
      });

      return () => animation.stop();
    }
  }, [count, endValue, duration, useView]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={useView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.span variants={variants}>{rounded}</motion.span>
    </motion.span>
  );
};

export default AnimatedElement;
