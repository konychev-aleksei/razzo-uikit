import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../lib/classNames";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: ReactNode;
  primary?: boolean;
};

export function Button({
  children,
  startIcon = false,
  primary = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(styles.button, primary && styles.button_primary, className)}
    >
      {Boolean(startIcon) ? (
        <>
          <span>{startIcon}</span>
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
