import React from "react";
import Image from "next/image";
import AbImg from "../../public/images/aboutus/about.webp";
import TeamImg from "../../public/images/team/TeamHome.svg";
import ContactImg from "../../public/images/social/contact.svg";
import CareersImg from "../../public/images/Careers.svg";

const AboutImage = () => {
  return <Image src={AbImg} alt="About us Image" width={1300} height={800} />;
};

const TeamImage = () => {
  return <Image src={TeamImg} alt="Team Image" width={1300} height={800} />;
};

const ContactUsImage = () => {
  return (
    <Image
      className="h-full"
      src={ContactImg}
      alt="Contact Image"
      width={1300}
      height={800}
    />
  );
};

const CareersImage = () => {
  return (
    <Image
      className="h-full"
      src={CareersImg}
      alt="Contact Image"
      width={1300}
      height={800}
    />
  );
};

export { AboutImage, TeamImage, ContactUsImage, CareersImage };
