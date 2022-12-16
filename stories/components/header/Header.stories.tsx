import React from "react";
import { Header } from "../../../components/Header";

export default {
  title: "Common/Header",
  component: Header,
};

export const Default = () => (
  <Header
    attendancePageLink="/attendance"
    iconLink="https://picsum.photos/200/200"
    onMenuButtonClick={() => console.log("test")}
    year={2022}
    month={12}
  />
);
