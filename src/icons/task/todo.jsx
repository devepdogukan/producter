import React from "react";

export default function Todo({ size = "16", stroke = "#FF6464" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="5.5"
        fill="white"
        stroke={stroke}
        strokeWidth="5"
      />
    </svg>
  );
}
