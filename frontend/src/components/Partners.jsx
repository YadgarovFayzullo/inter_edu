import React from "react";
// import partner from "/partner1.jpeg";

export default function Partners() {
  return (
    <div className="">
      <div className="mb-32 text-center">
        <h1 className="text-4xl font-Arimo">Our Partners</h1>
      </div>
      <div className="mb-5 ">
        <a
          href="https://play.google.com/store/apps/details?id=com.NodirYodgorov.ARProjection"
          className="ml-10 mr-5 flex flex-col items-center h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-sm hover:shadow-md duration-200"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            // src="/partner1.jpeg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              AR Projection
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, esse asperiores odio ducimus pariatur similique nihil
              labore molestiae maiores quisquam.
            </p>
          </div>
        </a>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.NodirYodgorov.ARProjection"
        className="ml-10 mr-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:justify-around lg:shadow-lg hover:shadow-2xl duration-200"
      >
        <img
          className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/partner1.jpeg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            AR Projection
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            esse asperiores odio ducimus pariatur similique nihil labore
            molestiae maiores quisquam.
          </p>
        </div>
      </a>
    </div>
  );
}
