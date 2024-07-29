"use client";
import React, { useRef } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Hero from "../component/Hero/hero";
import Leagecy from "../component/Leagecy/leagecy";
import WhyUs from "../component/WhyUs/whyUs";
import { WhyData } from "../component/WhyUs/whyData";
import Services from "../component/Services/services";
import Features from "../component/Features/features";
import Portfolio from "../component/Portfolio/portfolio";
import Testimonials from "../component/Testimonials/testimonials";
import Cta from "../component/CTA/Cta";
import NewsletterPopup from "../component/NewsPopup/NewsletterPopup";
import useScrollRestoration from "../Helper/useScrollRestoration";

// import useGeoLocation from "../Helper/useLocationData";

const constant = () => {
  useScrollRestoration();
  // const locationData = useGeoLocation();
  const hoverRef = useRef(null);
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      {/* <NewsletterPopup /> */}
      <Hero />
      <Leagecy />
      <WhyData>
        <WhyUs />
      </WhyData>
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <Cta />
      {/* <Marquee ref={hoverRef} /> */}
      {/* <Cursor hoverRef={hoverRef} /> */}
      <Footer />
      {/* <Suspense fallback={null}>
        <IP />
      </Suspense> */}
    </>
  );
};

export default constant;
