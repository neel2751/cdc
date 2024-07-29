import React from "react";
import Image from "next/image";

const Detail = ({ slug }) => {
  return (
    <>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col  space-y-16">
            <div className="flex flex-col justify-center text-center  mx-auto md:max-w-full space-y-5">
              <span className="rounded-lg bg-blue-100 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-purple-800 dark:text-gray-100">
                {slug.name}
              </span>
              <h1 className="text-3xl font-semibold text-blue-950 max-w-3xl md:text-4xl xl:text-4xl leading-tight">
                {slug.description}
              </h1>
              <p className="text-gray-700 max-w-3xl mx-auto">{slug.longDesc}</p>
            </div>
            <div className="grid divide-y divide-gray-300/60 dark:divide-gray-800/30 gap-12 children:py-5 first:pt-0 last:pb-0">
              {slug.features.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section class="md:my-36 my-24" id="feature4">
        <div class="mx-auto max-w-6xl px-4 py-10">
          <div class="flex flex-col gap-16 md:gap-24">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                class="mx-auto rounded-2xl gap-8 grid lg:gap-20 md:gap-12 md:grid-cols-2"
              >
                <div
                  class={`col-span-1 aos-init aos-animate place-content-center order-${
                    item % 2 === 0 ? 1 : 2
                  }`}
                  data-aos="fade-up"
                  data-aos-trigger=""
                  style={{ opacity: 1, transform: "translateY(0px)" }}
                >
                  <div class="flex">
                    <p class="text-lg leading-7 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] bg-clip-text text-transparent">
                      Important insights
                    </p>
                  </div>
                  <h2 class="mt-6 h2 text-neutral-900 text-3xl leading- font-semibold tracking-tight">
                    Real-time insights at your fingertips
                  </h2>
                  <p class="opacity-80 text-neutral-900 mt-4">
                    Data syncs across your team instantly. Real-time access,
                    with 99.9% uptime. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ex nesciunt quia quibusdam, voluptatem
                    aliquid autem, magnam, doloremque voluptatibus odio esse
                    pariatur harum odit neque qui earum nam praesentium sint
                    ullam!
                  </p>
                </div>
                <div class="w-full mx-auto h-auto max-w-4xl mb-auto">
                  <div
                    class="relative h-full rounded-2xl from-blue-500 bg-gradient-to-br dark:to-base-600/60 after:absolute after:bg-base-100/30 after:inset-[1px] after:rounded-[calc(1rem-1px)] dark:after:bg-base-800/50 dark:via-base-600/60 to-base-300/70 via-base-300/70 aos-init aos-animate"
                    data-aos="fade-left"
                    style={{ opacity: 1, transform: "translateX(0px)" }}
                  >
                    <img
                      alt="Real-time insights at your fingertips"
                      class="w-full relative rounded-2xl border border-transparent object-cover p-1 z-10"
                      decoding="async"
                      height="600"
                      loading="lazy"
                      src={`https://cdcgrouplimited.com/nodejs/uploads/projects/Res/East_ham/${item}.jpg`}
                      width="1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Detail;
const iconRender = (val) => {
  switch (val) {
    case "cross":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "sync":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ id, title, description, advantages, icon, image }) => {
  return (
    <div
      className={`flex flex-col md:items-center gap-10 lg:gap-14 ${
        id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8">
        <div className="space-y-6">
          <span className="p-2 rounded-md bg-purple-100 text-purple-700 dark:bg-gray-900 dark:text-purple-500 flex w-max">
            {iconRender(icon)}
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 ">{title}</h2>
          <p className="text-gray-700 ">{description}</p>
        </div>
        <ul
          role="list"
          className="space-y-5 children:flex children:items-start children:gap-4 children:text-gray-600 dark:children:text-gray-400"
        >
          {advantages &&
            advantages.map((advantage) => (
              <li className="flex" key={advantage.id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 fill-purple-600 dark:fill-purple-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {advantage.text}
              </li>
            ))}
        </ul>
      </div>
      <div
        className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 
                   p-6 rounded-lg aspect-[4/2.4] overflow-hidden"
      >
        <Image
          src={image}
          alt="illustration"
          width={1800}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
