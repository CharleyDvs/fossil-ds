import { makeStyles, Theme } from '@material-ui/core/styles'
import cx from 'classnames'

export interface TextLinkProps {
  dataTestId?: string
  className?: string
  children?: React.ReactNode
  icon?: JSX.Element
  onClick?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    cursor: 'pointer',
    transition: 'all ease .5s',
    position: 'relative',
    '&:hover': {
      textDecoration: 'underline',
      opacity: '.7',
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
}))

export const TextLink = ({
  children,
  className,
  dataTestId,
  icon,
  onClick,
  ...rest
}: TextLinkProps): JSX.Element => {
  const styles = useStyles()

  return (
    <span
      role="link"
      className={cx(styles.link, className)}
      data-testid={dataTestId}
      onClick={() => {
        if (onClick) onClick()
      }}
      {...rest}
    >
      <span className={styles.icon}>{icon}</span>
      {children}
    </span>
  )
}
