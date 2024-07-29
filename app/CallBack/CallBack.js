"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Line from "../Helper/lineHelper";
import Link from "next/link";

// import { useDebounce } from "../Helper/debounceHelper";

const CallBack = () => {
  const formRef = useRef(null);
  const item = ["Email me", "Call me"];
  const [TimeOfDay, setTimeOfDay] = useState();
  // const [selectedItem, setSelectedItem] = useState(item[0]);
  // Add your own number and email here.
  // const myNumber = "+12345678901";
  // const myEmail = "example@email.com";
  // function copyToClipboard() {
  //   if (selectedItem === item[0]) {
  //     navigator.clipboard.writeText(myEmail);
  //   } else {
  //     navigator.clipboard.writeText(myNumber);
  //   }
  // }
  // return (
  //   <>
  //     <div className="callback">
  //       <h1>Get in touch</h1>
  //       <p>I'd love to hear from you!</p>
  //       <label htmlFor="contactMethod" id="cmLabel">
  //         Contact Method:{" "}
  //       </label>
  //       <select
  //         name="contactMethod"
  //         id="contactMethod"
  //         onChange={(e) => setSelectedItem(e.target.value)}
  //       >
  //         {item.map((i) => (
  //           <option key={i} value={i}>
  //             {i}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //     <button onClick={copyToClipboard} whileHover={{ scale: 1.1 }}>
  //       Copy to Clipboard
  //     </button>
  //   </>
  // );
  // write intrest option

  const [refWidth, setRefWidth] = useState(0);
  const [interestOption, setInterestOption] = useState([]); // Given By us For Main Services Option...
  const [term, setTerm] = useState(""); // Use for PostCode find with Third Party Services...
  const [data, setData] = useState([]); // PostCode All Address Store is Here...
  const [activeItem, setActiveitem] = useState(item[0]); // Email or Call for which is active...
  const [selectedAddress, setSelectedAddress] = useState("");

  // Here All Services Option Now to save from Data.json and fetch them Direct form there...
  const servicesOptions = [
    // Commercial Building
    {
      id: 1,
      name: "Commercial Building (out fit)",
    },
    // Renovation House with option
    {
      id: 2,
      name: "Residential House",
      option: [
        {
          id: 201,
          type: "New Build",
        },
        {
          id: 202,
          type: "Renovation",
        },
      ],
    },
    // Loft Conversion
    {
      id: 3,
      name: "Loft Conversion",
    },
    // Rear Extension with option
    {
      id: 4,
      name: "Rear Extension",
      option: [
        {
          id: 401,
          type: "3m",
        },
        {
          id: 402,
          type: "6m",
        },
      ],
    },
    // Side extension
    {
      id: 5,
      name: "Side Extension",
    },
    // Resturent intenior
    {
      id: 6,
      name: "Resturant Interior",
    },
  ];
  // Handle The Email me or Call me...
  const handleme = (t) => {
    setActiveitem(t);
  };

  const handleAddress = (e) => {
    console.log(e.target.value);
    // if (!selectedAddress) return false;
    // setSelectedAddress()
    // after we have to give feature for use select a address direct from google map
    // window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedAddress}`, "_blank");
  };
  useEffect(() => {
    // This is the third Party api for testing purpose...
    const fetchApitest = async () => {
      await fetch(
        `https://api.getAddress.io/autocomplete/${term}?api-key=bBoK8wbA40-HPLgQ2K2uLw41885`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.suggestions);
          setData(data.suggestions);
        });
    };

    if (formRef.current) {
      setRefWidth(formRef.current.offsetWidth);
    }
    fetchApitest(); // Call the function...
    console.log("User Intrested Option", interestOption); // User intrested option is here...
    console.log("User Intrested Time", TimeOfDay); // User Select Which time...
  }, [interestOption, TimeOfDay, term]);

  return (
    <>
      {/* <!-- Hero --> */}
      <div className="relative">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              {activeItem === "Email me" ? (
                <img src="/images/Test.svg" alt="test" />
              ) : (
                <img src="/images/testc.svg" alt="test" />
              )}
              <p className="inline-block text-base font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                Creative Design & Construction
              </p>

              {/* <!-- Title --> */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-3xl">
                  {`Contact us anytime - Via ${
                    activeItem.split(" ")[0]
                  }  and we'll get back to
                  you soon.`}
                  {/* Our team is dedicated to addressing your concerns promptly and
                  thoroughly. */}
                </h1>

                <ul className="flex  text-gray-700 flex-col gap-y-3 list-disc list-inside">
                  <li>
                    At Creative Design & Construction, we understand that
                    navigating the world of design and construction can
                    sometimes feel overwhelming.
                  </li>
                  <li>
                    Don't hesitate to reach out anytime via email or call. We're
                    committed to responding promptly and thoroughly to your
                    inquiries.
                  </li>
                  <li>
                    Our email inbox or Call is like a friendly neighborhood
                    door, always open for you to share your thoughts, ask
                    questions, or simply connect with us. We're a team that
                    listens, understands and fulfilled.
                  </li>
                </ul>
                <p className="text-gray-700 font-medium mt-2">
                  So, don't be a stranger – fill the form of Request{" "}
                  {activeItem}. We're excited to hear from you and embark on
                  this journey together.
                </p>
              </div>
              {/* <!-- End Title --> */}
            </div>
            {/* <!-- Form --> */}
            <form>
              <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                {/* <!-- Card --> */}
                <div
                  ref={formRef}
                  className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg"
                >
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">
                      Request a {activeItem}
                    </h1>
                  </div>

                  <div className="mt-5">
                    {/* <!-- Tab Select --> */}
                    <div className="flex w-full justify-center items-center">
                      <div className="flex bg-gray-200/[.5] hover:bg-gray-200 rounded-xl transition p-1">
                        <nav
                          className="flex space-x-1"
                          aria-label="Tabs"
                          role="tablist"
                        >
                          {item.map((t, i) => (
                            <motion.button
                              transition={{
                                type: "tween",
                                duration: 0.4,
                                delay: 0.3,
                              }}
                              onClick={() => handleme(t)}
                              key={i}
                              type="button"
                              className={` relative transition-all ${
                                activeItem === t
                                  ? "bg-sky-600 text-white shadow-sm hover:text-gray-950"
                                  : "hover:text-gray-900 text-gray-800"
                              } text-xs sm:text-base text-gray-800 font-medium rounded-lg py-2 px-4`}
                              id={`ctc-component-signup-form-tab-preview-item-${t}`}
                            >
                              {t}
                            </motion.button>
                          ))}
                        </nav>
                      </div>
                    </div>
                    {/* <!-- Nav Tabs --> */}
                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                      {activeItem}
                    </div>
                    {/* <Line /> */}
                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* First Name Start */}
                      <div>
                        {/* <!-- Floating Input --> */}
                        <div className="relative">
                          <input
                            type="text"
                            id="hs-hero-signup-form-floating-input-first-name"
                            className="peer p-4 block w-full border-solid border-2 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                            placeholder="John"
                          />
                          <label
                            htmlFor="hs-hero-signup-form-floating-input-first-name"
                            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                          >
                            First name
                          </label>
                        </div>
                        {/* <!-- End Floating Input --> */}
                      </div>
                      {/* First Name End */}

                      {/* Last Name Start*/}
                      <div className="relative">
                        <input
                          type="text"
                          id="hs-hero-signup-form-floating-input-last-name"
                          className="peer p-4 block w-full border-solid border-2 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                          placeholder="Doe"
                        />
                        <label
                          htmlFor="hs-hero-signup-form-floating-input-last-name"
                          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          Last name
                        </label>
                      </div>
                      {/* Last Name End */}

                      {/*  Call me and Email Me Start */}
                      <div className="relative col-span-full">
                        {activeItem === "Call me" ? (
                          <div className="relative">
                            <input
                              type="tel"
                              id="hs-hero-signup-form-floating-input-call"
                              className="peer p-4 block w-full border-solid border-2 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="789456123"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-call"
                              className="absolute top-0 start-0 p-4 h-full text-sm  border border-transparent truncate pointer-events-none transition ease-in-out duration-100 peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Phone
                            </label>
                            {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                              Please provide a valid email address.
                            </p> */}
                          </div>
                        ) : (
                          <div className="relative">
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              className="peer p-4 block w-full border-2 border-solid border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-[#217AFF] focus:ring-[#217aff] disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="you@email.com"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-email"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Email
                            </label>
                            {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                              Please provide a valid email address.
                            </p> */}
                          </div>
                        )}
                        {/* <!-- End Floating Input --> */}
                      </div>
                      {/*  Call me and Email Me End */}

                      {/* PostCode Finder Start */}
                      {/* <PostcodeLookupField setPostcode={setPostcode} postcode={postcode}/> */}
                      <div className="relative col-span-full">
                        <div className="relative">
                          <input
                            type="text"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            id="hs-hero-signup-form-floating-input-code"
                            className="peer p-4 block w-full border-2 border-solid border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-[#217AFF] focus:ring-[#217aff] disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                            placeholder="you@email.com"
                          />
                          <label
                            htmlFor="hs-hero-signup-form-floating-input-code"
                            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                          >
                            Enter Address
                          </label>
                          {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                              Please provide a valid email address.
                            </p> */}
                        </div>
                        {/* <!-- End Floating Input --> */}
                      </div>
                      {/* PostCode Finder End */}
                      {data && data.length > 0 && (
                        <div className="relative col-span-full">
                          <select
                            onChange={(e) => setSelectedAddress(e.target.value)}
                            className="block border-2 border-solid border-gray-200 rounded-lg p-4 relative col-span-full xl:text-base w-[-webkit-fill-available] text-sm"
                          >
                            {data &&
                              data.map((item) => (
                                <option
                                  className=" text-ellipsis"
                                  key={item.id}
                                  value={item.address}
                                >
                                  {item.address}
                                </option>
                              ))}
                          </select>
                        </div>
                      )}

                      {/* Intrested In Start */}
                      <div className=" col-span-full overflow-hidden">
                        <div className="flex flex-col">
                          <span className="block mb-2 font-medium text-gray-500 tracking-tight">
                            Interested in?
                          </span>
                          <div className="mt-2 relative flex flex-wrap shadow-inner col-span-full h-[150px] border-2 p-2 border-gray-200 rounded-md  cursor-all-scroll overflow-scroll hover:will-change-scroll">
                            {servicesOptions.map((option) => (
                              <LabelCheckbox
                                option={option}
                                key={option.id}
                                opName={interestOption}
                                setOpName={setInterestOption}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Intrested In End */}
                      {/* Specific Time Start */}
                      <div className=" relative col-span-full">
                        <p className="mb-4 font-medium text-gray-500 tracking-tight">
                          When can we best reach you?
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {[
                            "In the Morning",
                            "During the Day",
                            "In the Evening",
                          ].map((ite, index) => (
                            <label key={index} className="cursor-pointer">
                              <input
                                type="radio"
                                className="peer sr-only"
                                name="time"
                                value={ite}
                                onChange={(e) => setTimeOfDay(e.target.value)}
                              />
                              <div className="w-auto max-w-xl rounded-full bg-gray-100 p-2 text-gray-500 ring-2 ring-transparent  transition-all  hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                <div className="flex flex-col ">
                                  <div className="flex items-center justify-between gap-2">
                                    <div>
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                                        />
                                      </svg>
                                    </div>
                                    <p className="text-sm font-semibold uppercase peer-checked:text-sky-600 ">
                                      {ite}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                      {/* Specific Time End */}
                    </div>
                    {/* <!-- End Grid --> */}

                    {/* Check Box Start */}
                    <div className="mt-5  items-center">
                      <div className="flex flex-row">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-sky-600 pointer-events-none focus:ring-blue-500"
                        />
                        <div className="ms-3">
                          <label htmlFor="remember-me" className="text-sm">
                            I accept the{" "}
                            <Link
                              className="text-sky-600 decoration-2 hover:underline font-medium"
                              href="/Terms"
                            >
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400 font-medium group">
                        We respect your{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-sky-600 group-hover:cursor-pointer group-hover:text-sky-900"
                        >
                          Privacy
                        </Link>
                        . Your information will not be shared with any one
                      </span>
                    </div>
                    {/* Check Box End */}
                    {/* Submit Button Start */}
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Request {activeItem.split(" ")[0]} back
                      </button>
                    </div>
                    {/* Submit Button End */}
                  </div>
                </div>
                {/* <!-- End Card --> */}
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Clients Section --> */}
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default CallBack;

const LabelCheckbox = ({ option, opName, setOpName }) => {
  const [opActive, setOpActive] = useState({});
  const [subOp, setSubOp] = useState([]);

  //   // This is for active
  const isOptionSelected = opName.some((tag) => tag.id === option.id);

  // Handle Main Tag If they Have sub Tag open sub tag
  const handleTag = (op) => {
    if (!op.hasOwnProperty("option")) {
      const existingOption = opName.find((tag) => tag.id === op.id);

      if (existingOption) {
        // If option already exists, remove it
        setOpName((prev) => prev.filter((tag) => tag.id !== op.id));
      } else {
        // If option does not exist, add it
        setOpName((prev) => [...prev, { id: op.id, name: op.name }]);
      }
    } else {
      const existingOption = subOp.find((tag) => tag.id === op.id);
      if (existingOption) {
        setSubOp(subOp.filter((tag) => tag !== op));
      } else {
        setSubOp((prev) => [...prev, { id: op.id, subop: op.option }]);
        setOpActive({ id: op.id, name: op.name });
      }
    }
  };
  // Handle Sub tag Here and Unselect as well
  const handlesub = (sub) => {
    const existingOption = opName.find((tag) => tag.id === opActive.id);
    if (existingOption) {
      // console.log("if main part run", existingOption.option);
      const foundIndex = existingOption.option.findIndex(
        (item) => item.id === sub.id
      );
      // console.log("found inedx if run", foundIndex);
      if (foundIndex !== -1) {
        const updatedData = [...opName];
        const foundObject = opName.find((tag) => tag.id === opActive.id);
        // const foundObject = updatedData[foundIndex];
        foundObject.option = foundObject.option.filter(
          (option) => option.id !== sub.id
        );

        if (foundObject.option.length === 0) {
          // If the 'option' array is empty, remove the entire object
          updatedData.splice(updatedData.indexOf(foundObject), 1);
          //   updatedData.splice(foundIndex, 1);
        }
        setOpName(updatedData);
      } else {
        // console.log("else part work");
        const existingOptionIndex = opName.findIndex(
          (tag) => tag.id === opActive.id
        );
        const updatedOpName = [...opName];
        updatedOpName[existingOptionIndex].option.push(sub);
        setOpName(updatedOpName);
      }
    } else {
      // If option does not exist, add it
      setOpName((prev) => [...prev, { ...opActive, option: [sub] }]);
      // console.log(opName);
    }
  };

  return (
    <>
      <div
        key={option.id}
        onClick={() => handleTag(option)}
        className={`w-max justify-center cursor-pointer  bg-gray-100 text-gray-500 ring-2 ring-transparent  transition-all  hover:shadow items-center font-semibold rounded-full border-2 mr-4 mt-4 p-2 text-sm ${
          isOptionSelected ? "text-sky-600 ring-blue-400 ring-offset-2" : ""
        }`}
      >
        {option.icon && (
          <span
            className="text-blue-600"
            dangerouslySetInnerHTML={{ __html: option.icon }}
          ></span>
        )}
        {option.name}
      </div>

      {subOp
        .filter((item) => item.id === opActive.id)
        .map((subitem) => {
          // console.log("subitem:", subitem);
          const subItems = subitem.subop.map((ite) => {
            const allOptionIds = opName.some(
              (item) =>
                item.option &&
                item.option.some((option) => option.id === ite.id)
            );
            return (
              <span
                key={ite.id}
                onClick={() => handlesub(ite)}
                className={`${
                  allOptionIds ? "bg-black text-white" : "text-black bg-white"
                } w-max justify-center items-center rounded-full border-2 mt-4 mr-2 p-2 text-sm`}
              >
                {ite.type}
              </span>
            );
          });

          return subItems;
        })}
    </>
  );
};
