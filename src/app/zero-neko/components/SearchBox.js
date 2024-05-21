"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  let btn = useRef(null);
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      btn.click();
    }
  };
  return (
    <div className="focus-within:ring-primary flex w-full rounded-lg bg-gray-100 text-gray-700 transition-all duration-200 focus-within:ring-2 xl:w-96">
      <input
        autoComplete="off"
        onKeyDown={handleKeypress}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent px-6 outline-none focus:placeholder-gray-500"
        type="search"
        name="words"
        id="words"
        placeholder="English, Japanese, Kanji, Words"
      />
      <Link
        ref={(node) => (btn = node)}
        href={
          search === "" ? "" : "/search?words=" + encodeURIComponent(search)
        }
        className="transition-color hover:bg-primary ml-auto rounded-r-lg  bg-gray-200 p-3 duration-150 hover:text-white"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SearchBox;
