import React from "react";

export default function Flex({ width, height, stroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_207)">
        <path
          d="M6 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H6C6.55228 10 7 9.55228 7 9V3C7 2.44772 6.55228 2 6 2Z"
          stroke={stroke ?? "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 2H10C9.44772 2 9 2.44772 9 3V13C9 13.5523 9.44772 14 10 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2Z"
          stroke={stroke ?? "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_207">
          <rect width="16" height="16" fill={stroke ?? "white"} />
        </clipPath>
      </defs>
    </svg>
  );
}
