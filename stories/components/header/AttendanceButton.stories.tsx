import React from "react";
import { AttendanceButton } from "../../../components/Header/AttendanceButton";

export default {
  title: "Common/Header/AttendanceButton",
  component: AttendanceButton,
};

export const Default = () => (
  <AttendanceButton attendancePageLink="/attendance" iconLink="https://picsum.photos/200/200" />
);
