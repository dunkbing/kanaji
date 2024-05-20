"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavLinks = (props) => {
  const [show, setShow] = useState(false);

  return (
    <li className="relative group" onClick={() => setShow(!show)}>
      <Link
        href={props.nav.type === "dropdown" ? "" : props.nav.path}
        className={
          (props.nav.type !== "dropdown" ? "flex" : "hidden ") +
          "transition-all  delay-150 flex text-gray-500 hover:text-gray-700 font-semibold text-lg tracking-wider"
        }
      >
        <span>{props.nav.title}</span>
      </Link>
      <div
        className={
          (props.nav.type === "dropdown" ? "flex" : "hidden ") +
          " transition-all delay-150  text-gray-500 hover:text-gray-700 font-semibold text-lg tracking-wider cursor-pointer"
        }
      >
        <span>{props.nav.title}</span>
        <div className={(show ? "transform rotate-180 " : "") + "my-auto"}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={
          (props.nav.type !== "dropdown"
            ? "hidden"
            : show
              ? "flex"
              : "hidden") +
          " absolute justify-center top-12 -left-16 w-32 z-10 bg-gray-200 p-4 rounded-md border border-gray-200"
        }
      >
        <ul className="flex flex-col space-y-3">
          <Link
            className="font-bold text-gray-900 hover:text-gray-700 whitespace-nowrap"
            href={"/game/pairing-kana"}
          >
            Pairing Kana
          </Link>
          <Link
            className="font-bold text-gray-900 hover:text-gray-700 whitespace-nowrap"
            href={"/game/typerace"}
          >
            Type Racing
          </Link>
          <Link
            className="font-bold text-gray-900 hover:text-gray-700 whitespace-nowrap"
            href={"/game/falling-words"}
          >
            Falling Words
          </Link>
          <Link
            className="font-bold text-gray-900 hover:text-gray-700 whitespace-nowrap"
            href={"/game"}
          >
            All
          </Link>
        </ul>
      </div>
    </li>
  );
};

export default NavLinks;
