import { createContext, useState } from 'react'

type Theme = 'light' | 'dark'
interface ThemeContext {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
