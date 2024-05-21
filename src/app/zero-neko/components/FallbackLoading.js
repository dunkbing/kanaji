import React from "react";

const logoIcon = "/images/logo-icon.svg";

const FallbackLoading = (props) => {
  return (
    <div
      className={
        (!props.text ? "animate-pulse" : "") +
        " h- col-span-full flex w-full flex-col" +
        props.height +
        " py-" +
        props.paddingY +
        " my-" +
        props.marginY
      }
    >
      <img
        className={!props.text && !props.span ? "m-auto" : "m-auto mb-8"}
        src={logoIcon}
        alt="logo-loading"
        width="100"
      />
      <div className="mb-auto text-center">
        <p>{props.text}</p>
        <span>{props.span}</span>
      </div>
    </div>
  );
};

export default FallbackLoading;
