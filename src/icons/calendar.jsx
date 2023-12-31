import React from "react";

export default function Calendar({ width, height, stroke = "#FF6464" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4.33334C2 3.78106 2.44772 3.33334 3 3.33334H13C13.5523 3.33334 14 3.78106 14 4.33334V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V4.33334Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6H2"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66666 3.33333V2"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 3.33333V2"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
