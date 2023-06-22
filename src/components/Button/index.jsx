import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Button({
  children,
  variant,
  color,
  fontWeight,
  size = "32px",
  onClick,
  padding,
  ...props
}) {
  const cs = useMemo(
    () =>
      classNames({
        [styles.button]: true,
        [styles.blue]: color === "blue",
        [styles.lightBlue]: color === "lightBlue",
        [styles.white]: color === "white",
        [styles.outlined]: variant === "outlined",
        [styles.contained]: variant === "contained" || !variant,
      }),
    [variant, color, fontWeight]
  );

  return (
    <button
      onClick={() => typeof onClick === "function" && onClick()}
      className={cs}
      style={{
        width: padding ? "max-content" : size,
        height: padding ? "max-content" : size,
        padding: padding ?? 0,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
