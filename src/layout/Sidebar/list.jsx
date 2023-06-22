import React from "react";
import styles from "./../layout.module.scss";
import classNames from "classnames";
import Typography from "@/components/Typography";

export default function List({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <button
          key={i}
          className={classNames({ [styles.active]: item?.active ?? false })}
        >
          <item.icon />
          <Typography>{item.label}</Typography>
        </button>
      ))}
    </div>
  );
}
