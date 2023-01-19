import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Tag, X } from "react-feather";
import Modal from "react-modal";
import { PrimaryButton } from "../common/Button";
import { TextField } from "../common/TextField";
import styles from "./FloatButton.module.css";

interface Props {
  addTag: (
    name: string,
    color: string,
    admin: string[],
    member: string[],
    type: "HR" | "Class" | "None"
  ) => void;
  isStudent: boolean;
}

interface State {
  name: string;
  color: string;
  admin: string[];
  member: string[];
  type: "HR" | "Class" | "None";
}

export const TagAddingButton: FC<Props> = ({ addTag, isStudent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTag(state.name, state.color, state.admin, state.member, state.type);
  };

  const [state, setState] = useState<State>({
    name: "",
    color: "",
    admin: [],
    member: [],
    type: "None",
  });
  const [admin, setAdmin] = useState("");
  const [member, setMember] = useState("");

  return (
    <>
      <div className={styles.wrapper}>
        <Tag size={28} onClick={() => setIsOpen(() => true)} />
      </div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(() => false)}>
        <h2 className={styles.title}>タグの追加</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <TextField
            text={state.name}
            name="name"
            label="タグ名"
            onChange={(str: string) =>
              setState((state) => ({ ...state, name: str }))
            }
            type="text"
          />
          <TextField
            text={state.color}
            name="color"
            label="色"
            onChange={(str: string) =>
              setState((state) => ({ ...state, color: str }))
            }
            type="text"
          />
          <h4>現在の管理者</h4>
          {state.admin.map((a, i) => (
            <div key={i}>
              {a}
              <X
                onClick={() =>
                  setState((state) => ({
                    ...state,
                    admin: state.admin.filter((_, ind) => ind !== i),
                  }))
                }
              />
            </div>
          ))}
          <div className={styles.members}>
            <TextField
              text={admin}
              name="admin"
              label="管理者を追加"
              onChange={(str: string) => setAdmin(str)}
              type="email"
            />
            <PrimaryButton
              type="button"
              text="追加"
              onClick={() => {
                setState((state) => ({
                  ...state,
                  admin: [...state.admin, admin],
                }));
                setAdmin("");
              }}
            />
          </div>
          <h4>現在のメンバー</h4>
          {state.member.map((a, i) => (
            <div key={i}>
              {a}
              <X
                onClick={() =>
                  setState((state) => ({
                    ...state,
                    member: state.member.filter((_, ind) => ind !== i),
                  }))
                }
              />
            </div>
          ))}
          <div className={styles.members}>
            <TextField
              text={member}
              name="member"
              label="メンバーを追加"
              onChange={(str: string) => setMember(str)}
              type="email"
            />
            <PrimaryButton
              type="button"
              text="追加"
              onClick={() => {
                setState((state) => ({
                  ...state,
                  member: [...state.member, member],
                }));
                setMember("");
              }}
            />
          </div>
          {isStudent ? undefined : (
            <div className={styles.selector}>
              <label htmlFor="type-selector">タグの種別を選択</label>
              <select
                value={state.type}
                id="type-selector"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setState((state) => ({
                    ...state,
                    type: e.target.value as "None" | "HR" | "Class",
                  }))
                }
              >
                <option value="None">種別なし</option>
                <option value="Class">授業</option>
                <option value="HR">ホームルーム</option>
              </select>
            </div>
          )}
          <PrimaryButton text="作成" />
        </form>
      </Modal>
    </>
  );
};
