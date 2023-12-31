import React from "react";

export default function Search({ width, height, stroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.60712 9.60806L13.3324 13.3333"
        stroke={stroke ?? "#8C97AC"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66608 10.6667C8.87522 10.6667 10.6661 8.8758 10.6661 6.66666C10.6661 4.45752 8.87522 2.66666 6.66608 2.66666C4.45694 2.66666 2.66608 4.45752 2.66608 6.66666C2.66608 8.8758 4.45694 10.6667 6.66608 10.6667Z"
        stroke={stroke ?? "#8C97AC"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
