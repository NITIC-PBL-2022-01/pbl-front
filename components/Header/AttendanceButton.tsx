import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
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
          <div className={style.image_container}>
            <Image src={iconLink} alt="profile image" className={style.image} fill />
          </div>
          <p className={style.text}>出席確認へ</p>
        </>
      </Link>
    </div>
  );
};
