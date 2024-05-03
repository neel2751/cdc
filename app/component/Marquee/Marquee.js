import React, { forwardRef, useEffect, useRef } from "react";
import Video from "../Hero/video";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";

const Marquee = forwardRef(function index(prop, ref) {
  return (
    <div
      ref={ref}
      data-src="images/Bird.svg"
      className="group w-full overflow-hidden text-[#242A3D] py-10 cursor-pointer transition-all"
    >
      <div className="text inline-flex overflow-hidden uppercase whitespace-nowrap">
        <h1 className="animate-[marque_15s_linear_infinite] group-hover:[animation-play-state:paused] group-hover:text-gray-700 inline-block font-semibold text-[5vw] leading-none">
          Creative Design & Construction ~&nbsp;
        </h1>
        <h1 className="animate-[marque_15s_linear_infinite] group-hover:[animation-play-state:paused] group-hover:text-gray-700 inline-block font-semibold text-[5vw] leading-none">
          Creative Design & Construction ~&nbsp;
        </h1>
      </div>
      <Marque />
    </div>
  );
});

export default Marquee;

const Marque = () => {
  const [name, setname] = React.useState();
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    // container: videoRef,
    target: videoRef,
    offset: ["0 1", "0.8 1"],
    // offset: ["start end", "start start"],
    // ease: [0.42, 0, 0.58, 1], // easeInOut easing function
  });

  const test = useSpring(scrollYProgress);

  // Specify the pixel-based range
  const pixelRange = [35, 100];

  // Convert pixel range to percentage range
  const percentageRange = pixelRange.map((value) => `${value}vw`);

  // Use useTransform with the percentage-based range
  const x = useTransform(scrollYProgress, [0, 1], percentageRange, {
    clamp: false,
  });
  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      if (!isNaN(parseFloat(latest))) {
        // setname(useTransform(latest, [0, 1], percentageRange));
        setname(`${Math.round(latest * 100)}%`);
      } else {
        setname("");
      }
      //
    },
    { passive: true }
  );

  const newTest = useSpring(name, { stiffness: 300, damping: 10 });

  return (
    <motion.div
      ref={videoRef}
      className="xl:lg:h-[40rem] md:h-96 sm:h-40 p-4 xl:mt-0 mt-2 flex place-items-center rounded-full"
      style={{
        margin: "0 0 0 auto",
        scale: test,
      }}
    >
      {/* <Video /> */}
      <video
        className="rounded-full"
        autoPlay={true}
        muted
        loop
        playsInline={true}
        preload="auto"
      >
        <source
          src="https://cdn.cuberto.com/cb/hello/intro/2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};
