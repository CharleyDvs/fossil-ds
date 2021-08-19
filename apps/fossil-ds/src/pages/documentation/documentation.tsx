import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useParams, useHistory } from 'react-router-dom'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary?: () => void
}
interface ParamsProps {
  componentName: string
}

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
  const history = useHistory()

  return (
    <div role="alert">
      <p>The component doesn't exist or there's no documentation available</p>
      <button
        onClick={() => {
          if (resetErrorBoundary) resetErrorBoundary()
          history.push('/')
        }}
      >
        Go back to Home
      </button>
    </div>
  )
}

export const Documentation = () => {
  const { componentName } = useParams<ParamsProps>()
  const Component = (componentName: string) =>
    lazy(() => import(`!babel-loader!@mdx-js/loader!./${componentName}.mdx`))
  const CurrentDocumentation = Component(componentName)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentDocumentation />
      </Suspense>
    </ErrorBoundary>
  )
}
