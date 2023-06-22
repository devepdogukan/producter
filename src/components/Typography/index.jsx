import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Typography({ children, variant, color, fontWeight }) {
  const cs = useMemo(
    () =>
      classNames({
        [styles.typography]: true,
        [styles.darkPrimary]: color === "darkPrimary",
        [styles.medium]: variant === "medium",
        [styles.large]: variant === "large",

        [styles.blue]: color === "blue",
        [styles.gray]: color === "gray",

      }),
    [variant, color, fontWeight]
  );

  return (
    <p className={cs} style={{ fontWeight: fontWeight ?? 400 }}>
      {children}
    </p>
  );
}
