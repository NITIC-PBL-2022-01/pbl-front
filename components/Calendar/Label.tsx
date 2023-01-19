import React, { FC } from "react";
import { Event } from "./Index";
import styles from "./Label.module.css";

interface Props {
  event: Event;
  onEventClick: (e: Event) => void;
}

export const Label: FC<Props> = ({ event, onEventClick }) => {
  return (
    <div
      style={{ backgroundColor: event.color }}
      className={styles.label}
      onClick={() => onEventClick(event)}
    >
      {event.time} {event.title}
    </div>
  );
};
