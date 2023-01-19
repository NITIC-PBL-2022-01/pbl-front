import React, { FC, FormEvent, useState } from "react";
import { PrimaryButton } from "../common/Button";
import { TextField } from "../common/TextField";
import styles from "../Login/Form.module.css";

interface Props {
  signup: (email: string, password: string) => void;
}

interface State {
  email: string;
  password: string;
}

export const SignUpForm: FC<Props> = ({ signup }) => {
  const [state, setState] = useState<State>({ email: "", password: "" });
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signup(state.email, state.password);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField
        text={state.email}
        type="email"
        placeholder="メールアドレス"
        onChange={(text) => setState((state) => ({ ...state, email: text }))}
        name="email"
        label="メールアドレス"
      />
      <TextField
        text={state.password}
        type="password"
        placeholder="パスワード"
        onChange={(text) => setState((state) => ({ ...state, password: text }))}
        name="password"
        label="パスワード"
      />
      <PrimaryButton text="登録する" />
    </form>
  );
};
