import dayjs from "dayjs";
import React from "react";
import { StudentAttendance } from "../../../components/Attendance/Student";

export default {
  title: "Attendance/Student",
  component: StudentAttendance,
};

export const Default = () => (
  <StudentAttendance
    attendances={[
      {
        id: "0",
        date: dayjs(new Date(2022, 2, 1)),
        period: 3,
        reason: "欠課理由です",
        tag: {
          name: "タグ名",
        },
        user: {
          email: "hoge@example.com",
          name: "hoge",
        }
      },
      {
        id: "0",
        date: dayjs(new Date(2022, 2, 1)),
        period: 3,
        reason: "欠課理由です",
        tag: {
          name: "タグ名2",
        },
        user: {
          email: "hoge@example.com",
          name: "hoge",
        }
      },
      {
        id: "0",
        date: dayjs(new Date(2022, 2, 2)),
        period: 3,
        reason: "欠課理由です",
        tag: {
          name: "タグ名",
        },
        user: {
          email: "hoge@example.com",
          name: "hoge",
        }
      },
      {
        id: "0",
        date: dayjs(new Date(2022, 2, 1)),
        period: 3,
        reason: "欠課理由です",
        tag: {
          name: "タグ名",
        },
        user: {
          email: "hoge@example.com",
          name: "hoge",
        }
      },
      {
        id: "0",
        date: dayjs(new Date(2022, 2, 1)),
        period: 3,
        reason: "欠課理由です",
        tag: {
          name: "タグ名3",
        },
        user: {
          email: "hoge@example.com",
          name: "hoge",
        }
      },
    ]}
  />
);
