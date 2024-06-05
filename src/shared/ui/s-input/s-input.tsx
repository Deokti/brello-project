import cx from "classnames";
import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./s-input.module.scss";

type InputSize = "sm" | "md";

// Удаляем из атрибутов props size
type InputHTMLAttributesCustom = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
interface InputProps extends InputHTMLAttributesCustom {
  className?: string;
  label?: string;
  errorMessage?: string | null | undefined;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: InputSize;
}

export const SInput = (props: InputProps) => {
  const {
    className,
    label,
    leftIcon,
    rightIcon,
    errorMessage,
    size = "md",
    value,
    placeholder,
    ...otherProps
  } = props;

  const isValue = value && String(value).length > 0;
  const isErrorMessage = errorMessage && errorMessage.length > 0;

  const additional = [styles[size], className];
  const mods = {
    [styles.isErrorMessage]: isErrorMessage,
    [styles.hidePlaceholder]: isValue,
  };

  return (
    <div className={cx(styles.label, mods, additional)}>
      {label && <span className={styles.label}>{label}</span>}

      <span className={styles.inputWrapper}>
        {leftIcon && <span className={cx(styles.icon, styles.leftIcon)}>{leftIcon}</span>}
        {rightIcon && <span className={cx(styles.icon, styles.rightIcon)}>{rightIcon}</span>}

        {placeholder && <span className={cx(styles.placeholder)}>{placeholder}</span>}
        <input
          {...otherProps}
          value={value}
          className={cx(styles.input)}
        />
      </span>

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};
