import React, { FC } from "react";
import Link from "next/link";
import { Home } from "react-feather";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link passHref={true} href="/">
        <Home size={64} />
      </Link>
      <p className={styles.title}>出席管理</p>
    </div>
  );
};
