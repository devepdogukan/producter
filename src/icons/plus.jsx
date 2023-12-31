import React from "react";

export default function Plus({ width, height, stroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.0002 2.6667V13.3334M13.3335 8.00004H2.66687H13.3335Z"
        stroke={stroke ?? "#405175"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
