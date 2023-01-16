import { ChangeEvent, FC } from "react";
import styles from "./Form.module.css";

interface Props {
  disabled?: boolean;
  text: string;
  type?: string;
  placeholder?: string;
  onChange: (text: string) => void;
  name: string;
  label?: string;
}

export const Form: FC<Props> = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.input}
        name={props.name}
        disabled={props.disabled}
        value={props.text}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
      />
    </div>
  );
};
