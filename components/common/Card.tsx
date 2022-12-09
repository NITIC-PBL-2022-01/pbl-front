import React, { FC, ReactNode } from 'react'
import style from './Card.module.css'

interface Props {
  children: ReactNode
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <div className={style.card}>{children}</div>
  )
}
