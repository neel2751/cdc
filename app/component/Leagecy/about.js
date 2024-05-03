import AnimateImageHelper from "@/app/Helper/animateImageHelper";
import AnimateText from "@/app/Helper/animateTextHelper";
import React from "react";

export const AboutPara = () => {
  const para =
    "We are your trusted partner in construction, delivering innovative solutions and unparalleled craftsmanship from concept to completion. With unwavering professionalism and expertise, we bring your vision to life.";
  return (
    <div className="bg-[#73d3ebff] mt-10 flex xl:flex-row flex-col p-10">
      <div className="flex h-20 xl:h-full">
        <AnimateImageHelper
          imageSrc={"/images/New1.svg"}
          imageAlt={"/images/Bird.svg"}
        />
      </div>
      <AnimateText paragraph={para} />
      <div className="flex xl:h-40 h-20 xl:mt-96 mt-0">
        <AnimateImageHelper
          imageSrc={"/images/New1.svg"}
          imageAlt={"/images/Bird.svg"}
        />
      </div>
    </div>
  );
};
