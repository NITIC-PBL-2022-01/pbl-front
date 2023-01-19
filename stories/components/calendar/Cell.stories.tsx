import dayjs from "dayjs";
import React from "react";
import { Cell } from "../../../components/Calendar/Cell";
import { Event } from "../../../components/Calendar/Index";

export default {
  title: "Common/Calendar/Cell",
  component: Cell,
};

export const Default = () => (
  <div style={{ width: "20rem" }}>
    <Cell
      date={20}
      events={[
        {
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
        },
        {
          id: "0",
          detail: "detail",
          duration: 120,
          tag: {
            type: "Class",
            name: "class",
          },
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 4)),
          time: "午後 11:00",
        },
      ]}
      isOutside
      onEventClick={(e: Event) => console.log(e)}
    />
  </div>
);
