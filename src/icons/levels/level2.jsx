import React from "react";

export default function Level2({ stroke = "#FFD166" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33344 8V14H4.0001V8H1.33344Z"
        fill={stroke}
        stroke={stroke}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V14H14.6667V2H12Z"
        fill="#DDDDDD"
        stroke="#DDDDDD"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66656 5V14H9.33323V5H6.66656Z"
        fill={stroke}
        stroke={stroke}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
