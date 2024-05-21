"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavLinks = (props) => {
  const [show, setShow] = useState(false);

  return (
    <li className="group relative" onClick={() => setShow(!show)}>
      <Link
        href={props.nav.type === "dropdown" ? "" : props.nav.path}
        className={
          (props.nav.type !== "dropdown" ? "flex" : "hidden ") +
          "flex  text-lg font-semibold tracking-wider text-gray-500 transition-all delay-150 hover:text-gray-700"
        }
      >
        <span>{props.nav.title}</span>
      </Link>
      <div
        className={
          (props.nav.type === "dropdown" ? "flex" : "hidden ") +
          " cursor-pointer text-lg  font-semibold tracking-wider text-gray-500 transition-all delay-150 hover:text-gray-700"
        }
      >
        <span>{props.nav.title}</span>
        <div className={(show ? "rotate-180 transform " : "") + "my-auto"}>
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
          " absolute -left-16 top-12 z-10 w-32 justify-center rounded-md border border-gray-200 bg-gray-200 p-4"
        }
      >
        <ul className="flex flex-col space-y-3">
          <Link
            className="whitespace-nowrap font-bold text-gray-900 hover:text-gray-700"
            href={"/game/typerace"}
          >
            Type Racing
          </Link>
          <Link
            className="whitespace-nowrap font-bold text-gray-900 hover:text-gray-700"
            href={"/game/pairing-kana"}
          >
            Pairing Kana
          </Link>
          <Link
            className="whitespace-nowrap font-bold text-gray-900 hover:text-gray-700"
            href={"/game/falling-words"}
          >
            Falling Words
          </Link>
          <Link
            className="whitespace-nowrap font-bold text-gray-900 hover:text-gray-700"
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
