// import { useContext } from 'react'
import { Switch } from '@fossil-ds/fossil-ui'

export const ThemeSwitch = (): JSX.Element => {
  // const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="container">
      <Switch
        label="theme"
        value="theme"
        onChange={() => {
          console.log('working')
        }}
      />
    </div>
  )
}
