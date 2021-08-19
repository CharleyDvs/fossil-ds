import { Suspense, lazy } from 'react'
import styles from './app.module.scss'
import { Switch, Route, useParams } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { SideMenu, ThemeSwitch } from '../layout'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary?: () => void
}
interface ParamsProps {
  componentName: string
}

const Home = () => <h1>Hello World</h1>

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        onClick={() => {
          if (resetErrorBoundary) resetErrorBoundary()
        }}
      >
        Try again
      </button>
    </div>
  )
}

export function App() {
  const Example = () => {
    const { componentName } = useParams<ParamsProps>()
    const Component = (componentName: string) =>
      lazy(() => import(`!babel-loader!@mdx-js/loader!./${componentName}.mdx`))
    const Documentation = Component(componentName)

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <Documentation />
        </Suspense>
      </ErrorBoundary>
    )
  }

  return (
    <div className={styles.app}>
      <SideMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components/:componentName">
          <h1>Component</h1>
          <Example />
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
