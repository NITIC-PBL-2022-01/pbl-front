import React, { FC } from "react";
import styles from "./Label.module.css";

interface Props {
  title: string;
  color: string;
  time?: string;
}

export const Label: FC<Props> = ({ color, title, time }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.label}>
      {time} {title}
    </div>
  );
};
