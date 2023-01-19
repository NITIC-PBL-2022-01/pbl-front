import dayjs, { Dayjs } from "dayjs";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Plus } from "react-feather";
import Modal from "react-modal";
import { PrimaryButton } from "../common/Button";
import { TextField } from "../common/TextField";
import styles from "./FloatButton.module.css";

interface Props {
  tags: Array<{ name: string; color: string; id: string }>;
  addEvent: (
    title: string,
    detail: string,
    tagID: string,
    color: string,
    date: string,
    time: string,
    duration: number,
    isTodo: boolean,
    done: boolean,
    location: string,
    isRepeat: boolean,
    repeat?: {
      unit: string;
      value: number;
      since: Dayjs;
      until: Dayjs;
    }
  ) => void;
}

interface State {
  title: string;
  detail: string;
  tagID: string;
  color: string;
  duration: number;
  date: Dayjs;
  time: Dayjs;
  isTodo: boolean;
  done: boolean;
  location: string;
  isRepeat: boolean;
  unit: string;
  value: number;
  since: Dayjs | null;
  until: Dayjs | null;
}

export const EventAddingButton: FC<Props> = ({ tags, addEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<State>({
    title: "",
    detail: "",
    tagID: "",
    color: "",
    duration: 0,
    date: dayjs(),
    time: dayjs(),
    isTodo: false,
    done: false,
    location: "",
    isRepeat: false,
    unit: "",
    value: 0,
    since: null,
    until: null,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addEvent(
      state.title,
      state.detail,
      state.tagID,
      state.color,
      state.date.format("YYYY-MM-DD"),
      state.time.format("hh:mm"),
      state.duration,
      state.isTodo,
      state.isTodo && state.done,
      state.location,
      state.isRepeat,
      state.isRepeat
        ? {
            unit: state.unit,
            value: state.value,
            since: state.since as Dayjs,
            until: state.until as Dayjs,
          }
        : undefined
    );
  };

  return (
    <>
      <div className={styles.wrapper} onClick={() => setIsOpen(() => true)}>
        <Plus size={28} />
      </div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(() => false)}>
        <h2 className={styles.title}>イベントの作成</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <TextField
            text={state.title}
            name="title"
            label="タイトル"
            onChange={(str: string) =>
              setState((state) => ({ ...state, title: str }))
            }
            type="text"
          />
          <TextField
            text={state.detail}
            name="detail"
            label="説明文"
            onChange={(str: string) =>
              setState((state) => ({ ...state, detail: str }))
            }
            type="text"
          />
          <TextField
            text={state.color}
            name="color"
            label="色(空欄時はタグに準拠)"
            onChange={(str: string) =>
              setState((state) => ({ ...state, color: str }))
            }
            type="text"
          />
          <div className={styles.oneline}>
            <label htmlFor="tag-selector">タグ</label>
            <select value={state.tagID} id="tag-selector">
              <option value="">タグを選択してください</option>
              {tags.map((t, i) => (
                <option key={i} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <TextField
            text={state.duration.toString()}
            name="duration"
            label="長さ(分)"
            onChange={(str: string) => {
              const num = parseInt(str, 10);
              if (Number.isNaN(num)) return;
              setState((state) => ({ ...state, duration: num }));
            }}
            type="number"
          />
          <div className={styles.oneline}>
            <label htmlFor="date-input">日付</label>
            <input
              id="date-input"
              type="date"
              value={state.date.format("YYYY-MM-DD")}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState((state) => ({ ...state, date: dayjs(e.target.value) }))
              }
            />
          </div>
          <div className={styles.oneline}>
            <label htmlFor="time-input">時間</label>
            <input
              id="time-input"
              type="time"
              value={state.time.format("hh:mm")}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                const h = e.target.value.split(":")[0];
                const m = e.target.value.split(":")[1];

                console.log(dayjs().hour(Number(h)).minute(Number(m)));
                setState((state) => ({
                  ...state,
                  time: dayjs().hour(Number(h)).minute(Number(m)),
                }));
              }}
            />
          </div>
          <div className={styles.oneline}>
            <label htmlFor="todo-checker">Todoであるか</label>
            <input
              id="todo-checker"
              type="checkbox"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState((state) => ({ ...state, isTodo: e.target.checked }))
              }
              checked={state.isTodo}
            />
          </div>
          {state.isTodo ? (
            <div className={styles.oneline}>
              <label htmlFor="done-checker">完了状態</label>
              <input
                id="done-checker"
                type="checkbox"
                checked={state.done}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState((state) => ({ ...state, done: e.target.checked }))
                }
              />
            </div>
          ) : undefined}
          <TextField
            text={state.location}
            name="location"
            label="場所"
            onChange={(str: string) =>
              setState((state) => ({ ...state, location: str }))
            }
            type="text"
          />
          <div className={styles.oneline}>
            <label htmlFor="repeat-checker">繰り返し</label>
            <input
              type="checkbox"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState((state) => ({ ...state, isRepeat: e.target.checked }))
              }
              checked={state.isRepeat}
            />
          </div>
          {state.isRepeat ? (
            <div>
              <TextField
                text={state.unit}
                name="unit"
                label="単位"
                onChange={(str: string) =>
                  setState((state) => ({ ...state, unit: str }))
                }
                type="text"
              />
              <TextField
                text={state.value.toString()}
                name="value"
                label="間隔"
                onChange={(str: string) => {
                  const num = parseInt(str, 10);
                  if (Number.isNaN(num)) return;
                  setState((state) => ({ ...state, value: num }));
                }}
                type="number"
              />
              <div className={styles.oneline}>
                <label htmlFor="since-picker">繰り返しの開始日</label>
                <input
                  id="since-picker"
                  type="date"
                  value={state.since?.format("YYYY-MM-DD") ?? undefined}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState((state) => ({
                      ...state,
                      since: dayjs(e.target.value),
                    }))
                  }
                />
              </div>
              <div className={styles.oneline}>
                <label htmlFor="until-picker">繰り返しの終了日</label>
                <input
                  type="date"
                  value={state.until?.format("YYYY-MM-DD") ?? undefined}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState((state) => ({
                      ...state,
                      until: dayjs(e.target.value),
                    }))
                  }
                />
              </div>
            </div>
          ) : undefined}
          <PrimaryButton text="作成する" />
        </form>
      </Modal>
    </>
  );
};
