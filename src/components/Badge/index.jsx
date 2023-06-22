import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Badge({
  children,
  size = "16px",
  color,
  variant = "contained",
}) {
  const cs = useMemo(
    () =>
      classNames({
        [styles.badge]: true,
        [styles.primary]: color === "primary",
        [styles.darkPrimary]: color === "darkPrimary",
        [styles.blue]: color === "blue",
        [styles.gray]: color === "gray",
        [styles.red]: color === "red",
        [styles.yellow]: color === "yellow",
        [styles.green]: color === "green",
        [styles.orange]: color === "orange",
        [styles.contained]: variant === "contained",
        [styles.text]: variant === "text",
      }),
    [color]
  );

  return (
    <span className={cs} style={{ width: size, height: size }}>
      {children}
    </span>
  );
}
