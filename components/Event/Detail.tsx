import { ChangeEvent, FC, useState } from "react";
import { PrimaryButton } from "../common/Button";
import styles from "./Detail.module.css";

interface Event {
  time?: string;
  duration: number;
  title: string;
  detail: string;
  color: string;
  tag: {
    name: string;
    type: "HR" | "Class" | "None";
  };
}

interface Props {
  event: Event;
  tagAttendance: (reason: string) => void;
}

export const Detail: FC<Props> = ({ event, tagAttendance }) => {
  const selectValues = [
    "",
    "体調不良",
    "部活動や課外活動",
    "電車の遅延",
    "天候不良",
    "寝坊",
    "仕事",
    "家の事情",
    "身内の不幸",
    "その他赤髪が適用される理由",
    "その他赤髪が適用されない理由",
  ];
  const [state, setState] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(() => e.target.value);
  };

  return (
    <div>
      <h3 className={styles.title}>
        {event.title}
        {event.time != null ? `(${event.time})` : undefined}
      </h3>
      <div className={styles.description}>
        <h4>説明文</h4>
        <p>{event.detail}</p>
      </div>
      <div className={styles.description}>
        <h4>タグ名</h4>
        <p>{event.tag.name}</p>
      </div>
      {event.tag.type == "Class" ? (
        <div className={styles.attendance}>
          <div>
            <label htmlFor="reason-selector">欠席する</label>
            <select value={state ?? ""} id="reason-selector" onChange={onChange}>
              <option value="">理由を選択してください</option>
              {selectValues.map((e, i) => (
                <option value={e} key={i}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.button}>
            <PrimaryButton
              text="送信"
              onClick={() => {
                if (state != null) tagAttendance(state);
                else alert("理由を選択してください");
              }}
            />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};
