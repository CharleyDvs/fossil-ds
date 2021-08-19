import styles from './app.module.scss'
import { Switch, Route } from 'react-router-dom'
import { SideMenu, ThemeSwitch } from '../layout'

const Home = () => <h1>Hello World</h1>

export function App() {
  return (
    <div className={styles.app}>
      <SideMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components/:componentName">
          <h1>Component</h1>
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
