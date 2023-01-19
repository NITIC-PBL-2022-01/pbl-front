import { Dayjs } from "dayjs";
import React from "react";
import { EventAddingButton } from "../../../components/Event/FloatButton";

export default {
  title: "Event/FloatButton",
  component: EventAddingButton,
};

export const Default = () => (
  <EventAddingButton
    tags={[
      {
        name: "タグ1",
        id: "0",
        color: "red",
      },
      {
        name: "タグ2",
        id: "1",
        color: "blue",
      },
      {
        name: "タグ3",
        id: "2",
        color: "red",
      },
    ]}

    addEvent={(
      title: string,
      detail: string,
      tagID: string,
      color: string,
      date: string,
      time: string,
      duration: number,
      isTodo: boolean,
      done: boolean,
      location: string,
      isRepeat: boolean,
      repeat?: {
        unit: string,
        value: number,
        since: Dayjs,
        until: Dayjs,
      }
    ) => (
      console.log(title, detail, tagID, color, date, time, duration, isTodo, done, location, isRepeat, repeat)
    )}
  />
);
