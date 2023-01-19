import { Dayjs } from "dayjs";
import { FC } from "react";
import styles from "./Teacher.module.css";

export interface Attendance {
  id: string;
  date: Dayjs;
  period: number;
  reason: string;
  tag: {
    name: string;
  };
  user: {
    email: string;
    name: string;
  }
}


interface Props {
  attendances: Array<Attendance>;
}

export const TeacherAttendance: FC<Props> = ({ attendances }) => {
  const distributedRecord = attendances.reduce<Record<string, Record<string, Attendance[]>>>(
    (prev, curr) => {
      if (Object.entries(prev).find(([key]) => key === curr.tag.name) != null) {
        const subj = prev[curr.tag.name];
        if (Object.entries(subj).find(([key]) => key === curr.user.email) != null) {
          subj[curr.user.email].push(curr);
        } else {
          subj[curr.user.email] = [curr];
        }
        prev[curr.tag.name] = subj;
      } else {
        const subj: Record<string, Attendance[]> = {};
        subj[curr.user.email] = [curr];
        prev[curr.tag.name] = subj;
      }
      return prev;
    },
    {}
  );

  return (
    <div className={styles.wrapper}>
      {Object.entries(distributedRecord).map(([key, value]) => (
        <div key={key} className={styles.subject}>
          <h3 className={styles.title}>{key}の欠課情報</h3>
          {Object.entries(value).map(([key, value]) => (
            <div key={key} className={styles.attendance}>
              <h3 className={styles.innerTitle}>{value[0].user.name}さんの欠課情報</h3>
              {value.map((a, i) => (
                <div key={i} className={styles.detail}>
                  <p className={styles.time}>
                    {a.date.format("MM/DD")} {a.period}限目
                  </p>
                  <p className={styles.reason}>欠課理由: {a.reason}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
