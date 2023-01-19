import React, { FC } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import style from "./MonthIndicator.module.css";

interface Props {
  year: number;
  month: number;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

export const MonthIndicator: FC<Props> = ({
  year,
  month,
  incrementMonth,
  decrementMonth,
}) => {
  return (
    <div className={style.wrapper}>
      <ArrowLeft size={32} className={style.button} onClick={decrementMonth} />
      <div className={style.indicator}>
        <span className={style.year}>{year}</span>
        <span className={style.month}>{month}</span>
      </div>
      <ArrowRight size={32} className={style.button} onClick={incrementMonth} />
    </div>
  );
};
