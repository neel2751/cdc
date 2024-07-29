"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TeamSection = ({ teamdata, category }) => {
  const filteredTeamData = teamdata.filter((article) =>
    article.company.teamCategories.includes(category)
  );

  console.clear(); // clear console
  filteredTeamData.map(({ company }) => {
    console.log(company.teamCategories);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const openModel = (item) => {
    setModalOpen(true);
    setName(item.firstName);
    setDesc(item.description);
    setImage(item.image);
  };

  return (
    <>
      <div
        className={`py-8 px-4 mx-auto max-w-screen-xl scroll-smooth lg:px-6`}
      >
        {/* <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
        </div> */}

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {filteredTeamData.map((item) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              ref={trigger}
              // onClick={() => openModel(item)}
              className="items-center bg-gray-50 rounded-lg hover:cursor-pointer shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              {item.image ? (
                <div className="aspect-w-16 aspect-h-8">
                  <Image
                    width={600}
                    height={600}
                    className="hover:grayscale-0 transition rounded-lg object-cover aspect-square sm:rounded-none sm:rounded-l-lg"
                    src={item.image}
                    alt={`${item.name}'s picture.`}
                    // placeholder="blur"
                    // blurDataURL="/images/Logo_New.svg"
                    // quality={50}
                  />
                </div>
              ) : (
                <div className="bg-white h-[272px]  flex justify-center transition items-center rounded-lg object-cover p-2 sm:rounded-none sm:rounded-l-lg ">
                  <Image
                    width={600}
                    height={600}
                    src={"/images/Logo_New.svg"}
                    className="w-full object-cover sm:size-48 lg:size-60 mx-auto"
                    alt={`${item.name}'s picture`}
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.firstName} {item.lastName}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {item.company.department}
                  <br />
                </span>
                <p className="mt-3 mb-4 font-light w-72 text-gray-500 dark:text-gray-400">
                  {item.company.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Model
        modalOpen={modalOpen}
        modal={modal}
        setModalOpen={setModalOpen}
        name={name}
        desc={desc}
        image={image || "/images/Logo_New.svg"}
      />
    </>
  );
};

export default TeamSection;

// const Model = ({
//   modalOpen,
//   modal,
//   setModalOpen,
//   name,
//   desc,
//   image,
//   selectedId,
// }) => {
//   return (
//     <div
//       className={`left-0 flex fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
//         modalOpen ? "block overscroll-none" : "hidden"
//       }`}
//     >
//       <div
//         ref={modal}
//         onFocus={() => setModalOpen(true)}
//         onBlur={() => setModalOpen(false)}
//       >
//         <div className="mt-0 opacity-100  duration-500 ease-out transition-all h sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//           <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800 max-h-full overflow-hidden  border  pointer-events-auto  dark:border-gray-700 dark:shadow-slate-700/[.7]">
//             <div className="absolute top-2 end-2 z-[10]">
//               <button
//                 onClick={() => setModalOpen(false)}
//                 type="button"
//                 className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                 data-hs-overlay="#hs-subscription-with-image"
//               >
//                 <span className="sr-only">Close</span>
//                 <svg
//                   className="flex-shrink-0 w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="M18 6 6 18" />
//                   <path d="m6 6 12 12" />
//                 </svg>
//               </button>
//             </div>

//             <div className="aspect-w-16 aspect-h-8">
//               <img
//                 className="w-full object-cover rounded-t-xl"
//                 src={image}
//                 alt="Image Description"
//               />
//             </div>

//             <div className="p-4 sm:p-10 text-center overflow-y-auto">
//               <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
//                 {name} 🎉
//               </h3>
//               <p className="text-gray-500">{desc}</p>

//               <div className="mt-6 flex justify-center gap-x-4">
//                 <button
//                   type="button"
//                   className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                   data-hs-overlay="#hs-subscription-with-image"
//                 >
//                   Got it
//                 </button>
//                 <a
//                   className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                   href="#"
//                 >
//                   Settings
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Model = ({ modalOpen, setModalOpen, name, desc, image, modal }) => {
  const heading = "text";
  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-gray-800 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <motion.div whileHover="whileHover" className="relative z-10 group">
              {/* <div className="bg-white mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <Image
                  className="w-96"
                  src={image}
                  alt="Team Image"
                  height={800}
                  width={800}
                />
              </div> */}
              <div className="aspect-w-16 aspect-h-8">
                <Image
                  className="w-full max-h-96 object-cover rounded-xl"
                  src={image}
                  height={480}
                  width={320}
                  alt={`${name}'s Image`}
                />
              </div>
              <div>
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: -16 },
                  }}
                  transition={{
                    type: "spring",
                    staggerChildren: 0.075,
                    delayChildren: 0.25,
                  }}
                  className="relative z-10 block text-2xl text-center font-bold text-gray-800 transition-colors duration-500 group-hover:text-gray-800 md:text-2xl"
                >
                  {name.split("").map((l, i) => (
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        whileHover: { x: 10 },
                      }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="inline-block"
                      key={i}
                    >
                      {l}
                    </motion.span>
                  ))}
                </motion.span>
                <span className="relative z-10 h-60 overflow-y-scroll border-2 border-gray-200 rounded-lg p-2 mt-2 block text-base text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
                  {desc}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
