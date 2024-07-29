"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO, SERVICES_FEATURES, SUB_MENU, TEAMDATA } from "../data/data";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const AllService = () => {
  const [sliderPostion, setSliderPostion] = useState(50);
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // get the current element position
    const x = e.clientX - rect.left; // get the mouse position
    const width = e.currentTarget.offsetWidth; // get the element width
    const percent = x / width; // get the percent of the mouse position
    setSliderPostion(percent * 100); // set the slider position
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      // once: false, // whether animation should happen only once - while scrolling down
      // mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div class="isolate relative">
        {/* <svg
          aria-hidden="true"
          class="bg-[radial-gradient(to_center,white,transparent_32rem)] stroke-[#e5e7eb] w-full h-[64rem] -z-10 top-0 inset-x-0 absolute"
        >
          <defs>
            <pattern x="50%" y="-1" width="200" height="200">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="fill-[#f9fafb] visible">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            stroke-width="0"
          ></rect>
        </svg> */}
        <div
          aria-hidden="true"
          class=" xl:ml-48 lg:ml-24 blur-3xl overflow-hidden transform-gpu -ml-24 -z-10 top-0 right-0 left-1/2 absolute"
        >
          <div
            class=" opacity-30 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] w-[50rem] aspect-[801/1036]"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          ></div>
        </div>
        <div class="overflow-hidden">
          <div class="lg:pt-32 lg:px-8 sm:pt-60 pt-36 pb-32 px-6 max-w-7xl mx-auto">
            <div class="lg:items-center lg:max-w-none lg:flex lg:mx-0 gap-x-14 max-w-2xl mx-auto">
              <div class="xl:max-w-2xl lg:shrink-0 max-w-xl w-full relative">
                <div class="lg:mt-16 sm:flex sm:mt-32 hidden">
                  <div class="ring-1 ring-gray-900/10 text-gray-700 leading-6 text-sm py-1 px-3 rounded-full relative">
                    Anim aute id magna aliqua ad ad non deserunt sunt.
                    <a
                      href="#"
                      class="text-rose-500 font-semibold whitespace-nowrap ms-1"
                    >
                      <span aria-hidden="true" class="inset-0 relative"></span>
                      Read more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <h1 class="sm:text-6xl text-neutral-800 tracking-tight font-bold text-4xl mt-4">
                  Build Your Dream. <br />
                  We Make it
                  <motion.span
                    animate={{
                      backgroundPositionX: "100%",
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                    className="ml-2 bg-[linear-gradient(to_right,#012f6a,#004cb1,#0053e3,#0063ff,#007dff,#DD7DDF,#e11d48,#f43f5e,#9f1239,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text "
                  >
                    Reality.
                  </motion.span>
                </h1>
                <p class="lg:max-w-none sm:max-w-md text-neutral-600 leading-8 text-lg mt-6">
                  From concept to completion, our experienced team handles all
                  your construction needs. We offer quality craftsmanship,
                  reliable service, and on-time project delivery.
                </p>
                <div class="gap-x-6 items-center flex mt-10">
                  <a
                    href="#"
                    class="shadow-sm text-white font-semibold text-sm py-2.5 px-3.5 bg-rose-600 rounded-md"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
              <div class="lg:pl-0 lg:mt-0 sm:pl-20 sm:justify-start sm:-mt-44 gap-8 justify-end flex mt-14">
                <div class="xl:pt-80 xl:-order-none lg:pt-36 lg:-order-first sm:pt-80 sm:ml-0 pt-32 flex-none w-44 ml-auto">
                  <div class="relative">
                    <img
                      alt=""
                      src="https://cdcgrouplimited.com/nodejs/uploads/services/Arch.webp"
                      class=" shadow-lg object-cover bg-gray-900/5 rounded-xl w-full aspect-[2/3]"
                    />
                    <div class="ring ring-gray-900/10 ring-inset rounded-xl inset-0 absolute pointer-events-none"></div>
                  </div>
                </div>
                <div class="lg:pt-36 sm:pt-52 sm:mr-0 flex-none w-44 mr-auto space-y-8">
                  <div class="relative">
                    <img
                      alt=""
                      src="https://cdcgrouplimited.com/nodejs/uploads/services/NewBuild.webp"
                      class="shadow-lg object-cover bg-gray-900/5 rounded-xl w-full aspect-[2/3]"
                    />
                    <div class="ring ring-gray-900/10 ring-inset rounded-xl inset-0 absolute pointer-events-none"></div>
                  </div>
                  <div class="relative">
                    <img
                      alt=""
                      src="https://cdcgrouplimited.com/nodejs/uploads/services/Loft.webp"
                      class="shadow-lg object-cover bg-gray-900/5 rounded-xl w-full aspect-[2/3]"
                    />
                    <div class="ring ring-gray-900/10 ring-inset rounded-xl inset-0 absolute pointer-events-none"></div>
                  </div>
                </div>
                <div class="sm:pt-0 pt-32 flex-none w-44 space-y-8">
                  <div class="relative">
                    <img
                      alt=""
                      src="https://cdcgrouplimited.com/nodejs/uploads/services/Reno.webp"
                      class="shadow-lg object-cover bg-gray-900/5 rounded-xl w-full aspect-[2/3]"
                    />
                    <div class="ring ring-gray-900/10 ring-inset rounded-xl inset-0 absolute pointer-events-none"></div>
                  </div>
                  <div class="relative">
                    <img
                      alt=""
                      src="https://cdcgrouplimited.com/nodejs/uploads/services/Comm.webp"
                      class="shadow-lg object-cover bg-gray-900/5 rounded-xl w-full aspect-[2/3]"
                    />
                    <div class="ring ring-gray-900/10 ring-inset rounded-xl inset-0 absolute pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="items-center px-8 py-12 mx-auto max-w-7xl md:px-12 lg:py-24">
          <div class="border-b border-gray-200 flex justify-between pb-5">
            <h3 class="text-base font-semibold text-black">
              {/* projects */}
              Our Projects
            </h3>
            <Link
              href={"/Projects/Residential"}
              class="text-sm font-semibold bg-gradient-to-b from-rose-600 via-rose-700 to-rose-800 py-1.5 px-2 rounded-md mr-2 text-white"
            >
              View All <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul class="grid md:grid-cols-2 lg:grid-cols-2 mt-12 gap-8 gap-y-12 lg:gap-y-24">
            {PORTFOLIO.filter((item) => item.home)
              .slice(4, 8)
              .map((portfolio) => (
                <li key={portfolio.id}>
                  <a
                    href={`/Projects/${portfolio.link}`}
                    title={portfolio.title}
                  ></a>
                  <article>
                    <a
                      href={`/Projects/${portfolio.link}`}
                      title="The Secret Garden of Elsie"
                    >
                      <div class="relative isolate flex flex-col justify-end rounded-xl overflow-hidden pt-80 sm:pt-48 lg:pt-80">
                        <img
                          src={
                            "https://cdcgrouplimited.com/nodejs/uploads/projects/" +
                            portfolio.images_link +
                            "/" +
                            portfolio.image
                          }
                          alt={portfolio.title}
                          class="absolute inset-0 -z-10 h-full w-full object-cover"
                        />
                        <div class="bg-white/5 backdrop-blur-2xl border-t border-white/50 p-6">
                          <div class="flex flex-wrap font-semibold justify-between overflow-hidden text-sm leading-6 text-white">
                            <h3 class="font-semibold text-white uppercase">
                              {portfolio.title}
                            </h3>
                            <p class="mr-8">{portfolio.project}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <div
        class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {TEAMDATA.slice(0, 6).map((data) => (
          <div class="max-lg:w-full overflow-hidden rounded-xl w-80">
            <div class="flex items-end relative group">
              <div class="flex justify-center items-end overflow-hidden relative bg-lumber">
                <img
                  alt="Member"
                  decoding="async"
                  height="300"
                  loading="lazy"
                  src={data.image}
                  width="300"
                  class="duration-500 ease-in-out transition  group-hover:scale-105 h-full object-cover w-full"
                />
              </div>
            </div>
            <div class="flex items-center flex-col bg-[#212121] justify-center p-5">
              <div class="text-white font-inter font-medium tracking-tightxl">
                {data.company.department}
              </div>
              <div class="text-white font-semibold leading-8 max-md:leading-6 text-xl">
                {data.firstName} {data.lastName}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section class="">
        <div class="mx-auto max-w-6xl">
          <h1
            class="font-fraunces font-bold tracking-tight md:text-5xl sm:text-4xl text-center mx-auto aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Why CDC is the best for you
          </h1>
          <div class="flex justify-between lg:gap-10 sm:mt-10 mt-16 lg:grid lg:grid-cols-4 sm:grid-cols-1">
            <div data-aos="fade-up">
              <div class="flex items-center gap-4 sm:gap-07">
                <img
                  alt="number"
                  decoding="async"
                  height="35"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/1.svg"
                  width="35"
                />
                <h1 class="text-black-strom font-fraunces font-bold my-0 leading-34 max-lg:text-2xl text-26xl tracking-tighth max-lg:leading-8">
                  Expert team
                </h1>
              </div>
              <div class="max-sm:mt-5 max-md:mt-30 mt-8">
                <img
                  alt="Point"
                  decoding="async"
                  height="150"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/1image.svg"
                  width="150"
                  class="w-150"
                />
              </div>
              <div class="text-sm font-normal leading-7 sm:mt-5 mt-6">
                Our team comprises individuals who are passionate.
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="aos-init aos-animate"
            >
              <div class="flex items-center gap-4 max-sm:gap-07">
                <img
                  alt="number"
                  decoding="async"
                  height="35"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/2.svg"
                  width="35"
                />
                <h1 class="text-black-strom font-fraunces font-bold my-0 leading-34 max-lg:text-2xl text-26xl tracking-tighth max-lg:leading-8">
                  Customized
                </h1>
              </div>
              <div class="max-sm:mt-5 max-md:mt-30 mt-8">
                <img
                  alt="Point"
                  decoding="async"
                  height="150"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/2image.svg"
                  width="150"
                  class="w-150"
                />
              </div>
              <div class="font-inter font-normal text-black-strom leading-7 text-lg max-sm:mt-5 mt-6 max-lg:max-w-95% max-w-228">
                Every project is tailored to your specific needs, that's
                uniquely yours.
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="aos-init aos-animate"
            >
              <div class="flex items-center gap-4 max-sm:gap-07">
                <img
                  alt="number"
                  decoding="async"
                  height="35"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/3.svg"
                  width="35"
                />
                <h1 class="text-black-strom font-fraunces font-bold my-0 leading-34 max-lg:text-2xl text-26xl tracking-tighth max-lg:leading-8">
                  Results-Driven
                </h1>
              </div>
              <div class="max-sm:mt-5 max-md:mt-30 mt-8">
                <img
                  alt="Point"
                  decoding="async"
                  height="150"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/3image.svg"
                  width="150"
                  class="w-150"
                />
              </div>
              <div class="font-inter font-normal text-black-strom leading-7 text-lg max-sm:mt-5 mt-6 max-lg:max-w-95% max-w-228">
                We're committed to delivering measurable results
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="aos-init aos-animate"
            >
              <div class="flex items-center gap-4 max-sm:gap-07">
                <img
                  alt="number"
                  decoding="async"
                  height="35"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/4.svg"
                  width="35"
                />
                <h1 class="text-black-strom font-fraunces font-bold my-0 leading-34 max-lg:text-2xl text-26xl tracking-tighth max-lg:leading-8">
                  Technology
                </h1>
              </div>
              <div class="max-sm:mt-5 max-md:mt-30 mt-8">
                <img
                  alt="Point"
                  decoding="async"
                  height="150"
                  loading="lazy"
                  src="https://astro-agency02.vercel.app/image/4image.svg"
                  width="150"
                  class="w-150"
                />
              </div>
              <div class="font-inter font-normal text-black-strom leading-7 text-lg max-sm:mt-5 mt-6 max-lg:max-w-95% max-w-228">
                We stay up-to-date with the latest technologies to provide
                solutions.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
          <div class="max-w-2xl mx-auto text-center">
            <span class="text-xs font-bold tracking-wide uppercase text-rose-500">
              Our Services
            </span>
            <p class="mt-4 text-4xl font-semibold tracking-tight text-rose-900">
              We offer a wide range of services
              <span class="md:block md:text-gray-500 text-3xl">
                to help you achieve your goals
              </span>
            </p>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-500">
              We are a team of experienced professionals who are dedicated to
              providing high-quality services to our clients. We understand that
              every project is unique and we work closely with our clients to
              ensure that their needs are met.
            </p>
          </div>
          <ol
            role="list"
            class="grid grid-cols-1 mt-12 -mx-3 gap-y-10 lg:mt-24 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-gray-400/20"
          >
            {SUB_MENU.slice(0, 3).map((item) => (
              <ServiceCard item={item} key={item.id} />
            ))}
          </ol>
          <ol
            role="list"
            class="grid grid-cols-1 mt-12 -mx-3 gap-y-10 lg:mt-24 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-gray-400/20"
          >
            {SUB_MENU.slice(3, 6).map((item) => (
              <ServiceCard item={item} key={item.id} />
            ))}
          </ol>
          <ol
            role="list"
            class="grid grid-cols-1 mt-12 -mx-3 gap-y-10 lg:mt-24 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-gray-400/20"
          >
            {SUB_MENU.slice(6).map((item) => (
              <ServiceCard item={item} key={item.id} />
            ))}
            {/* We have to add CTA after all services */}
          </ol>
        </div>
      </section>

      <section class="lg:p-8 bg-black">
        <div class="px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
          <div class="lg:text-center max-w-2xl lg:mx-auto">
            <span class="text-rose-400"> Quality You Can Trust</span>
            <h2 class="text-3xl tracking-tight mt-6 font-medium lg:text-4xl text-white">
              Don't Settle for Average.
              <span class="md:block text-zinc-400">Build with Excellence.</span>
            </h2>
            <p class="mt-5 text-white max-w-lg mx-auto">
              We are a team of experienced professionals who are committed to
              providing the highest quality services to our clients. We take
              pride in our work and strive to exceed expectations.
            </p>
          </div>
          <div class="relative isolate overflow-hidden bg-gradientdownRed ring-1 ring-white/10 rounded-3xl px-6 pt-16 mt-12 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <span class="text-rose-400">Building with Transparency</span>
              <h2 class="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                Stress-Free Construction?
                <span class="md:block text-zinc-400">We Make it Happen.</span>
              </h2>
              <p class="mt-6 text-sm text-white">
                We are dedicated to delivering exceptional results and building
                long-term relationships with our clients. We are passionate
                about what we do and are always looking for new ways to improve
                our services.
              </p>
            </div>
            <div class="relative mt-16 h-80 lg:mt-8">
              <img
                class="absolute left-0 top-0  max-w-none opacity-50 border border-white/10 rounded-3xl"
                src="/images/services/cta.svg"
                alt="img"
              />
            </div>
          </div>
          <div class="mt-12">
            <div class="mx-auto lg:max-w-7xl">
              <div>
                <dl class="grid grid-cols-1 gap-12 md:grid-cols-3 lg:space-y-0 lg:gap-x-24">
                  {SERVICES_FEATURES.map((item) => (
                    <div key={item.id}>
                      <dt class="inline-flex items-center gap-3">
                        <div class="flex items-center justify-center text-white">
                          <Image
                            width={20}
                            height={20}
                            alt={item.title}
                            src={`/images/services/icon/${item.id}.svg`}
                          />
                        </div>
                        <p class="text-base font-medium leading-6 text-white">
                          {item.title}
                        </p>
                      </dt>
                      <dd class="mt-4 text-sm text-white">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full relative">
          <div
            className="relative w-full max-w-7xl h-[40rem] aspect-[70/45] m-auto overflow-hidden select-none rounded-3xl ring-1 ring-gray-900/10"
            onMouseMove={handleMove}
          >
            <Image
              alt=""
              fill
              priority
              src="/images/projects/comm/Upton/Upton1.webp"
            />
            <div
              className="absolute top-0 left-0 right-0 w-full max-w-7xl aspect-[70/45] m-auto overflow-hidden select-none"
              style={{ clipPath: `inset(0 ${100 - sliderPostion}% 0 0)` }}
            >
              <Image
                alt=""
                fill
                priority
                src="/images/projects/comm/Upton/Upton3.webp"
              />
            </div>
            {/* Slider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-rose-600 cursor-ew-resize"
              style={{ left: `calc(${sliderPostion}% - 1px)` }}
            >
              <div className="bg-rose-600 absolute rounded-full h-10 w-10 -left-4 flex items-center justify-center text-white top-[calc(50%-5px)] cursor-ew-resize text-sm font-semibold tracking-wide">
                CDC
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ item }) => {
  const { id, name, description, image } = item;
  return (
    <li
      key={id}
      class="grid items-center grid-cols-1 gap-8 px-3 auto-rows-min sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
    >
      <div class="relative h-40 bg-gradient-to-t from-[#1c1d1e] to-[#353739] overflow-hidden rounded-2xl">
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            alt="image"
            src={image}
            class="absolute inset-0 w-full h-full lg:object-cover"
          />
        </div>
      </div>
      <div>
        <h3 class="text-base font-medium tracking-tight text-rose-900">
          {name}
        </h3>
        <p class="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
};

export default AllService;
