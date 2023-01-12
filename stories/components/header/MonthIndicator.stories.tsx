import React from "react";
import { MonthIndicator } from "../../../components/Header/MonthIndicator";

export default {
  title: "Common/Header/MonthIndicator",
  component: MonthIndicator,
};

export const Default = () => <MonthIndicator year={2022} month={10} />;
