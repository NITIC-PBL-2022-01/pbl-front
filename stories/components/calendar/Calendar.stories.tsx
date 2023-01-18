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
      tagAttendance={(id: string, reason: string) => console.log(id, reason)}
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
          date: dayjs(new Date(2023, 2, 4)),
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
          date: dayjs(new Date(2023, 2, 8)),
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
          date: dayjs(new Date(2023, 2, 12)),
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
          date: dayjs(new Date(2023, 2, 16)),
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
          date: dayjs(new Date(2023, 2, 23)),
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
          date: dayjs(new Date(2023, 2, 23)),
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
          date: dayjs(new Date(2023, 2, 23)),
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
          date: dayjs(new Date(2023, 2, 28)),
        },
      ]}
      year={2023}
      month={2}
    />
  </div>
);
