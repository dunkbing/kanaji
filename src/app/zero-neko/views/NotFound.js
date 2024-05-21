import React from "react";

const NotFound = () => {
  return (
    <div className="mx-8 my-6 flex flex-col space-y-4 lg:mx-32 lg:my-12 lg:mr-52 lg:space-y-8">
      <h2 className="text-center text-xl font-bold lg:text-5xl">
        404 NOT FOUND
      </h2>
      <h1 className="text-center text-xl font-bold lg:text-6xl">
        Sorry, this page isn&apos;t available.
      </h1>
      <p className="text-center text-sm font-bold lg:text-xl">
        Neko couldn&apos;t find what you were looking for.
        <span className="block">
          Maybe you should head back to the main page.
        </span>
      </p>
      <a
        href="/"
        className="hover:bg-primary mx-auto mt-4 flex self-start rounded-lg bg-gray-200 px-6 py-3 font-medium transition-all delay-150 hover:text-white lg:mt-8 lg:px-6 lg:py-4 lg:text-xl"
      >
        Back to Homepage
      </a>
    </div>
  );
};

export default NotFound;
