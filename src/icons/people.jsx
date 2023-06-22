import React from "react";

export default function People({
  width = "12px",
  height = "12px",
  stroke = "white",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_102_3)">
        <path
          d="M0.958435 8.75C0.958435 7.71875 2.33343 7.71875 3.02093 7.03125C3.36468 6.6875 2.33343 6.6875 2.33343 4.96875C2.33343 3.82303 2.79165 3.25 3.70843 3.25C4.62522 3.25 5.08343 3.82303 5.08343 4.96875C5.08343 6.6875 4.05218 6.6875 4.39593 7.03125C4.39593 7.03125 5.4864 7.35722 6.0001 7.83333C6.32829 8.13751 6.6876 8.75 6.6876 8.75M6.36301 7.70806C6.58863 7.62629 6.77353 7.55068 6.91773 7.48123C7.17012 7.35967 7.41363 7.22189 7.60427 7.03125C7.94802 6.6875 6.91677 6.6875 6.91677 4.96875C6.91677 3.82303 7.37499 3.25 8.29177 3.25C9.20855 3.25 9.66677 3.82303 9.66677 4.96875C9.66677 6.6875 8.63552 6.6875 8.97927 7.03125C9.66677 7.71875 11.0418 7.71875 11.0418 8.75"
          stroke={stroke}
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7.83332C6.16788 7.77664 6.28885 7.73488 6.36291 7.70804"
          stroke={stroke}
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_3">
          <rect
            width="11"
            height="11"
            fill={stroke}
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
