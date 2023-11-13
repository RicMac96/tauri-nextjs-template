/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'
export interface GlobalContent {
  filter?: string | undefined
  setFilter: (c: string | undefined) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
  filter: undefined, // set a default value
  setFilter: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)
