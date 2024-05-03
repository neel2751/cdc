import React from "react";

const ProjectDetail = ({ data }) => {
  return (
    <>
      <div className="p-10">
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
          <div class=" isolate relative">
            <div class="xl:max-w-7xl mt-4 overflow-hidden lg:shadow-card">
              <img
                class="inset-0 -z-10 rounded-3xl object-cover w-full aspect-[5/2]"
                src={data.images[0].image}
              />
            </div>
          </div>
          // <div class=" max-w-7xl rounded-2xl aspect-[5/2.3] overflow-hidden ">
          //   <img
          //     src={data.images[0].image}
          //     alt="product image"
          //     class="rounded-t-lg w-full h-auto"
          //   />
          // </div>
        )}
      </div>
    </>
  );
  //   return <div>ProjectDetail {data}</div>;
};

export default ProjectDetail;
