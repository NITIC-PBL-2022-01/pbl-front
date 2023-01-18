import dayjs, { Dayjs } from "dayjs";
import React, { FC, useState } from "react";
import Modal from "react-modal";
import { Detail } from "../Event/Detail";
import { Cell } from "./Cell";
import styles from "./Index.module.css";

export interface Event {
  id: string;
  title: string;
  detail: string;
  duration: number;
  color: string;
  date: Dayjs;
  time?: string;
  tag: {
    name: string;
    type: "HR" | "Class" | "None";
  };
}

interface Props {
  events: Event[];
  year: number;
  month: number;
  tagAttendance: (id: string, reason: string) => void;
}

export const Calendar: FC<Props> = ({ events, year, month, tagAttendance }) => {
  const dates = [];
  const firstDate = dayjs(new Date(year, month, 1));
  const finalDate = dayjs(new Date(year, month, 1))
    .add(1, "month")
    .subtract(1, "day");

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Event | null>(null);

  const firstDateWeekDay = firstDate.day();
  const finalDateWeekDay = finalDate.day();

  for (let i = 0; i < firstDateWeekDay; i++)
    dates.push(firstDate.subtract(firstDateWeekDay - i, "day"));

  let cache = firstDate;
  while (cache.month() === firstDate.month()) {
    console.log("infinite");
    console.log(cache);
    dates.push(cache);
    cache = cache.add(1, "day");
  }

  for (let i = finalDateWeekDay; i < 6; i++)
    dates.push(finalDate.add(i - finalDateWeekDay + 1, "day"));

  const weeks: Dayjs[][] = [];

  dates.forEach((d, i) => {
    if (i % 7 === 0) weeks.push([]);
    weeks[weeks.length - 1].push(d);
  });

  const onEventClick = (e: Event) => {
    setSelected(() => e);
    setIsOpen(() => true);
  };

  return (
    <div className={styles[`wrapper_${weeks.length}`]}>
      {weeks.map((w, wi) => (
        <div key={wi} className={styles.row}>
          {w.map((d, di) => (
            <Cell
              key={di}
              events={events.filter(
                (e) =>
                  e.date.month() === d.month() && e.date.date() === d.date()
              )}
              date={d.date()}
              isOutside={d.month() !== firstDate.month()}
              onEventClick={onEventClick}
            />
          ))}
        </div>
      ))}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        {selected != null ? (
          <Detail
            event={selected}
            tagAttendance={(r: string) => tagAttendance(selected.id, r)}
          />
        ) : undefined}
      </Modal>
    </div>
  );
};
