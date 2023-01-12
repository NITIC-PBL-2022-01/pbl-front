import React, { FC } from 'react';
import style from './MonthIndicator.module.css';

interface Props {
  year: number
  month: number
}

export const MonthIndicator: FC <Props> = ({ year, month }) => {
  return (
    <div className={style.indicator}>
      <span className={style.year}>{year}</span>
      <span className={style.month}>{month}</span>
    </div>
  );
};
