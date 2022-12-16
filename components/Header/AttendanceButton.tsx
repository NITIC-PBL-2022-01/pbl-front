import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import style from "./AttendanceButton.module.css";

interface Props {
  iconLink: string
  attendancePageLink: string
}

export const AttendanceButton: FC<Props> = ({ iconLink, attendancePageLink }) => {
  return (
    <div className={style.outer}>
      <Link href={attendancePageLink} passHref>
        <>
          <Image src={iconLink} alt="profile image" className={style.image} fill />
          <p className={style.text}>出席確認へ</p>
        </>
      </Link>
    </div>
  );
};