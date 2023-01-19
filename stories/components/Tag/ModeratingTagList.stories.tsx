import React from "react";
import { ModeratingTagList } from "../../../components/Tag/ModeratingTagList";

export default {
  title: "Tag/ModeratingTagList",
  component: ModeratingTagList,
};

export const Default = () => (
  <ModeratingTagList
    tags={[
      {
        name: "タグ1",
        id: "0",
        color: "red",
        admin: [
          {
            email: "hoge@example.com",
          },
        ],
        member: [
          {
            email: "fuga@example.com",
          }
        ]
      },
      {
        name: "タグ2",
        id: "1",
        color: "blue",
        admin: [
          {
            email: "hoge@example.com",
          },
        ],
        member: [
          {
            email: "fuga@example.com",
          }
        ]
      },
      {
        name: "タグ3",
        id: "2",
        color: "red",
        admin: [
          {
            email: "hoge@example.com",
          },
        ],
        member: [
          {
            email: "fuga@example.com",
          }
        ]
      },
    ]}
    editTag={(id: string, name: string, color: string) => console.log(id, name, color)}
  />
);
