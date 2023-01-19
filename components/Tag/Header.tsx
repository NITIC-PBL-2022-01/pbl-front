import React, { FC } from "react";
import Link from "next/link";
import { Home } from "react-feather";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link passHref={true} href="/">
        <Home size={32} />
      </Link>
      <p className={styles.title}>タグ管理</p>
    </div>
  );
};
