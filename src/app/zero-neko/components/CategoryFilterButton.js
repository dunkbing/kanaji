import React from "react";

const CategoryFilterButton = (props) => {
  return (
    <label
      className={
        (props.checked === props.category
          ? "bg-gray-200 shadow-inner"
          : "shadow hover:bg-gray-100 hover:bg-opacity-90") +
        " cursor-pointer rounded-lg p-2 text-base capitalize"
      }
      htmlFor={props.category}
    >
      <input
        disabled={props.checked === props.category}
        className="mr-2 hidden"
        type="radio"
        id={props.category}
        name="grade"
        value={props.category}
        onClick={() => props.onSend(props.category)}
      />
      {props.category}
    </label>
  );
};

export default CategoryFilterButton;
