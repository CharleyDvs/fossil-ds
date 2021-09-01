import { useState } from 'react'
import { ThemeContext, ThemeValues } from './theme-context'
import { ThemeProvider, createTheme } from '@material-ui/core'
import { tokens } from '@fossil-ds/shared/styles'

const lightTheme = createTheme({
  palette: {
    primary: {
      light: tokens.brand.color.primary[80].value,
      main: tokens.brand.color.primary[100].value,
      dark: tokens.brand.color.primary[120].value,
    },
    secondary: {
      light: tokens.brand.color.secondary[80].value,
      main: tokens.brand.color.secondary[100].value,
      dark: tokens.brand.color.secondary[120].value,
    },
  },
})

const darkTheme = createTheme({
  palette: {
    primary: {
      main: tokens.blue[120].value,
    },
  },
})

export const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeValues>('Light')
  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
