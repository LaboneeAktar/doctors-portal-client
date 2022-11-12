import React from "react";

const Patient = ({ patient }) => {
  const { name, address, message, img } = patient;
  return (
    <div className="lg:mt-16 lg:mb-16">
      <div className="max-w-md p-6 overflow-hidden rounded-lg  bg-base-200 shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <p className="mt-4 dark:text-gray-400">{message}</p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src={img}
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-semibold">{name}</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                {address}
              </time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Patient;
