import dayjs from "dayjs";
import React from "react";
import { Event } from "../../../components/Calendar/Index";
import { Label } from "../../../components/Calendar/Label";

export default {
  title: "Common/Calendar/Label",
  component: Label,
};

export const Default = () => (
  <Label
    event={{
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 20)),
      time: "午前 5:00",
    }}
    onEventClick={(e: Event) => console.log(e)}
  />
);
