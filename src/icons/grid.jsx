import React from "react";

export default function Grid({ width, height, stroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_198)">
        <path
          d="M13.6667 1.33334H2.33334C1.78106 1.33334 1.33334 1.78106 1.33334 2.33334V13.6667C1.33334 14.219 1.78106 14.6667 2.33334 14.6667H13.6667C14.219 14.6667 14.6667 14.219 14.6667 13.6667V2.33334C14.6667 1.78106 14.219 1.33334 13.6667 1.33334Z"
          stroke={stroke ?? "#8C97AC"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33334 4.66666H11.3333M7.33334 7.99999H11.3333M7.33334 11.3333H11.3333"
          stroke={stroke ?? "#8C97AC"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66666 11.3333H5.33332M4.66666 4.66666H5.33332H4.66666ZM4.66666 7.99999H5.33332H4.66666Z"
          stroke={stroke ?? "#8C97AC"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_198">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
