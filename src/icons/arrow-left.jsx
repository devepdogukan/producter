import React from "react";

export default function ArrowLeft({ width, height, stroke }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L3 12L9 18"
        stroke={stroke ?? "#405175"}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M21.0001 12H4.00006"
        stroke={stroke ?? "#405175"}
        strokeWidth="1.3"
        strokeLinejoin="bevel"
      />
      <path
        d="M3 12H4"
        stroke={stroke ?? "#405175"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
