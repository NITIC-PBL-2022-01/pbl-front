import React, { FC } from "react";
import { Label } from "./Label";

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
  return (
    <div>
      <p>{date}</p>
      {events.map((e, i) => (
        <Label title={e.title} color={e.color} key={i} />
      ))}
    </div>
  );
};
