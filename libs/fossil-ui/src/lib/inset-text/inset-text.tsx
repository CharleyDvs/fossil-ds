import {
  HiExclamation,
  HiXCircle,
  HiCheckCircle,
  HiInformationCircle,
} from 'react-icons/hi'
import cx from 'classnames'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { tokens } from '@fossil-ds/shared/styles'

type TextType = 'warning' | 'info' | 'error' | 'success'

export interface InsetTextProps {
  textType: TextType
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
      paddingRight: theme.spacing(10),
      position: 'relative',
      overflow: 'hidden',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      right: '16px',
      opacity: '.1',
      transform: 'translateY(-50%)',
    },
    error: {
      background: tokens.util.color.error[20].value,
      borderLeft: `8px solid ${tokens.util.color.error[100].value}`,
    },
    warning: {
      background: tokens.util.color.warning[20].value,
      borderLeft: `8px solid ${tokens.util.color.warning[100].value}`,
    },
    success: {
      background: tokens.util.color.success[40].value,
      borderLeft: `8px solid ${tokens.util.color.success[100].value}`,
    },
    info: {
      background: tokens.util.color.info[20].value,
      borderLeft: `8px solid ${tokens.util.color.info[100].value}`,
    },
  }),
)

export function InsetText({ textType, children }: InsetTextProps) {
  const styles = useStyles()
  const icon =
    textType === 'warning' ? (
      <HiExclamation size={56} />
    ) : textType === 'error' ? (
      <HiXCircle size={56} />
    ) : textType === 'success' ? (
      <HiCheckCircle size={56} />
    ) : textType === 'info' ? (
      <HiInformationCircle size={56} />
    ) : null

  return (
    <div
      className={cx(
        styles.container,
        textType === 'warning' && styles.warning,
        textType === 'error' && styles.error,
        textType === 'success' && styles.success,
        textType === 'info' && styles.info,
      )}
    >
      <span className={styles.icon}>{icon}</span>
      {children}
    </div>
  )
}

export default InsetText
