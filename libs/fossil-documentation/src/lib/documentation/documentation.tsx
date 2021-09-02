import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useHistory } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DocumentationSkeleton, TextLink } from '@fossil-ds/fossil-ui'
import { HiHome } from 'react-icons/hi'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary?: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: theme.spacing(1),
    },
    documentationContainer: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      '& > *': {
        marginBottom: theme.spacing(4),
      },
    },
  }),
)

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
  const history = useHistory()
  const styles = useStyles()

  return (
    <div role="alert">
      <Alert severity="error">
        The component doesn't exist or there's no documentation available
        <TextLink
          className={styles.container}
          onClick={() => {
            if (resetErrorBoundary) {
              resetErrorBoundary()
            }
            history.push('/')
          }}
          icon={<HiHome />}
        >
          Go back to Home
        </TextLink>
      </Alert>
    </div>
  )
}

interface DocumentationProps {
  component: string
}

export const Documentation = ({ component }: DocumentationProps) => {
  const styles = useStyles()
  const Component = (componentName: string) =>
    lazy(
      () => import(`!babel-loader!@mdx-js/loader!../mdx/${componentName}.mdx`),
    )
  const CurrentDocumentation = Component(component)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<DocumentationSkeleton />}>
        <div className={styles.documentationContainer}>
          <CurrentDocumentation />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
