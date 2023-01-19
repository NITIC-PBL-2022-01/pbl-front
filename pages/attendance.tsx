import dayjs from "dayjs";
import { NextPage } from "next";
import { Header } from "../components/Attendance/Header";
import { StudentAttendance } from "../components/Attendance/Student";
import { TeacherAttendance } from "../components/Attendance/Teacher";

const AttendancePage: NextPage = () => {
  const isStudent = false;
  const attendances = [
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
        email: "fuga@example.com",
        name: "fuga",
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
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "1rem" }}>
        { isStudent ? <StudentAttendance attendances={attendances} /> : <TeacherAttendance attendances={attendances} /> }
      </div>
    </div>
  );
};

export default AttendancePage;
