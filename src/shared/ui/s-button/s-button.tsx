import { ButtonHTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import styles from "./s-button.module.scss";

type ButtonVariant = "contained" | "outlined" | "text";
type ButtonColor = "primary" | "secondary" | "error";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "xl2";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}

export const SButton = (props: ButtonProps) => {
  const {
    className,
    fullWidth,
    disabled,
    children,
    leftIcon,
    rightIcon,
    color = "primary",
    variant = "contained",
    size = "lg",
    ...otherProps
  } = props;

  const mods = {
    [styles.fullWidth]: fullWidth,
  };

  const additional = [styles[color], styles[variant], styles[size], className];

  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={cx(styles.button, mods, additional)}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};
