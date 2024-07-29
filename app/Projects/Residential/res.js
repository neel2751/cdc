"use client";
import PaginationHelper from "@/app/Helper/paginationHelper";
import { PORTFOLIO } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // usePathname, useSearchParams, useRouter

const res = () => {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1); // set the page number in localstorage
  const [proData, setProData] = useState("");
  const router = useRouter();

  const onPageChange = (page) => {
    setCurrentPage(page); // set the page number in localstorage
    router.push(`/Projects/Residential?page=${page}`, { scroll: false }); // redirect to the same page with the new page number
  };
  // if open one data to show to user
  const handleModel = (project) => {
    setOpen(!open);
    setProData(project);
  };

  const pageSize = 9;

  const lastPage = Math.ceil(PORTFOLIO.length / pageSize);

  const currentData = PORTFOLIO.slice(
    (currentPage - 1) * pageSize,
    currentPage === lastPage ? PORTFOLIO.length : currentPage * pageSize
  );

  return (
    // <!-- Card Blog -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Card --> */}
        {currentData.map((data) => (
          <Link
            href={`/Projects/${data.link}`}
            key={data.id}
            className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:border-gray-700 dark:shadow-slate-700/[.7] hover:shadow-lg hover:border-[#007dff]"
          >
            <Image
              width={800}
              height={400}
              //   src="/images/portfolio/Res/21Res.jpg"
              src={
                "https://cdcgrouplimited.com/nodejs/uploads/projects/" +
                data.images_link +
                "/" +
                data.image
              }
              className="h-52 flex flex-col object-cover justify-center items-center bg-blue-600 rounded-t-xl"
            />
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 group-hover:text-neutral-800">
                {data.project}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-gray-800 group-hover:text-[#0053e3]">
                {/* 21 Gaysham Avenue, Ilford */}
                {data.title}
              </h3>
              {/* <p className="mt-3 text-gray-500">{data.description}</p> */}
            </div>
            {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700"> */}
            {/* <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                href={`/Projects/${data.link}`}
              >
                View Deatils
              </Link> */}
            {/* <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={`/Projects/${data.link}`}
              >
                View Deatils
              </Link> */}
            {/* <button
                onClick={() => handleModel(data)}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Quick View
              </button> */}
            {/* {open && <QuickView proData={proData} setOpen={setOpen} />} */}
            {/* </div> */}
          </Link>
        ))}
        {/* <!-- End Card --> */}
      </div>
      <div className="mt-4">
        <PaginationHelper
          items={PORTFOLIO.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Card Blog -->
  );
};

export default res;

const QuickView = ({ proData, setOpen }) => {
  return (
    <div>
      <div className="relative z-10">
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                      src={proData.image}
                      alt={"product.imageAlt"}
                      className=" object-cover object-center"
                      style={{ height: "400px", width: "400px" }}
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {/* {"21 Gaysham Avenue, Ilford"} */}
                      {proData.title}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only"></h3>

                      <p className="text-lg text-gray-900">
                        {proData.description}
                      </p>

                      {/* Reviews */}
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Project Review
                      </h3>

                      <form>
                        {/* Sizes */}
                        <div className="mt-10"></div>

                        <button
                          onClick={() => setOpen(false)}
                          type="button"
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Close
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
