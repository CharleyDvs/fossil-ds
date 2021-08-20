import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useHistory } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DocumentationSkeleton } from '@fossil-ds/fossil-ui'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary?: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginLeft: theme.spacing(1),
    },
  }),
)

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <div role="alert">
      <Alert severity="error">
        The component doesn't exist or there's no documentation available
        <Button
          size="small"
          className={classes.margin}
          onClick={() => {
            if (resetErrorBoundary) resetErrorBoundary()
            history.push('/')
          }}
        >
          Go back to Home
        </Button>
      </Alert>
    </div>
  )
}

interface DocumentationProps {
  component: string
}

export const Documentation = ({ component }: DocumentationProps) => {
  const Component = (componentName: string) =>
    lazy(
      () =>
        import(
          `!babel-loader!@mdx-js/loader!./components/${componentName}.mdx`
        ),
    )
  const CurrentDocumentation = Component(component)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<DocumentationSkeleton />}>
        <CurrentDocumentation />
      </Suspense>
    </ErrorBoundary>
  )
}
