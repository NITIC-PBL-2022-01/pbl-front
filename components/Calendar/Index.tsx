import dayjs, { Dayjs } from "dayjs";
import React, { FC } from "react";
import { Cell } from "./Cell";
import styles from "./Index.module.css";

// TODO: replace this
interface Event {
  title: string;
  color: string;
  date: Dayjs;
  time?: string;
}

interface Props {
  events: Event[];
  year: number;
  month: number;
}

export const Calendar: FC<Props> = ({ events, year, month }) => {
  const dates = [];
  const firstDate = dayjs(new Date(year, month, 1));
  const finalDate = dayjs(new Date(year, month, 1))
    .add(1, "month")
    .subtract(1, "day");

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
            />
          ))}
        </div>
      ))}
    </div>
  );
};
