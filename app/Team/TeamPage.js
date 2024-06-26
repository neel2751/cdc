"use client";
import React, { useEffect, useRef, useState } from "react";

const TeamPage = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const [teamData, setTeamdata] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/TeamApi");
        const result = await res.json();
        setTeamdata(result.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const uniqueAuthors = [
    ...new Map(teamData.map((v) => [v.company.teamCategories, v])).values(),
  ];
  const [activeCategory, setActiveCategory] = useState();

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <div className="live-preview flex h-full w-full not-prose">
            <div className="flex w-full flex-col">
              <div
                data-slot="base"
                className="inline-flex"
                aria-label="Options"
              >
                <div
                  className="flex p-1 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm rounded-medium"
                  aria-orientation="horizontal"
                >
                  {uniqueAuthors.map((item) => (
                    <button
                      onClick={() =>
                        setActiveCategory(item.company.teamCategories)
                      }
                      data-slot="tab"
                      data-key="photos"
                      id="react-aria9613397964-:rcm:-tab-photos"
                      aria-selected="true"
                      role="tab"
                      className={`${
                        activeCategory === item.company.teamCategories
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }z-0 w-full px-3 py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small rounded-small`}
                      type="button"
                    >
                      <span
                        className="absolute z-0 inset-0 rounded-small bg-primary text-primary-foreground"
                        data-slot="cursor"
                      ></span>
                      <div
                        className="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-primary-foreground"
                        data-slot="tabContent"
                      >
                        <div className="flex items-center space-x-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            height="24"
                            role="presentation"
                            viewBox="0 0 24 24"
                            width="24"
                            fill="none"
                          >
                            <path
                              d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>{item.company.teamCategories}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {/* First Team Card Start */}

            <TeamItemData
              teamData={teamData}
              trigger={trigger}
              setModalOpen={setModalOpen}
              teamCategory={setActiveCategory}
            />
            {/* First team data end */}
          </div>
        </div>
        <Model
          modalOpen={modalOpen}
          modal={modal}
          setModalOpen={setModalOpen}
        />
        {/* <Filter
          teamData={teamData}
          setModalOpen={setModalOpen}
          trigger={trigger}
          modalOpen={modalOpen}
          modal={modal}
        /> */}
      </section>
    </>
  );
};

export default TeamPage;

const TeamItemData = ({ teamData, setModalOpen, trigger, teamCategory }) => {
  console.log(teamCategory);
  const filteredTeam = teamData.filter((team) =>
    team.company.teamCategories.includes(teamCategory)
  );
  console.log(filteredTeam);
  return (
    <>
      {teamData.map((item) => (
        <div
          key={item.id}
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <div>
            <img
              className=" rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="images/team/teams/boss.jpg"
              alt="Bonnie Avatar"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.firstName} {item.lastName}
            </h3>
            <span className="text-gray-500 dark:text-gray-400">
              CEO & Web Developer
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              Bonnie drives the technical strategy of the flowbite platform and
              brand.
            </p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <a
                  href={item.social.facebook}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

// const Filter = ({ teamData, trigger, modal, modalOpen, setModalOpen }) => {
//   const uniqueAuthors = [
//     ...new Map(teamData.map((v) => [v.company.teamCategories, v])).values(),
//   ];
//   const [activeCategory, setActiveCategory] = useState("All");
//   return (
//     <>
//       <div className="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
//         <div className="live-preview flex h-full w-full not-prose">
//           <div className="flex w-full flex-col">
//             <div data-slot="base" className="inline-flex" aria-label="Options">
//               <div
//                 className="flex p-1 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm rounded-medium"
//                 aria-orientation="horizontal"
//               >
//                 {uniqueAuthors.map((item) => (
//                   <button
//                     onClick={() =>
//                       setActiveCategory(item.company.teamCategories)
//                     }
//                     data-slot="tab"
//                     data-key="photos"
//                     id="react-aria9613397964-:rcm:-tab-photos"
//                     aria-selected="true"
//                     role="tab"
//                     className={`${
//                       activeCategory === item.company.teamCategories
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-800"
//                     }z-0 w-full px-3 py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small rounded-small`}
//                     type="button"
//                   >
//                     <span
//                       className="absolute z-0 inset-0 rounded-small bg-primary text-primary-foreground"
//                       data-slot="cursor"
//                     ></span>
//                     <div
//                       className="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-primary-foreground"
//                       data-slot="tabContent"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <svg
//                           aria-hidden="true"
//                           focusable="false"
//                           height="24"
//                           role="presentation"
//                           viewBox="0 0 24 24"
//                           width="24"
//                           fill="none"
//                         >
//                           <path
//                             d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z"
//                             fill="currentColor"
//                           ></path>
//                           <path
//                             d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
//                             fill="currentColor"
//                           ></path>
//                           <path
//                             d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
//                             fill="currentColor"
//                           ></path>
//                         </svg>
//                         <span>{item.company.teamCategories}</span>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//             Our Team
//           </h2>
//         </div>
//         <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
//           {/* First Team Card Start */}

//           <TeamItemData
//             teamData={teamData}
//             trigger={trigger}
//             setModalOpen={setModalOpen}
//             teamCategory={setActiveCategory}
//           />
//           {/* First team data end */}
//         </div>
//       </div>
//       <Model modalOpen={modalOpen} modal={modal} setModalOpen={setModalOpen} />
//     </>
//   );
// };

// If user click on it to on team card to show same data to show on pop up model of same user
const Model = ({ modalOpen, modal, setModalOpen }) => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Your Message Sent Successfully
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
