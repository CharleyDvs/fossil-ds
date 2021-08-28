import cl from './app.module.scss'
import { Switch, Route } from 'react-router-dom'
import { SideMenu, ThemeSwitch } from '@fossil-ds/fossil-layout'
import { DocumentationPage } from '@fossil-ds/fossil-containers'

const Home = () => {
  return <h1>Home</h1>
}

export function App() {
  return (
    <div className={cl.app}>
      <SideMenu />
      <div className={cl.pagesContainer}>
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
