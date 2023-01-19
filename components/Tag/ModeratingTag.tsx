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
  onClick: () => void;
}

export const ModeratingTag: FC<Props> = ({ tag, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{tag.name}</h3>
      <p>色: {tag.color}</p>
      { /* 
      <div>
        <h4>管理者</h4>
        {tag.admin.map((u, i) => (
          <div key={i}>
            {u.email}
          </div>
        ))}
      </div>
      <div>
        <h4>メンバー</h4>
        {tag.member.map((u, i) => (
          <div key={i}>
            {u.email}
            <X onClick={() => deleteMember(u.email)} />
          </div>
        ))}
      </div>*/}
    </div>
  );
};
