import React, { FC } from "react";
import { Label } from "./Label";
import styles from "./Cell.module.css";
import { Event } from "./Index";

interface Props {
  events: Event[];
  date: number;
  isOutside: boolean;
  onEventClick: (e: Event) => void;
}

export const Cell: FC<Props> = ({ events, date, isOutside, onEventClick }) => {
  return (
    <div className={isOutside ? styles.outside : styles.cell}>
      <p className={styles.date}>{date}</p>
      {events.map((e, i) => (
        <Label key={i} event={e} onEventClick={onEventClick} />
      ))}
    </div>
  );
};
