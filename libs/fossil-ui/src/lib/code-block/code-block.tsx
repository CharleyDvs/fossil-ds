import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { HiTemplate, HiCode, HiClipboard } from 'react-icons/hi'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface CodeBlockProps {
  children: string
  component?: React.ReactNode
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  previewContainer: {
    border: '1px solid #d3d3d3',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
  },
  controlsContainer: {
    position: 'absolute',
    right: '16px',
    bottom: '16px',
  },
  icon: {
    cursor: 'pointer',
    opacity: '.3',
    margin: '0 8px',
    transform: 'scale(1.5)',
    transition: 'all ease .3s',
    '&:hover': {
      transform: 'scale(1.7)',
    },
  },
  clipboardBtn: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    '&:hover': {
      opacity: '1',
    },
  },
  isSelected: {
    opacity: '1',
  },
  black: {
    color: '#222',
  },
  white: {
    color: '#dfdfdf',
  },
})

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
                  padding: '20px',
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
          <div className={cx(styles.clipboardBtn, styles.white, styles.icon)}>
            <CopyToClipboard text={children}>
              <HiClipboard />
            </CopyToClipboard>
          </div>
        </>
      ) : (
        <div className={styles.previewContainer}>{component}</div>
      )}
      <div className={styles.controlsContainer}>
        <HiTemplate
          className={cx(
            styles.icon,
            !showCode ? [styles.isSelected, styles.black] : styles.white,
          )}
          onClick={() => setShowCode(false)}
        />
        <HiCode
          className={cx(
            styles.icon,
            showCode ? [styles.isSelected, styles.white] : styles.black,
          )}
          onClick={() => setShowCode(true)}
        />
      </div>
    </div>
  )
}
