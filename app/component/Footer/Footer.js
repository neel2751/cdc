"use client";
import Image from "next/image";
import Link from "next/link";
import LetterLight from "../../../public/images/letterbox.svg";
import CDCLogo from "../../../public/images/Logo_New.svg";
import { FOOTERBLOCKS, NAVBAR, SUB_MENU } from "@/app/data/data";
import { motion } from "framer-motion";

import {
  Facbook,
  Instagram,
  Linkedin,
  Youtube,
} from "../../../public/images/social/icons";
import Img from "../Img/Img";
import { forwardRef, useState } from "react";
import { newsLetterData } from "@/actions/ipAddressAction";
import LogoCloudSection from "../LogoCloud/LogoCloud";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-black hover:font-semibold"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 ">{title}</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const SocialLinks = [
    {
      id: 1,
      icon: <Facbook />,
      name: "Facebook",
      link: "https://www.facebook.com/cdcconstructionltd",
    },
    {
      id: 2,
      icon: <Instagram />,
      name: "Instagram",
      link: "https://www.instagram.com/cdc.constructionuk",
    },
    {
      id: 3,
      icon: <Linkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/creative-design-construction-limited",
    },
    {
      id: 4,
      icon: <Youtube />,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCnHvmTVf2_iu4sXY9pzW7XA",
    },
  ];
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const handleNewLetter = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please Enter your email...");
    if (!/\S+@\S+\.\S+/.test(email)) {
      return alert(
        "Please enter valid email address so we can get back to you"
      );
    }
    try {
      const response = await newsLetterData(email);
      if (response.success) {
        setMessage(true);
        setEmail("");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        // alert("You have successfully subscribed to our Newsletter!");
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <>
      <footer className="border-t border-neutral-200 mt-10 shadow-sm">
        <div className="mt-auto w-full max-w-7xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 text-neutral-800">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <a
                className="flex-none text-xl font-semibold w-4/12"
                href="#"
                aria-label="Brand"
              >
                <Img
                  image={CDCLogo}
                  alt={"CDC Logo"}
                  cls={"!w-20 h-auto py-2"}
                />
              </a>
              <a
                className="group"
                target="_blank"
                rel="noopener"
                href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
              >
                <div className="group flex pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-medium group-hover:text-black text-sm"
                  >
                    595a Cranbrook Road, <br />
                    Ilford, IG2 6JZ, <br />
                    United Kingdom
                  </motion.p>
                </div>
              </a>
              <a
                className="group mt-2"
                target="_blank"
                rel="noopener"
                href="tel:02080043327"
              >
                <div className="group flex pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 me-2 group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-medium group-hover:text-black text-sm"
                  >
                    020-8004-3327
                  </motion.p>
                </div>
              </a>
              <a className="group mt-2" href="mailto:info@cdc.construction">
                <div className="group flex pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-medium group-hover:text-black text-sm"
                  >
                    info@cdc.construction
                  </motion.p>
                </div>
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h4 className="text-xs font-semibold text-neutral-700 uppercase">
                Company
              </h4>

              <div className="mt-3 grid space-y-3 text-sm">
                {NAVBAR.map((item) => (
                  <p key={item.id}>
                    <Link
                      className="inline-flex gap-x-2 text-neutral-900"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            {/* <!-- End Col --> */}
            <div>
              <h4 className="text-xs font-semibold text-neutral-700 uppercase">
                Services
              </h4>

              <div className="mt-3 grid space-y-3 text-sm">
                {SUB_MENU.map((item) => (
                  <p key={item.id}>
                    <a
                      className="inline-flex gap-x-2 text-neutral-900 hover:text-gray-800"
                      href={`/Services/Service/${item.link}`}
                    >
                      {item.name}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-2">
              <div className="lg:mt-0 mt-10">
                <h3 className="text-neutral-800 leading-6 font-semibold text-sm">
                  Subscribe to our newsletter
                </h3>
                <p className="text-neutral-600 leading-6 text-sm mt-2">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form
                  className="sm:max-w-md flex mt-6"
                  onSubmit={handleNewLetter}
                >
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="We spot for your email"
                    autocomplete="email"
                    className=" xl:w-full sm:leading-6 sm:text-sm sm:w-64 border border-neutral-200 shadow-sm text-neutral-900 py-1.5 px-3 bg-white rounded-md appearance-none min-w-0 w-full"
                  />
                  <div className="sm:shrink-0 sm:mt-0 sm:ml-4 mt-4">
                    <button
                      type="submit"
                      className="shadow-sm bg-neutral-800 font-semibold text-sm py-2 px-3 text-white rounded-md justify-center items-center w-full flex "
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-10">
                <LogoCloudSection />
              </div>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="pt-5 mt-5 border-t border-gray-400">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex items-center gap-x-3">
                {/* <!-- Language Dropdown --> */}
                <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                  <button
                    id="footer-language-dropdown"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border font-medium border-gray-200 bg-white text-neutral-700 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      className="w-5 h-5"
                      width="192"
                      height="140"
                      viewBox="0 0 192 140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 22.3121V43.3307H30.016L0 22.3121ZM24.8747 139.331H69.3333V108.2L24.8747 139.331ZM122.667 108.205V139.331H167.12L122.667 108.205ZM0 96.6641V117.683L30.0267 96.6641H0ZM167.131 0.664062H122.667V31.7947L167.131 0.664062ZM192 117.688V96.6641H161.968L192 117.688ZM192 43.3307V22.3121L161.979 43.3307H192ZM69.3333 0.664062H24.8747L69.3333 31.7947V0.664062Z"
                        fill="#00247D"
                      />
                      <path
                        d="M134.08 96.6679L185.877 132.94C188.407 130.334 190.225 127.122 191.157 123.612L152.677 96.6679H134.08ZM69.3333 96.6679H57.9146L6.12261 132.935C8.90128 135.761 12.4639 137.783 16.4586 138.721L69.3333 101.697V96.6679ZM122.667 43.3346H134.085L185.877 7.06792C183.051 4.20005 179.468 2.19339 175.547 1.28125L122.667 38.3052V43.3346ZM57.9146 43.3346L6.12261 7.06792C3.59436 9.67578 1.77496 12.8868 0.83728 16.3959L39.3173 43.3346H57.9146Z"
                        fill="#CF1B2B"
                      />
                      <path
                        d="M192 85.9974H112V139.331H122.667V108.205L167.12 139.331H170.667C173.5 139.331 176.305 138.766 178.917 137.668C181.529 136.57 183.895 134.961 185.877 132.936L134.08 96.6641H152.677L191.157 123.608C191.653 121.811 192 119.949 192 117.997V117.688L161.968 96.6641H192V85.9974ZM0 85.9974V96.6641H30.0267L0 117.683V117.997C0 123.816 2.34133 129.08 6.12267 132.931L57.9147 96.6641H69.3333V101.693L16.4587 138.712C18.0267 139.085 19.648 139.331 21.3333 139.331H24.8747L69.3333 108.2V139.331H80V85.9974H0ZM192 21.9974C192.003 16.408 189.803 11.0425 185.877 7.06406L134.085 43.3307H122.667V38.3014L175.547 1.2774C173.949 0.885542 172.312 0.679732 170.667 0.664065H167.131L122.667 31.7947V0.664065H112V53.9974H192V43.3307H161.979L192 22.3121V21.9974ZM69.3333 0.664065V31.7947L24.8747 0.664065H21.3333C18.4993 0.66283 15.6937 1.2284 13.0815 2.3275C10.4693 3.42661 8.10327 5.03704 6.12267 7.06406L57.9147 43.3307H39.3173L0.837333 16.3921C0.308161 18.2145 0.0265249 20.0999 0 21.9974L0 22.3121L30.016 43.3307H0V53.9974H80V0.664065H69.3333Z"
                        fill="#EEEEEE"
                      />
                      <path
                        d="M112 53.9974V0.664062H80V53.9974H0V85.9974H80V139.331H112V85.9974H192V53.9974H112Z"
                        fill="#CF1B2B"
                      />
                    </svg>
                    English (UK)
                  </button>
                </div>
                {/* <!-- End Language Dropdown --> */}

                <div className="space-x-4 text-sm ms-4">
                  <Link
                    className="inline-flex gap-x-2 font-normal text-neutral-600"
                    href="/Terms"
                  >
                    Terms
                  </Link>
                  <Link
                    className="inline-flex gap-x-2 font-normal text-neutral-700"
                    href="/privacy-policy"
                    aria-label="Privacy"
                    title="Privacy"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Privacy
                  </Link>
                  <Link
                    className="inline-flex gap-x-2 text-neutral-700"
                    href="/Cookies"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="mt-3 sm:hidden">
                  <a
                    className="flex-none text-xl font-semibold"
                    href="#"
                    aria-label="Brand"
                  >
                    CDC
                  </a>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-900">
                    © 2024 CDC.
                  </p>
                </div>

                {/* <!-- Social Brands --> */}
                <div className="space-x-4">
                  <Link
                    className="inline-block text-neutral-600"
                    href="https://www.facebook.com/cdcconstructionltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/social/facebook.svg"
                      width={24}
                      height={24}
                      alt="Facebook"
                    />
                  </Link>
                  <Link
                    className="inline-block text-neutral-600"
                    href="https://www.instagram.com/cdc.constructionuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/social/instagram.svg"
                      width={24}
                      height={24}
                      alt="Facebook"
                    />
                  </Link>
                  <Link
                    className="inline-block text-neutral-600"
                    href="https://www.youtube.com/channel/UCnHvmTVf2_iu4sXY9pzW7XA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/social/youtube.svg"
                      width={24}
                      height={24}
                      alt="Facebook"
                    />
                    {/* <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg> */}
                  </Link>
                  <Link
                    className="inline-block text-neutral-600"
                    href="https://www.linkedin.com/company/creative-design-construction-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/social/linkedin.svg"
                      width={24}
                      height={24}
                      alt="Facebook"
                    />
                  </Link>
                </div>
                {/* <!-- End Social Brands --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const oldFooter = () => {
  return (
    <footer className="text-[#242A3D] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 pt-20">
        <div className="space-y-6 col-span-2">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="text-xl font-semibold w-20 flex items-center gap-x-2"
            >
              <Img image={CDCLogo} cls="w-20 h-auto py-2" alt="cdc_logo" />
            </Link>
          </div>

          <div className="xl:max-w-lg w-fit ">
            <a
              className="group"
              target="_blank"
              rel="noopener"
              href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
            >
              <div className="group flex gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-semibold group-hover:text-black"
                >
                  595a Cranbrook Road, <br />
                  Ilford, IG2 6JZ, <br />
                  United Kingdom
                </motion.h2>
              </div>
            </a>

            <a className="group" href="tel:02080043327">
              <div className="flex gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <h2 className="font-semibold group-hover:text-black">
                  020 8004 3327
                </h2>
              </div>
            </a>

            <a className="group" href="mailto:info@cdc.construction">
              <div className="flex gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>

                <h2 className="font-semibold group-hover:text-black">
                  info@cdc.construction
                </h2>
              </div>
            </a>
          </div>
        </div>

        {FOOTERBLOCKS.map((footerBlock) => (
          <FooterBlockItem key={footerBlock.id} {...footerBlock} />
        ))}

        <div className="space-y-6 col-span-2 flex flex-col items-center justify-center">
          <Image
            className=" lg:w-7/12 md:w-6/12 w-6/12 xl:w-9/12 aspect-[5/3] object-cover dark:block hidden text-white"
            src={LetterLight}
            alt="letterbox for newsletter"
            height={100}
            width={100}
          />
          <h1 className="text-sm font-semibold text-gray-900 ">
            Want CDC updates sent straight to your inbox?
          </h1>
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="We spot for your email"
              className="focus:border-[#242A3D] border-2 px-5 py-2.5 rounded-md text-sm font-medium  outline-none flex-1 bg-gray-200 "
            />
            <button
              onClick={handleNewLetter}
              className="outline-none w-full py-2.5 px-5 sm:w-max bg-[#242A3D] text-white rounded-md flex items-center justify-center"
            >
              Subscribe
            </button>
          </div>
          {message && (
            <div
              id="toast-default"
              className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                  />
                </svg>
                <span className="sr-only">Fire icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">
                Welcome to our Family...
              </div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-default"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          )}
          {/* {message && message} */}
        </div>
      </div>
      <div>
        <LogoCloudSection />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p>
              {`© ${new Date().getFullYear()} Creative Design & Construction Ltd. All right reserved`}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            {SocialLinks.map((links) => (
              <a
                key={links.id}
                aria-label={`CDC ${links.name}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={links.link}
                className="h-6 w-6 transition ease-linear text-[#242A3D] hover:text-pink-700"
              >
                {links.icon}
                {/* <
                  className={"transition ease-linear hover:text-pink-700"}
                /> */}
              </a>
            ))}
            {/* <a href="#" aria-label="social link" rel="noreferer">
              <Twitter
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a>
            <a href="#" aria-label="social link" rel="noreferer">
              <Linkedin
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
