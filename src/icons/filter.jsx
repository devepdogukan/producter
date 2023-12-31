import React from "react";

export default function Filter({ width, height, stroke }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50049 9.19569L3.02148 2.97894H15.0215L10.5005 9.24669V12.7499L7.50049 14.9999V9.19569Z"
        stroke={stroke ?? "#8C97AC"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
