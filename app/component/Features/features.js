import Image from "next/image";
import Link from "next/link";
import { FEATURES } from "@/app/data/data";
import { motion } from "framer-motion";

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="flex">
        <Image
          src={icon}
          alt="new icon"
          height={40}
          width={40}
          style={{ height: "auto", width: "auto" }}
        />
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base sm:text-lg font-semibold text-[#242A3D]">
            {title}
          </h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {/* <section className="py-10 mb-10">
        <div className="mx-auto px-5 sm:px-10 md:px-10 xl:p-0 flex flex-col">
          <div className="flex max-w-xl px-16">
            <h2 className="text-4xl xl:lg:pl-16 xl:lg:-mb-96 mb-10 lg:text-4xl font-bold text-[#242A3D]">
              Features
            </h2>
          </div>
          <div className="flex xl:flex-row md:flex-col md:justify-center md:items-center lg:items-center">
            <div className="flex flex-1 flex-col gap-10">
              <div className="gap-8 xl:pl-16 md:pl-0 lg:gap-10 grid sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <FeatureItem key={feature.id} {...feature} />
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-end md:w-1/2 xl:w-[45%] lg:h-full items-center">
              <Image
                src="/images/Features.svg"
                width={500}
                height={500}
                alt="img cover about"
                className="w-[90%] lg:w-[90%] xl:lg:w-[85%] h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section class="lg:p-8 bg-[#0f1014]">
        <div class="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
          <div class="relative isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-3xl px-6 p-10 lg:flex lg:p-20">
            <div class="pb-12 border-b border-white/10">
              <span class="text-white uppercase">Why choose US</span>
              <h2 class="text-3xl mt-6 tracking-tight font-light lg:text-4xl bg-gradient-to-t from-[#bfdbfe] to-[#3b82f6] text-transparent bg-clip-text">
                Build with Confidence
                <span class="block text-zinc-400">Achieve Your Vision</span>
              </h2>
            </div>
            <dl class="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
              {FEATURES.map((item) => (
                <div key={item.id}>
                  <dt class="inline-flex items-center gap-3">
                    <div class="flex items-center text-white">
                      <Image
                        className="w-6 h-6 text-white"
                        src={item.icon}
                        alt="new icon"
                        height={20}
                        width={20}
                      />
                    </div>
                    <p class="text-base font-medium leading-6 text-white">
                      {item.title}
                    </p>
                  </dt>
                  <dd class="mt-4 text-sm text-[#eff6ff]">
                    {item.description}
                  </dd>
                  {/* button for contact us or learn more */}
                  {item.button && (
                    <div class="mt-4">
                      <Link
                        href={item.link}
                        class="inline-flex whitespace-nowrap overflow-hidden w-min text-center items-center justify-center rounded-md border border-transparent bg-[#0f1014] px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                      >
                        <span className="text-white text-sm font-medium">
                          Contact Us Today
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
