import React from "react";
import { TagAddingButton } from "../../../components/Tag/FloatButton";

export default {
  title: "Tag/FloatButton",
  component: TagAddingButton,
};

export const Student = () => (
  <TagAddingButton
    addTag={(n: string, c: string, a: string[], m: string[], t: string) => console.log(n, c, a, m, t)}
    isStudent={true}
  />
);

export const Teacher = () => (
  <TagAddingButton
    addTag={(n: string, c: string, a: string[], m: string[], t: string) => console.log(n, c, a, m, t)}
    isStudent={false}
  />
);
