import React, { FC } from "react";

// TODO: replace this
interface Event {
  title: string;
  color: string;
}

interface Props {
  events: Array<Event>;
  date: number;
  isOutside: boolean;
}

export const Cell: FC<Props> = ({ events, date, isOutside }) => {
  // TODO: implement this
  return <></>;
};
