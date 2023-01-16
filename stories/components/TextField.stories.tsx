import React, { useState } from "react";
import { TextField } from "../../components/common/TextField";

export default {
  title: "Common/Form",
  component: TextField,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    type: {
      control: { type: "select" },
      options: ["email", "password", "text"],
    },
  },
};

export const Default = ({
  disabled,
  type,
}: {
  disabled: boolean;
  type: string;
}) => {
  const [text, setText] = useState("");
  return (
    <TextField
      disabled={disabled}
      text={text}
      onChange={(text: string) => setText(() => text)}
      type={type}
      placeholder="this is form"
      name="form"
      label="これはフォームです"
    />
  );
};
