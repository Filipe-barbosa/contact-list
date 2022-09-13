import { ReactNode } from 'react'

export interface PropsWithChildren<T = ReactNode> {
  children: T
}
