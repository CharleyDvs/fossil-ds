import { makeStyles, Theme } from '@material-ui/core/styles'

export interface TextLinkProps {
  dataTestId: string
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
    marginLeft: theme.spacing(0.5),
  },
}))

export const TextLink = ({
  icon,
  onClick,
  children,
  dataTestId,
  ...rest
}: TextLinkProps): JSX.Element => {
  const styles = useStyles()

  return (
    <span
      role="link"
      className={styles.link}
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
