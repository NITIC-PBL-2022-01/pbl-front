import React, { FC } from "react";
import { Label } from "./Label";
import styles from "./Cell.module.css";
import { Dayjs } from "dayjs";

// TODO: replace this
interface Event {
  title: string;
  date: Dayjs;
  time?: string;
  color: string;
}

interface Props {
  events: Array<Event>;
  date: number;
  isOutside: boolean;
}

export const Cell: FC<Props> = ({ events, date, isOutside }) => {
  return (
    <div className={isOutside ? styles.outside : styles.cell}>
      <p className={styles.date}>{date}</p>
      {events.map((e, i) => (
        <Label title={e.title} color={e.color} key={i} time={e.time} />
      ))}
    </div>
  );
};
