"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Video from "../video";
import { AboutImage, TeamImage, CareersImage } from "../../../About/AboutImage";
import { motion, useInView } from "framer-motion";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};
const HeroStatic = ({ company, title, desc, tag, img }) => {
  const [isActive, setIsActive] = useState(false);

  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const ref = useRef(null);
  const useinView = useInView(ref, { amount: 0.5 });
  return (
    <section className="min-h-max">
      <div className="w-full flex items-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5]" />
        <div className="min-h-max relative mx-auto pt-20 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
          {/* <div className="flex items-center text-[#EAF3F5] mx-auto w-max px-2 font-medium text-sm py-1 rounded-full bg-[#242A3D] border border-gray-300">
            {company}
          </div> */}
          {/* <div
            className="flex cursor-pointer justify-center"
            onMouseEnter={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            <p className="text-[#242A3D] max-w-5xl font-semibold  text-3xl/tight sm:text-5xl/tight lg:text-5xl/tight">
              {title.split(",")[0]},
            </p>

            <motion.div
              className=" overflow-hidden flex items-center justify-center w-0"
              variants={anim}
              animate={isActive ? "open" : "closed"}
            >
              <img
                className="w-[10vw] rounded"
                src="/images/services/Arch.webp"
                alt="test"
              ></img>
            </motion.div>

            <p className="text-[#242A3D] max-w-5xl font-semibold  text-3xl/tight sm:text-5xl/tight lg:text-5xl/tight after:content-[url('/images/team/TeamLine.svg')] xl:lg:after:flex items-center after:-m-12 after:justify-end after:hidden">
              {title.split(",")[1]}
            </p>
          </div> */}
          {/* #242A3D this is the heading color */}
          {/* {tag === "Home" && <Announcement />} */}
          <h1 className="text-[#242A3D] mx-auto max-w-5xl font-semibold  text-3xl/tight sm:text-5xl/tight lg:text-5xl/tight after:content-[url('/images/team/TeamLine.svg')] xl:lg:after:flex items-center after:-m-12 after:justify-end after:hidden">
            <motion.span
              ref={ref}
              initial="hidden"
              animate={useinView ? "visible" : "hidden"}
              transition={{
                staggerChildren: 0.075,
                type: "spring",
                delayChildren: 0.25,
              }}
              aria-hidden
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
            >
              {title &&
                title.split(" ").map((e, i) => (
                  <motion.span
                    transition={{
                      type: "spring",
                      duration: 1,
                      delay: i / 10,
                    }}
                    variants={{
                      ...defaultVariants,
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    key={i}
                  >
                    {e}{" "}
                  </motion.span>
                ))}
            </motion.span>
          </h1>
          {/* This is bug after check using mx-auto and provide some margin top to get better change */}
          <p
            style={{ marginTop: "0" }}
            className={`text-[#242A3D] opacity-70 font-medium text-base text-pretty mx-auto mt-[0px] ${
              tag ? "max-w-2xl" : "max-w-4xl mt-4"
            }`}
          >
            {desc}
          </p>
          <motion.button whileTap={{ scale: 0.9 }}>
            <div className="flex items-center justify-center w-max-2xl">
              <Link
                href="/ContactUs"
                className="bg-gray-900 group  hover:bg-gray-600 text-sm px-4 h-12 font-semibold w-40 rounded text-[#F9F8F4] flex items-center justify-start"
              >
                ContactUs
                <span className="h-6 w-6 ml-3 rounded-full bg-[#F9F8F4]">
                  <svg
                    className="ml-1 mt-1 w-4 h-4 transition duration-300 group-hover:rotate-0 -rotate-45 group-hover:scale-125"
                    width="69"
                    height="39"
                    viewBox="0 0 69 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 19.037H62M62 19.037C59.4938 17.6049 52.9778 12.5926 46.963 4M62 19.037C58.4198 21.5432 50.4 28.2741 46.963 35.1481"
                      stroke="#474A59"
                      strokeWidth="6.44444"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ y: 30 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Old aspect aspect-[5/2.3] */}
            {/* <div className="mx-auto max-w-full h-full rounded-2xl aspect-video overflow-hidden px-2 pt-2 "> */}
            {tag === "Home" ? (
              <div className="sm:mt-24 flow-root mt-16">
                <div className="lg:p-4 lg:rounded-2xl lg:-m-4 ring-[#012f6a]/20 ring-inset ring-1 p-2 bg-[#012f6a]/20 rounded-xl -m-2">
                  <Video />
                </div>
              </div>
            ) : tag === "About" ? (
              <div className="mx-auto max-w-full h-full rounded-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 ">
                <AboutImage />
              </div>
            ) : tag === "Careers" ? (
              <div className="mx-auto max-w-full h-full rounded-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 ">
                <CareersImage />
              </div>
            ) : (
              <div className="mx-auto max-w-full h-full rounded-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 hidden ">
                {/* <TeamImage /> */}
              </div>
            )}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;
