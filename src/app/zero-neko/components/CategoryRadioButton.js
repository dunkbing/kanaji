import React from "react";

const CategoryFilterButton = (props) => {
  return (
    <label
      className={
        (props.checked === props.value
          ? "bg-green-400 text-white"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300") +
        " cursor-pointer rounded-lg px-5 py-3 text-center text-lg filter lg:px-7 lg:py-4 lg:text-3xl "
      }
      htmlFor={props.name + props.value}
    >
      <input
        checked={props.checked === props.value}
        onChange={() => props.onSend(props.value)}
        className="mr-4 hidden"
        type="radio"
        value={props.value}
        id={props.name + props.value}
        name={props.name}
      />
      {props.value}
    </label>
  );
};

export default CategoryFilterButton;
