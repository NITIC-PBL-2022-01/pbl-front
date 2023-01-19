import React, { FC, FormEvent, useState } from "react";
import { ModeratingTag, Tag } from "./ModeratingTag";
import Modal from "react-modal";
import { TextField } from "../common/TextField";
import { PrimaryButton } from "../common/Button";

interface Props {
  editTag: (id: string, name: string, color: string) => void;
  tags: Tag[];
}

interface State {
  name: string;
  color: string;
}

export const ModeratingTagList: FC<Props> = ({ tags, editTag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Tag | null>(null);
  const [state, setState] = useState<State>({ name: "", color: "" });

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (selected == null) return;
    editTag(selected.id, state.name, state.color);
  };

  return (
    <div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        管理しているタグ
      </h3>
      {tags.map((t, i) => (
        <ModeratingTag
          tag={t}
          key={i}
          onClick={() => {
            setSelected(t);
            setState({ name: t.name, color: t.color });
            setIsOpen(true);
          }}
        />
      ))}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(() => false)}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>タグの更新</h3>
        <form onSubmit={onSubmit}>
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
          <div style={{ paddingTop: "1rem" }}>
            <PrimaryButton text="更新" />
          </div>
        </form>
      </Modal>
    </div>
  );
};
