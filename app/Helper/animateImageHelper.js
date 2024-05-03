import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const AnimateImageHelper = ({ imageSrc, imageAlt }) => {
  const Imagecontainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Imagecontainer,
    offset: ["start 0.5", "0.1 0.5"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useSpring(scrollYProgress);
  return (
    <div ref={Imagecontainer} className="flex w-40 rounded-full">
      <motion.img
        className="rounded-full"
        style={{ opacity: opacity, scale: scale }}
        whileInView={{ scale: [0.8, 1], transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default AnimateImageHelper;
