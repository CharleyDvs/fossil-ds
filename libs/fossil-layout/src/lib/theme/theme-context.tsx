import { createContext } from 'react'

export type ThemeValues = 'Light' | 'Dark'

export interface ThemeContext {
  theme: ThemeValues
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)
