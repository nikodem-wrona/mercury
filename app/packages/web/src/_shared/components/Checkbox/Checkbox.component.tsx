import React from "react"
import styles from "./Checkbox.module.scss"

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxLabel}>
      {label}
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkboxCustom}></span>
    </label>
  )
}
