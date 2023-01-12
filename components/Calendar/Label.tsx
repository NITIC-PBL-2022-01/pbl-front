import React, { FC } from "react";
import styles from "./Label.module.css";

interface Props {
  title: string;
  color: string;
}

export const Label: FC<Props> = ({ color, title }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.label}>
      {title}
    </div>
  );
};
