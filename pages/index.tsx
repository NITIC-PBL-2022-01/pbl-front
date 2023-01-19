import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Calendar, Event } from "../components/Calendar/Index";
import { EventAddingButton } from "../components/Event/FloatButton";
import { Header } from "../components/Header";
import { TagAddingButton } from "../components/Tag/FloatButton";

interface DateState {
  year: number;
  month: number;
}

export default function Home(): JSX.Element {
  const isStudent = false;
  const now = dayjs();
  const [dateState, setDateState] = useState<DateState>({
    year: now.year(),
    month: now.month() + 1,
  });

  const incrementMonth = (): void =>
    setDateState((state) => {
      if (state.month === 12) return { year: state.year + 1, month: 1 };

      return { ...state, month: state.month + 1 };
    });

  const decrementMonth = (): void =>
    setDateState((state) => {
      if (state.month === 1) return { year: state.year - 1, month: 12 };

      return { ...state, month: state.month - 1 };
    });

  const tags = [
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
  ];
  const events = [
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 4)),
      time: "午前 5:00",
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 4)),
      time: "午後 11:00",
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 8)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 12)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 16)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 23)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 23)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: {
        type: "Class",
        name: "class",
      },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 23)),
    },
    {
      id: "0",
      detail: "detail",
      duration: 120,
      tag: { type: "Class", name: "class" },
      title: "This is event",
      color: "#F00",
      date: dayjs(new Date(2023, 2, 28)),
    },
  ];
  const tagAttendance = (id: string, reason: string): void =>
    console.log(id, reason);

  const router = useRouter();

  return (
    <div style={{ height: "calc(100vh - 6rem)" }}>
      <Header
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        attendancePageLink="/attendance"
        iconLink="https://picsum.photos/200/200"
        // eslint-disable-next-line
        onMenuButtonClick={async () => {
          await router.push("/tag");
        }}
        year={dateState.year}
        month={dateState.month}
      />
      <Calendar
        tagAttendance={tagAttendance}
        year={dateState.year}
        month={dateState.month}
        events={events as Event[]}
      />
      <EventAddingButton
        tags={tags}
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
            unit: string;
            value: number;
            since: Dayjs;
            until: Dayjs;
          }
        ) =>
          console.log(
            title,
            detail,
            tagID,
            color,
            date,
            time,
            duration,
            isTodo,
            done,
            location,
            isRepeat,
            repeat
          )
        }
      />
      <TagAddingButton
        addTag={(n: string, c: string, a: string[], m: string[], t: string) =>
          console.log(n, c, a, m, t)
        }
        isStudent={isStudent}
      />
    </div>
  );
}
