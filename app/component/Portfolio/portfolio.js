import React from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/app/data/data";
import Link from "next/link";

const PortfolioItem = ({
  title,
  description,
  project,
  images_link,
  image,
  link,
}) => {
  return (
    <article>
      <Link
        className={` transition ease-in-out delay-150 hover:scale-105`}
        href={`/Projects/${link}`}
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow aspect-[5/3]">
          <Image
            className="rounded-t-lg rounded-b-none w-full rounded aspect-[5/3] object-cover bg-gray-100"
            src={
              "https://cdcgrouplimited.com/nodejs/uploads/projects/" +
              images_link +
              "/" +
              image
            }
            alt="new thing"
            width={1300}
            height={800}
            // priority
            loading="lazy"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              {project}
            </p>
            <h2
              className={`cursor-pointer transition-all truncate duration-300 hover:bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text hover:text-transparent mb-2 text-xl font-semibold tracking-tight text-[#242A3D]`}
            >
              {title}
            </h2>
            <p className="mb-3 font-normal truncate text-[#242A3D] opacity-70">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

const Portfolio = () => {
  return (
    <>
      <Test />
    </>
  );
};

const OldCode = () => {
  return (
    <section className=" overflow-hidden">
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 px-4 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[#242A3D]">
          Our Remarkable Project Portfolio
        </h2>
        <p className="mt-1 text-gray-600">
          Explore our extensive portfolio showcasing the breadth of our
          expertise, from iconic structures to sustainable solutions, all
          meticulously crafted to perfection
        </p>
      </div>
      {/* <!-- End Title --> */}
      {/* <!-- Card Blog --> */}
      {/* <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
      {/* <!-- Grid --> */}
      {/* <div className="grid lg:grid-cols-2 gap-6"> */}
      {/* <!-- Card --> */}
      <div className="text group gap-2 inline-flex uppercase whitespace-nowrap">
        <div
          className={`flex gap-2 animate-[project_30s_linear_infinite] group-hover:[animation-play-state:paused]`}
        >
          {PORTFOLIO.filter((item) => item.home).map((portfolio) => (
            <PortfolioItem key={portfolio.id} {...portfolio} />
          ))}
        </div>
        <div
          className={`flex gap-2 animate-[project_30s_linear_infinite] group-hover:[animation-play-state:paused]`}
        >
          {PORTFOLIO.filter((item) => item.home).map((portfolio) => (
            <PortfolioItem key={portfolio.id} {...portfolio} />
          ))}
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}

      {/* <!-- End Grid --> */}
      {/* </div> */}
      {/* <!-- End Card Blog --> */}
    </section>
  );
};

const Test = () => {
  return (
    <>
      <div class="overflow-hidden">
        <div class="px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-20 md:pb-24 lg:pt-24">
          {/* <!-- Title --> */}
          <div className="lg:px-8 py-8 px-6">
            <div className=" text-center max-w-2xl mx-auto">
              <p className="text-[#007dff] leading-7 font-semibold text-base">
                Remarkable Project
              </p>
              <h2 className="sm:text-5xl text-neutral-900 tracking-tight font-bold text-4xl mt-2">
                Our Leatest Project
              </h2>
              <p className="text-neutral-600 font-medium tracking-tight text-lg mt-4">
                Explore our extensive portfolio showcasing the breadth of our
                expertise, from iconic structures to sustainable solutions, all
                meticulously crafted to perfection
              </p>
            </div>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Examples --> */}
          <div class="relative pe-4 sm:pe-6 lg:pe-8 me-[calc(-1px-(100vw-100%)/2)] after:absolute after:inset-y-0 after:end-0 after:z-10 after:w-20 sm:after:w-24 xl:after:w-44 after:h-full after:bg-gradient-to-l after:from-white">
            <div class="flex overflow-x-auto space-x-3 md:space-x-6 pb-3 [&amp;::-webkit-scrollbar]:h-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
              {PORTFOLIO.filter((item) => item.home).map((portfolio) => (
                <ProjectSlider key={portfolio.id} {...portfolio} />
              ))}
            </div>
          </div>
          {/* <!-- End Examples --> */}
        </div>
      </div>
    </>
  );
};

const ProjectSlider = ({
  link,
  image,
  images_link,
  title,
  project,
  description,
}) => {
  return (
    <Link
      class="sm:pb-8 pb-0 sm:px-8 overflow-hidden  isolate snap-center group shrink-0 relative w-96 sm:w-[500px] lg:w-[640px] h-auto bg-gray-50 rounded-2xl p-2 md:p-4 before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-2xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg"
      href={`/Projects/${link}`}
      target="_blank"
      rel="noreferrer"
      aria-label={title}
      title={title}
    >
      <span class="overflow-hidden">
        <Image
          class="rounded-xl shadow-sm"
          src={
            "https://cdcgrouplimited.com/nodejs/uploads/projects/" +
            images_link +
            "/" +
            image
          }
          alt={title}
          width={1300}
          height={800}
        />
      </span>
      <div className=" bg-gradient-to-t from-[#cef2ff] via-[#28ccff]/10 to-[#0053e3]/0 absolute inset-0 -z-10"></div>
      <div className="ring ring-gray-900/10 ring-inset shadow-sm rounded-2xl -z-10 inset-0 absolute"></div>
      <div className="px-2 pt-2">
        <div className="text-neutral-800 leading-6 text-sm overflow-hidden gap-y-1 items-center flex-wrap flex">
          {project}
        </div>
        <p className="text-neutral-900 leading-6 font-semibold sm:text-xl text-base mt-1">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Portfolio;
