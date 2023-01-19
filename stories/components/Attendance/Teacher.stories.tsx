import dayjs from "dayjs";
import React from "react";
import { TeacherAttendance } from "../../../components/Attendance/Teacher";

export default {
  title: "Attendance/Teacher",
  component: TeacherAttendance,
};

export const Default = () => (
  <TeacherAttendance
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
          email: "fuga@example.com",
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
        }
      },
    ]}
  />
);

