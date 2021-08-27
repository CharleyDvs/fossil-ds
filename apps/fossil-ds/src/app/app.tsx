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

const Home = () => <h1>Hello World</h1>

const propList: ComponentProp[] = [
  {
    propName: 'label',
    type: 'textInput',
  },
]

export function App() {
  return (
    <div className={styles.app}>
      <SideMenu />
      <Switch>
        <Route exact path="/">
          <Home />
          <ComponentPlayground
            component={<Button />}
            componentName="Button"
            propList={propList}
          />
        </Route>
        <Route path="/components/:componentName">
          <h1>Component</h1>
          <DocumentationPage />
        </Route>
        <Route exact path="/colors">
          <h1>Color</h1>
          <ThemeSwitch />
        </Route>
      </Switch>
    </div>
  )
}

export default App
