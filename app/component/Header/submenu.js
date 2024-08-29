"use client";
import React, { createContext, useContext, useState } from "react";
import { SUB_MENU, PROJECT } from "../../data/data.js";
import Image from "next/image";
import Link from "next/link.js";

const HoverContext = createContext();

const SubMenu = ({ children }) => {
  const [hover, subHover] = useState(SUB_MENU[0].id);
  const [name, subName] = useState(SUB_MENU[0].name);
  const [desc, subDesc] = useState(SUB_MENU[0].description);
  const [img, subImg] = useState(SUB_MENU[0].image);
  const [link, subLink] = useState(SUB_MENU[0].link);

  const handleClick = (item) => {
    subHover(item.id);
    subName(item.name);
    subDesc(item.description);
    subImg(item.image);
    subLink(item.link);
  };

  const groupA = SUB_MENU.filter((item) => item.category === "A");
  const groupB = SUB_MENU.filter((item) => item.category === "B");

  const jsxDataA = groupA.map((item) => (
    <Link
      key={item.id}
      onMouseEnter={() => handleClick(item)}
      className="group flex gap-x-5 hover:bg-[#EAF3F5] rounded-lg p-4 text-gray-200  focus:outline-none focus:ring-1 focus:ring-gray-600"
      href={`/Services/Service/${item.link}`}
    >
      <Image
        src={item?.icon}
        alt="new"
        width={24}
        height={24}
        className="h-6 w-6 aspect-auto"
      />
      <div className="grow">
        <p className=" font-semibold text-base text-[#242A3D] group-hover:text-[#242A3D]">
          {item.name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-gray-800">
          {item.description}
        </p>
      </div>
    </Link>
  ));
  const jsxDataB = groupB.map((item) => (
    <Link
      key={item.id}
      onMouseEnter={() => handleClick(item)}
      className="group flex gap-x-5 hover:bg-[#EAF3F5] rounded-lg p-4 dark:text-gray-200  focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/Services/Service/${item.link}`}
    >
      <Image
        src={item.icon}
        alt="new"
        width={24}
        height={24}
        className="h-6 w-6 aspect-auto"
      />
      <div className="grow">
        <p className="font-semibold text-base text-[#242A3D] group-hover:text-[#242A3D]">
          {item.name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-gray-800">
          {item.description}
        </p>
      </div>
    </Link>
  ));

  return (
    <>
      <HoverContext.Provider
        value={{ jsxDataA, jsxDataB, name, desc, img, link, hover }}
      >
        {children}
      </HoverContext.Provider>
    </>
  );
};

const hoverImageContext = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useYourContext must be used within a YourProvider");
  }
  return context;
};

const Projects = ({ path }) => {
  return (
    <>
      {PROJECT.map((item) => (
        <>
          {item.id === 2 && <hr className="py-1" />}
          <Link
            key={item.id}
            className={`glow-text inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ${
              path && path.split("/", 3).join("/") === item.link
                ? "bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950 text-white"
                : "bg-white"
            }`}
            href={item.link}
          >
            {/* we have to add diffrent icon for  each project */}
            {path && path.split("/", 3).join("/") === item.link ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M10 22v-6.57" />
                <path d="M12 11h.01" />
                <path d="M12 7h.01" />
                <path d="M14 15.43V22" />
                <path d="M15 16a5 5 0 0 0-6 0" />
                <path d="M16 11h.01" />
                <path d="M16 7h.01" />
                <path d="M8 11h.01" />
                <path d="M8 7h.01" />
                <rect x="4" y="2" width="16" height="20" rx="2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M15 6h6" />
                <path d="M18 3v6" />
              </svg>
            )}

            <div className="grow">
              <span
                className={`block font-semibold mb-1 ${
                  path && path.split("/", 3).join("/") === item.link
                    ? "text-white"
                    : "text-gray-800"
                }`}
              >
                {item.name}
                {path &&
                path.split("/", 3).join("/") === item.link &&
                item.category ? (
                  <span className="inline ms-1 text-xs bg-blue-600 text-white py-0.5 px-1.5 rounded-full">
                    {item.category}
                  </span>
                ) : (
                  <span></span>
                )}
              </span>
              <span className="text-sm font-medium">{item.description}</span>
            </div>
          </Link>
          {item.id === 1 && <span className="mt-2 block" />}
        </>
      ))}
    </>
  );
};

export { SubMenu, Projects, hoverImageContext };
