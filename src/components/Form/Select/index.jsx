import React from "react";
import styles from "./style.module.scss";
import Typography from "@/components/Typography";

function SelectWrapper({
  name,
  label,
  required,
  disabled = false,
  options,
  value,
}) {
  return (
    <div>
      {label && (
        <div className={styles.label}>
          <Typography>{label}</Typography>
        </div>
      )}
      <select
        value={value}
        className={styles.formControl}
        name={name}
        required={required}
        disabled={disabled}
      >
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectWrapper;
