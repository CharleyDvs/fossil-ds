import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { tokens } from '@fossil-ds/shared/styles'

export interface ColorDisplayProps {
  colorCode: string
  colorName: string
  dataTestId?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: theme.spacing(10),
      overflow: 'hidden',
      '& > *': {
        opacity: 0,
        transition: 'all ease .3s',
      },
      '&:hover': {
        boxShadow: theme.shadows[20],
        transition: 'all ease .3s',
        transform: 'scale(1.03)',
        '& > *': {
          opacity: 1,
        },
      },
      '&:last-child': {
        borderRadius: `0 0 ${tokens.border.radius[16].value} ${tokens.border.radius[16].value}`,
      },
      '&:first-child': {
        borderRadius: `${tokens.border.radius[16].value} ${tokens.border.radius[16].value} 0 0`,
      },
    },
    label: {
      color: '#ddd',
      backgroundColor: '#222',
      padding: theme.spacing(1),
    },
  }),
)

export function ColorDisplay({
  colorCode,
  colorName,
  dataTestId,
}: ColorDisplayProps) {
  const styles = useStyles()

  return (
    <div
      data-testid={dataTestId}
      style={{ background: colorCode }}
      className={styles.container}
    >
      <span className={styles.label}>{colorCode}</span>
      <span className={styles.label}>{colorName}</span>
    </div>
  )
}
