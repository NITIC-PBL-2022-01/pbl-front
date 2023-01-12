import React from "react";
import { Cell } from "../../../components/Calendar/Cell";

export default {
  title: "Common/Calendar/Cell",
  component: Cell,
};

export const Default = () => (
  <Cell
    date={20}
    events={[
      { title: "This is event", color: "#F00" },
      { title: "This is event", color: "#F00" },
    ]}
    isOutside
  />
);
