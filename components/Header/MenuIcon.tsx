import React, { FC } from "react";
import { IconContext } from "react-icons";
import { BiMenu } from "react-icons/bi";
import style from "./MenuIcon.module.css";

interface Props {
  onClick: () => void;
}

export const MenuIcon: FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <IconContext.Provider value={{ className: style.icon }}>
        <BiMenu />
      </IconContext.Provider>
    </div>
  );
};
