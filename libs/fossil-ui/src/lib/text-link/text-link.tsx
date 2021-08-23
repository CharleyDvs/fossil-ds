import { makeStyles } from '@material-ui/core/styles'

interface TextLinkProps {
  children?: React.ReactNode
  icon?: JSX.Element
  onClick?: () => void
}

const useStyles = makeStyles({
  link: {
    cursor: 'pointer',
  },
})

export const TextLink = ({
  icon,
  onClick,
  children,
  ...rest
}: TextLinkProps): JSX.Element => {
  const styles = useStyles()

  return (
    <div
      className={styles.link}
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      {icon}
      {children}
    </div>
  )
}
