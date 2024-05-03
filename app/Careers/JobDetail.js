import React from "react";
import JobSubmit from "./JobSubmit/JobSubmit";

const JobDetail = ({ params }) => {
  const Responsibility = [
    {
      id: 1,
      description:
        "Collaborate with the design team to develop innovative and functional architectural solutions.",
    },
    {
      id: 2,
      description: "Produce detailed drawings, plans, and specifications.",
    },
    {
      id: 3,
      description: `Conduct site visits and assessments.`,
    },
    {
      id: 4,
      description: `Assist in project coordination and management.`,
    },
  ];
  const Requirements = [
    {
      id: 1,
      description:
        "Minimum of 3 years of job experience in the architectural design sector.",
    },
    {
      id: 2,
      description:
        "Proficiency in CAD software and other relevant design tools.",
    },
    {
      id: 3,
      description: `Strong communication and interpersonal skills.`,
    },
    {
      id: 4,
      description: `Ability to work collaboratively in a team environment.`,
    },
    {
      id: 5,
      description: `Attention to detail and a passion for creative design.`,
    },
  ];
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Creative Design & Construction
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {params
                  ? "Assistant Architectural Designer"
                  : "Assistant Architectural Designer"}
              </h1>
              <div className="mt-4">
                <ul>
                  <li className="flex">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Deadline for Application:
                      </strong>{" "}
                      01 March 2024
                    </span>
                  </li>
                  <li className="flex mt-2">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Annual Salary:
                      </strong>{" "}
                      £28,000.00
                    </span>
                  </li>
                  <li className="flex mt-2">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Job Type:
                      </strong>{" "}
                      Full-Time
                    </span>
                  </li>
                  <li className="flex mt-2">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Experience:
                      </strong>{" "}
                      Minimum of 3 years in the relevant sector
                    </span>
                  </li>
                </ul>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-black">
                Overview
              </h2>
              <p className="mt-2 text-md font-medium leading-1 text-gray-700">
                Creative Design &amp; Construction Limited is a dynamic and
                innovative architectural design and construction firm based in
                Ilford. From top to bottom, our team makes growth a top
                priority, and it's ingreined in our company culture. But most
                importantly,we enjoy making cutomers happy. We are currently
                seeking a skilled and motivated individual to join our team in
                the position of{" "}
                <span>
                  <strong>Assistant Architectural Designer</strong> The
                  successful candidate will be responsible for providing high
                  quality assistance to the Principal Architect on all aspects
                  of project work from initial concept through to{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* This is the main place for form */}
        {/* This is the main place for form */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className=" text-gray-900">
                <strong className="text-lg">Responsibilities</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {Responsibility.map((item) => (
                    <li key={`responsibility-item${Math.random()}`}>
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 text-gray-900">
                <strong className="text-lg">Requirements</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {Requirements.map((item) => (
                    <li key={`responsibility-item${Math.random()}`}>
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Deadline for Application:
                    </strong>{" "}
                    01 March 2024
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Deadline for Application:
                    </strong>{" "}
                    01 March 2024
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Deadline for Application:
                    </strong>{" "}
                    01 March 2024
                  </span>
                </li>
              </ul> */}
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                How to Apply
              </h2>
              <p className="mt-4">
                Interested candidates should submit their Resume/CV, portfolio,
                and a cover letter detailing their relevant experience to
                info@cdc.construction. Please use &quot;Assistant Architectural
                Designer Application&quot; as the subject of the email or submit
                Form.
              </p>
              <blockquote className=" text-blue-500 mt-6 text-sm font-semibold">
                Creative Design &amp; Construction Limited is an
                equal-opportunity employer. We encourage applications from
                candidates of all backgrounds.
              </blockquote>
            </div>
          </div>
        </div>
        <div className="xl:p-12 p-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* <div className="max-w-none rounded-xl sm:w-[57rem]"> */}
          <JobSubmit />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
