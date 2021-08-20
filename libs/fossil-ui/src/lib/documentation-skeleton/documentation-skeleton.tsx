import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 250,
    padding: 8,
  },
})

export const DocumentationSkeleton = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Skeleton
        variant="text"
        height={24}
        width="80%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        variant="text"
        height={16}
        width="80%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        variant="rect"
        height={118}
        width="80%"
        style={{ marginBottom: 8 }}
      />
    </div>
  )
}
