import React from "react";

export default function InProgress({ size = "16", stroke = "#FFD166" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill={stroke} />
      <path
        d="M8 13C8.65661 13 9.30679 12.8707 9.91342 12.6194C10.52 12.3681 11.0712 11.9998 11.5355 11.5355C11.9998 11.0712 12.3681 10.52 12.6194 9.91342C12.8707 9.30679 13 8.65661 13 8C13 7.34339 12.8707 6.69321 12.6194 6.08658C12.3681 5.47995 11.9998 4.92876 11.5355 4.46447C11.0712 4.00017 10.52 3.63188 9.91342 3.3806C9.30679 3.12933 8.65661 3 8 3L8 8V13Z"
        fill="white"
      />
    </svg>
  );
}
