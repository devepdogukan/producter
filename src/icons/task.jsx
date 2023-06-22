import React from "react";

export default function Task({ size = "10", stroke }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_102_159)">
        <path
          d="M2.5 7L5 7H7.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 4.09091L4.4375 5L6.5 3"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V8.5C0.5 9.05228 0.947715 9.5 1.5 9.5H8.5C9.05228 9.5 9.5 9.05228 9.5 8.5V1.5C9.5 0.947715 9.05228 0.5 8.5 0.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_159">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
