import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const KanjiBox = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const [kanji, setKanji] = useState();
  useEffect(() => {
    const fetchData = async () => {
      axios("https://kanjiapi.dev/v1/kanji/" + props.data).then((response) => {
        setKanji(response.data);
      });
    };
    fetchData();
  }, [props.data]);
  let n = 8;
  if (isDesktopOrLaptop) {
    n = 9;
  }
  const loading = (
    <li className="col-span-1 box-border rounded-md bg-gray-50 p-2 py-8 shadow-md transition-all delay-75 hover:shadow-none">
      <svg
        className="p mx-auto animate-spin"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4.75V6.25" stroke="currentColor"></path>
        <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor"></path>
        <path d="M19.25 12L17.75 12" stroke="currentColor"></path>
        <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor"></path>
        <path d="M12 17.75V19.25" stroke="currentColor"></path>
        <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor"></path>
        <path d="M6.25 12L4.75 12" stroke="currentColor"></path>
        <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor"></path>
      </svg>
    </li>
  );
  if (kanji === undefined) {
    return loading;
  } else if (!kanji.meanings[0]) {
    return null;
  }
  return (
    <li className="col-span-1 box-border rounded-md bg-gray-50 shadow-md hover:cursor-pointer hover:shadow-none">
      <a
        href={"/kanji/" + (kanji ? kanji.kanji : "")}
        className="block h-full w-full p-2 lg:py-4"
      >
        <p className="mb-2 text-xl font-black lg:text-3xl">
          {kanji ? kanji.kanji : ""}
        </p>
        <p className="text-primary whitespace-nowrap text-xs font-semibold capitalize lg:text-base">
          {kanji
            ? kanji.meanings[0].length >= n
              ? kanji.meanings[0].substr(0, n - 3).trim() + ".."
              : kanji.meanings[0]
            : "X"}
        </p>
      </a>
    </li>
  );
};

export default KanjiBox;
