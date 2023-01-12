import React, { FC } from "react";
import { Label } from "./Label";
import styles from "./Cell.module.css";

// TODO: replace this
interface Event {
  title: string;
  color: string;
}

interface Props {
  events: Array<Event>;
  date: number;
  isOutside: boolean;
}

export const Cell: FC<Props> = ({ events, date, isOutside }) => {
  return (
    <div className={isOutside ? styles.cell : styles.outside}>
      <p className={styles.date}>{date}</p>
      <div className={styles.labelWrapper}>
        {events.map((e, i) => (
          <Label title={e.title} color={e.color} key={i} />
        ))}
      </div>
    </div>
  );
};
