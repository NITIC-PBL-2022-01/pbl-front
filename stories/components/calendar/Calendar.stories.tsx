import dayjs from "dayjs";
import React from "react";
import { Calendar } from "../../../components/Calendar/Index";

export default {
  title: "Common/Calendar/Calendar",
  component: Calendar,
};

export const Default = () => (
  <div style={{ height: "90vh" }}>
    <Calendar
      events={[
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 4)),
          time: "午前 5:00"
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 4)),
          time: "午後 11:00"
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 8)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 12)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 16)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 23)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 23)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 23)),
        },
        {
          title: "This is event",
          color: "#F00",
          date: dayjs(new Date(2023, 2, 28)),
        },
      ]}
      year={2023}
      month={2}
    />
  </div>
);
