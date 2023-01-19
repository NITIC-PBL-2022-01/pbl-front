import React, { FC } from "react";
import styles from "./Button.module.css";

interface Props {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const SharedButton: FC<Props & { className: string }> = ({
  text,
  onClick,
  className,
  type,
  disabled,
}) => (
  <button
    disabled={disabled}
    className={className}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

export const PrimaryButton: FC<Props> = (props) => (
  <SharedButton className={styles.primary} {...props} />
);

export const SecondaryButton: FC<Props> = (props) => (
  <SharedButton className={styles.secondary} {...props} />
);
