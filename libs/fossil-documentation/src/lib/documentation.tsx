import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useHistory } from 'react-router-dom'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary?: () => void
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

interface DocumentationProps {
  fileName: string
}

export const Documentation = ({ fileName }: DocumentationProps) => {
  const Component = (componentName: string) =>
    lazy(
      () =>
        import(
          `!babel-loader!@mdx-js/loader!./components/${componentName}.mdx`
        ),
    )
  const CurrentDocumentation = Component(fileName)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentDocumentation />
      </Suspense>
    </ErrorBoundary>
  )
}
