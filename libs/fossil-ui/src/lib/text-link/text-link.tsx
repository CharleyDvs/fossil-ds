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
    fontWeight: 'bold',
    paddingRight: theme.spacing(2),
  },
  icon: {
    position: 'absolute',
    transform: 'translateY(50%)',
    top: '-50%',
    right: '-4px',
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
      {children}
      <span className={styles.icon}>{icon}</span>
    </span>
  )
}
