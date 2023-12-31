import React from "react";

export default function Home({ width, height, stroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.32732 6.49044C2.11885 6.67996 2 6.94863 2 7.23037V13.6667C2 14.219 2.44772 14.6667 3 14.6667H13C13.5523 14.6667 14 14.219 14 13.6667V7.23037C14 6.94863 13.8812 6.67996 13.6727 6.49044L8.67268 1.94489C8.29126 1.59813 7.70874 1.59813 7.32732 1.94489L2.32732 6.49044Z"
        stroke={stroke ?? "#405175"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.33334H6V14.6667H10V9.33334Z"
        stroke={stroke ?? "#405175"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
