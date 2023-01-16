import React, { useState } from "react";
import { Form } from "../../components/common/From";

export default {
  title: "Common/Form",
  component: Form,
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

export const Default = ({ disabled, type }: { disabled: boolean, type: string }) => {
  const [text, setText] = useState("");
  return (
    <Form
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
