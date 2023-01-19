import React, { FC } from "react";
import { AttendanceButton } from "./AttendanceButton";
import { MenuIcon } from "./MenuIcon";
import { MonthIndicator } from "./MonthIndicator";
import style from "./index.module.css";

interface Props {
  iconLink: string;
  attendancePageLink: string;
  onMenuButtonClick: () => void;
  year: number;
  month: number;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

export const Header: FC<Props> = ({
  iconLink,
  attendancePageLink,
  onMenuButtonClick,
  year,
  month,
  incrementMonth,
  decrementMonth,
}) => {
  return (
    <div className={style.header}>
      <MenuIcon onClick={onMenuButtonClick} />
      <MonthIndicator year={year} month={month} incrementMonth={incrementMonth} decrementMonth={decrementMonth} />
      <AttendanceButton
        iconLink={iconLink}
        attendancePageLink={attendancePageLink}
      />
    </div>
  );
};
