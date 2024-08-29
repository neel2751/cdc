"use client";
import PaginationHelper from "@/app/Helper/paginationHelper";
import { PORTFOLIO } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation"; // usePathname, useSearchParams, useRouter

const test = ({ data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageSize = 9;
  const filterData = PORTFOLIO.filter((item) => item.project === data); // filter the data
  const lastPage = Math.ceil(filterData.length / pageSize); // calculate the last page

  // we have to update the page number in state
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1); // set the page number in localstorage

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value); // set the page number in search params
      return params.toString(); // return the query string
    },
    [searchParams]
  ); // we have to pass searchParams as a dependency

  useEffect(() => {
    // if the page number is not valid
    if (searchParams.get("page") > lastPage) {
      setCurrentPage(lastPage); // update the page number in state
      router.push(pathname + "?" + createQueryString("page", lastPage)); // redirect to the first page
    }
    if (searchParams.get("page") < 1) {
      setCurrentPage(1); // update the page number in state
      router.push(pathname + "?" + createQueryString("page", 1)); // redirect to the first page
    }
    // if there is no page  number in the url
    if (!searchParams.get("page")) {
      // if there is no page number in the url
      setCurrentPage(1); // update the page number in state
      router.push(pathname + "?" + createQueryString("page", 1)); // redirect to the first page
    }
  }, [currentPage]);

  const onPageChange = (page) => {
    if (page > lastPage) {
      // if the page number is greater than the last page
      setCurrentPage(lastPage); // update the page number in state
      router.push(pathname + "?" + createQueryString("page", lastPage)); // redirect to the last page
      //   router.push(`${pathname}?page=${lastPage}`); // redirect to the same page with the new page number
    } else {
      setCurrentPage(page); // set the page number in localstorage
      router.push(pathname + "?" + createQueryString("page", page)); // update the page
    }
  };

  const currentData = filterData.slice(
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
            href={`/Projects/Residential/${data.link}`}
            key={data.id}
            className="group flex flex-col h-full bg-white border overflow-hidden border-gray-200 shadow-sm rounded-xl dark:border-gray-700 dark:shadow-slate-700/[.7] hover:shadow-lg hover:border-[#007dff]"
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
              alt={data.title} // alt text for image
              className="h-52 flex flex-col object-cover justify-center items-center bg-blue-600 rounded-t-xl overflow-clip group-hover:scale-105 transform-gpu transition duration-300 ease-in-out"
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
          </Link>
        ))}
        {/* <!-- End Card --> */}
      </div>
      {filterData.length > pageSize && (
        <div className="mt-4">
          <PaginationHelper
            items={filterData.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      )}
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Card Blog -->
  );
};

export default test;
