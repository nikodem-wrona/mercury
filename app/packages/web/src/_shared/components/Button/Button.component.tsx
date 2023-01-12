import classNames from "classnames"
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react"
import styles from "./Button.module.scss"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  color: "primary" | "secondary" | "error"
  children: string
  fullWidth?: boolean
  leaf?: boolean
  as?: string
  href?: string
  active?: boolean
}

export const Button = forwardRef(
  (
    {
      color,
      disabled,
      children,
      type = "button",
      fullWidth,
      active,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    const buttonStyles = classNames([styles.shared, styles[color]])

    return (
      <button
        className={buttonStyles}
        {...props}
        color={color}
        disabled={disabled}
        type={type}
        aria-label={children}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
