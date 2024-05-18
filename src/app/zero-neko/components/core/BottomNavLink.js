import React from 'react';
import Link from 'next/link'

const BottomNavLink = (props) => {
  return (
    <li className="flex flex-1 transition-all w-2/12 delay-150 text-center text-gray-400 focus:outline-none text-sm">
      <Link
        className="flex flex-col space-y-2 w-full h-full"
        aria-label={props.title}
        href={props.path}
      >
        <div className="flex flex-col my-auto space-y-1">
          <span className="text-lg">{props.icon}</span>
          <span className="">{props.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default BottomNavLink;
