import Image from "next/image";
import React from "react";

const ProjectDetail = ({ data }) => {
  const images = [];
  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const url = "https:/cdcgrouplimited.com/nodejs/uploads/projects/";
  for (let i = 1; i <= data.images; i++) {
    images.push(
      <Image
        className="rounded-xl"
        width={800}
        height={600}
        src={`${url}${data.images_link}/${i}.jpg`}
        alt="project"
        key={i}
        // placeholder="blur" // Optional blur-up while loading image
        // blurDataURL={`${url}${data.images_link}/${i}.jpg`}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    );
  }
  return (
    <>
      {/* <div className="p-10">
        <h2 className="text-2xl font-bold text-gray-900">{data.title}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-500">
          {data.description}
        </p>
        {data.images.length > 2 ? (
          <div className="grid grid-cols-4 grid-rows-4 h-96 gap-4">
            <div className=" lg:col-span-2 lg:row-span-4 col-span-6 row-span-2">
              <img
                className=" h-full w-full object-cover rounded-2xl drop-shadow-md border border-slate-600"
                src={data.image}
                alt="test"
              />
            </div>
            <div className="lg:col-span-2 lg:row-span-2 col-span-2 row-span-1">
              <img
                className=" rounded-2xl h-full w-full object-cover border drop-shadow-md border-slate-600"
                src={data.images[0].image}
                alt="test"
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-1">
              <img
                className=" rounded-2xl h-full w-full object-cover border drop-shadow-md border-slate-600"
                src={data.images[1].image}
                alt="test"
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-1">
              <img
                className="rounded-2xl h-full w-full object-cover border  drop-shadow-md border-slate-600"
                src={data.images[2].image}
                alt="test"
              />
            </div>
          </div>
        ) : (
          <div className=" isolate relative">
            <div className="xl:max-w-7xl mt-4 overflow-hidden lg:shadow-card">
              <img
                className="inset-0 -z-10 rounded-3xl object-cover w-full aspect-[5/2]"
                src={data.images[0].image}
              />
            </div>
          </div>
          // <div className=" max-w-7xl rounded-2xl aspect-[5/2.3] overflow-hidden ">
          //   <img
          //     src={data.images[0].image}
          //     alt="product image"
          //     className="rounded-t-lg w-full h-auto"
          //   />
          // </div>
        )}
      </div> */}
      {/* <!-- Blog Article --> */}
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* <!-- Content --> */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {data.title}
              </h2>

              <p className="text-lg text-gray-800 ">{data.description}</p>
            </div>
            {/*  put loader for image loading using the shimmer effect of images */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              {images}
            </div>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
    </>
  );
  //   return <div>ProjectDetail {data}</div>;
};

export default ProjectDetail;
