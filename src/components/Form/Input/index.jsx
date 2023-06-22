import React from "react";
import styles from "./styles.module.scss";
import Typography from "@/components/Typography";

function Input({ label, ...props }) {
  return (
    <div>
      {label && (
        <div className={styles.label}>
          <Typography>{label}</Typography>
        </div>
      )}
      <input
        {...props}
        onInput={(e) => {
          if (
            e?.currentTarget?.value.length > 0 &&
            typeof props?.onInput === "function"
          )
            props.onInput(e);
        }}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
