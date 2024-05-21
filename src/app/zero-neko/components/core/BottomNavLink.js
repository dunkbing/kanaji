import React from "react";
import Link from "next/link";

const BottomNavLink = (props) => {
  return (
    <li className="flex w-2/12 flex-1 text-center text-sm text-gray-400 transition-all delay-150 focus:outline-none">
      <Link
        className="flex h-full w-full flex-col space-y-2"
        aria-label={props.title}
        href={props.path}
      >
        <div className="my-auto flex flex-col space-y-1">
          <span className="text-lg">{props.icon}</span>
          <span className="">{props.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default BottomNavLink;
