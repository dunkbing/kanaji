import React from "react";

const Toggle = () => {
  const button = (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
      ></path>
      <path
        stroke="currentColor"
        d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
      ></path>
    </svg>
  );

  return (
    <label className="absolute right-4 top-0 my-5 mr-0 cursor-pointer rounded-full bg-gray-100 transition-all delay-150 hover:bg-gray-200 lg:relative lg:p-1">
      <div
        className={"flex content-center p-3 text-gray-700 hover:bg-opacity-70"}
      >
        {button}
      </div>
    </label>
  );
};
export default Toggle;
