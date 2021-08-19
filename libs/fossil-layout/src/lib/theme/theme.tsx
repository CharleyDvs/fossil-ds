import { useState } from 'react'
import { ThemeContext, ThemeValues } from './theme-context'

export const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeValues>('Light')
  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
