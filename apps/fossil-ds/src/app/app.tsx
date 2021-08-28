import styles from './app.module.scss'
import { Switch, Route } from 'react-router-dom'
import {
  SideMenu,
  ThemeSwitch,
  ComponentPlayground,
} from '@fossil-ds/fossil-layout'
import { ComponentProp } from '@fossil-ds/fossil-ui'
import { Button } from '@fossil-ds/fossil-components'
import { DocumentationPage } from '@fossil-ds/fossil-containers'

import { HiHome } from 'react-icons/hi'

const Home = () => {
  const componentArray = [
    <Button />,
    <Button leftIcon={<HiHome />} />,
    <Button rightIcon={<HiHome />} />,
  ]

  return <h1>Home</h1>
}

const propList: ComponentProp[] = [
  {
    propName: 'label',
    type: 'textInput',
  },
  {
    propName: 'disabled',
    type: 'switch',
  },
  {
    propName: 'outlined',
    type: 'switch',
  },
  {
    propName: 'loading',
    type: 'switch',
  },
]

export function App() {
  return (
    <div className={styles.app}>
      <SideMenu />
      <div style={{ marginTop: '3rem' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/components/:componentName">
            <DocumentationPage />
          </Route>
          <Route exact path="/colors">
            <h1>Color</h1>
            <ThemeSwitch />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
