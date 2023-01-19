import React from "react";
import { NextPage } from "next";
import { Header } from "../components/Tag/Header";
import { ModeratingTagList } from "../components/Tag/ModeratingTagList";

const TagPage: NextPage = () => {
  const editTag = (id: string, name: string, color: string): void => {
    console.log(id, name, color);
  };
  const moderatingTags = [
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
        },
      ],
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
        },
      ],
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
        },
      ],
    },
  ];
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "1rem" }}>
        <ModeratingTagList editTag={editTag} tags={moderatingTags} />
      </div>
    </div>
  );
};

export default TagPage;
