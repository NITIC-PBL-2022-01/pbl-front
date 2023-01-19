import React, { Dayjs } from "dayjs";
import { FC } from "react";
import styles from "./Student.module.css";

export interface Attendance {
  id: string;
  date: Dayjs;
  period: number;
  reason: string;
  tag: {
    name: string;
  };
}

interface Props {
  attendances: Attendance[];
}

export const StudentAttendance: FC<Props> = ({ attendances }) => {
  const distributedRecord = attendances.reduce<Record<string, Attendance[]>>((prev, curr) => {
    if (Object.entries(prev).find(([key]) => key === curr.tag.name) != null) {
      prev[curr.tag.name].push(curr);
    } else {
      prev[curr.tag.name] = [curr];
    }
    return prev;
  }, {});

  return (
    <div className={styles.wrapper}>
      {Object.entries(distributedRecord).map(([key, value]) => (
        <div key={key} className={styles.attendance}>
          <h3 className={styles.title}>{key}の欠課情報</h3>
          <div className={styles.list}>
            {value.map((v, i) => (
              <div key={i} className={styles.detail}>
                <p className={styles.time}>
                  {v.date.format("MM/DD")} {v.period}限目
                </p>
                <p className={styles.reason}>欠課理由: {v.reason}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
