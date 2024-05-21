import React from "react";

const logoIcon = "/images/logo.png";

const FallbackLoading = (props) => {
  return (
    <div
      className={`${!props.text ? "animate-pulse" : ""} flex flex-col items-center ${props.height} my-4 py-4`}
    >
      <img
        className={!props.text && !props.span ? "m-auto" : "m-auto mb-8"}
        src={logoIcon}
        alt="logo-loading"
        width="200"
      />
      <p>{props.text}</p>
      <span>{props.span}</span>
    </div>
  );
};

export default FallbackLoading;
