import React, { FC } from "react";
import { ModeratingTag, Tag } from "./ModeratingTag";

interface Props {
  tags: Tag[];
}

export const TagList: FC<Props> = ({ tags }) => {
  return (
    <div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>閲覧できるタグ</h3>
      {tags.map((t, i) => (
        <ModeratingTag tag={t} key={i} onClick={() => {}} />
      ))}
    </div>
  );
};
