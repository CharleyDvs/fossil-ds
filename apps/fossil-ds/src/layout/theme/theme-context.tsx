import { createContext, useState } from 'react'

type Theme = 'Light' | 'Dark'
interface ThemeContext {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('Light')
  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
