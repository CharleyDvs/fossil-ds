import { Switch, Route } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { SideMenu, ThemeSwitch } from '@fossil-ds/fossil-layout'
import { DocumentationPage } from '@fossil-ds/fossil-containers'

const Home = () => {
  return <h1>Home</h1>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginTop: {
      marginTop: theme.spacing(2),
    },
  }),
)

export function App() {
  const styles = useStyles()

  return (
    <>
      <SideMenu />
      <div className={styles.marginTop}>
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
    </>
  )
}

export default App
