import { makeStyles, Theme } from '@material-ui/core/styles'

interface TextLinkProps {
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
  icon,
  onClick,
  children,
  ...rest
}: TextLinkProps): JSX.Element => {
  const styles = useStyles()

  return (
    <span
      role="link"
      className={styles.link}
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
