import React from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/app/data/data";
import Link from "next/link";

const PortfolioItem = ({ title, description, project, image, link }) => {
  return (
    <article>
      <Link
        className={` transition ease-in-out delay-150 hover:scale-105`}
        href={`/Projects/${link}`}
      >
        <div className="max-w-sm bg-white rounded-lg shadow">
          <Image
            className="rounded-t-lg rounded-b-none w-full rounded aspect-[5/3] object-cover bg-gray-100"
            src={image}
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
    </>
  );
};

export default Portfolio;
