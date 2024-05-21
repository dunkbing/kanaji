"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

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
      <Input
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
        className="transition-color hover:bg-primary ml-auto flex items-center rounded-r-lg border-2 border-black bg-gray-200 px-2 duration-150 hover:text-white"
      >
        🔍
      </Link>
    </div>
  );
};

export default SearchBox;
