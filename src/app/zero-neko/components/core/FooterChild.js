import React from "react";

const FooterChild = (props) => {
  return (
    <div className="col-3">
      <h1 className="text-medium text-sm font-semibold tracking-widest lg:text-base">
        {props.title}
      </h1>
      <ul className="mt-2 space-y-2 lg:mt-3">
        {props.data.map((nav, index) => {
          return (
            <li
              className="hover:text-primary py-1 text-sm transition-all delay-75 lg:text-base"
              key={index}
            >
              <a
                className=""
                href={nav.path}
                rel="noreferrer"
                target={props.targetBlank ? '"_blank" ' : ""}
              >
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterChild;
