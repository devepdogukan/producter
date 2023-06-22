import React from "react";

export default function Controls({ width, height, stroke }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12H19M17 18V6V18ZM12 18V6V18ZM7 18V6V18ZM5 8H9H5ZM10 16H14H10Z"
        stroke={stroke ?? "#8C97AC"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
