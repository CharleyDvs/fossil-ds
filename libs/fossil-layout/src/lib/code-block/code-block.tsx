import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import cx from 'classnames'
import { IconButton, Tooltip } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { HiTemplate, HiCode, HiClipboard } from 'react-icons/hi'
import { tokens } from '@fossil-ds/shared/styles'
import { ClipboardButton } from '@fossil-ds/fossil-ui'

interface CodeBlockProps {
  children: string
  component?: React.ReactNode | React.ReactNode[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
    },
    previewContainer: {
      border: `1px solid ${tokens.grey[20].value}`,
      borderRadius: tokens.border.radius[16].value,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      '& > *': {
        margin: '0 8px',
      },
    },
    controlsContainer: {
      position: 'absolute',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
    icon: {
      cursor: 'pointer',
      marginLeft: theme.spacing(1),
    },
    clipboardBtn: {
      position: 'absolute',
      bottom: theme.spacing(1),
      '&:hover': {
        opacity: '1 !important',
      },
    },
    notSelected: {
      opacity: '.5',
    },
    black: {
      color: tokens.grey[100].value,
    },
    white: {
      color: tokens.grey[20].value,
    },
  }),
)

export const CodeBlock = ({
  children,
  component,
}: CodeBlockProps): JSX.Element => {
  const [showCode, setShowCode] = useState(true)
  const styles = useStyles()

  return (
    <div className={styles.container}>
      {showCode ? (
        <>
          <Highlight {...defaultProps} code={children} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{
                  borderRadius: '16px',
                  margin: '0 auto',
                  padding: '16px',
                  minHeight: '300px',
                  ...style,
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
          <div className={styles.icon}>
            <ClipboardButton text={children}>
              <IconButton className={cx(styles.clipboardBtn, styles.white)}>
                <HiClipboard />
              </IconButton>
            </ClipboardButton>
          </div>
        </>
      ) : (
        <div className={styles.previewContainer}>
          {Array.isArray(component)
            ? component.map((element, idx) => (
                <div key={`component-example-${idx}`}>{element}</div>
              ))
            : component}
        </div>
      )}
      <div className={styles.controlsContainer}>
        <Tooltip title="show component" placement="top" arrow>
          <IconButton
            className={cx(
              showCode ? [styles.notSelected, styles.white] : styles.black,
              styles.icon,
            )}
            aria-label="show component"
            onClick={() => setShowCode(false)}
          >
            <HiTemplate />
          </IconButton>
        </Tooltip>
        <Tooltip title="show code snippet" placement="top" arrow>
          <IconButton
            className={cx(
              showCode ? styles.white : [styles.black, styles.notSelected],
              styles.icon,
            )}
            aria-label="show code"
            onClick={() => setShowCode(true)}
          >
            <HiCode />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
