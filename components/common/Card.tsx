import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}
