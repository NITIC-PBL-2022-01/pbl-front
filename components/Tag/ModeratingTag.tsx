import React, { FC } from "react";
import styles from "./ModeratingTag.module.css";

export interface Tag {
  id: string;
  name: string;
  color: string;
  admin: Array<{
    email: string;
  }>;
  member: Array<{ email: string }>;
}

interface Props {
  tag: Tag;
  onClick?: () => void;
}

export const ModeratingTag: FC<Props> = ({ tag, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{tag.name}</h3>
      <p>色: {tag.color}</p>
    </div>
  );
};
