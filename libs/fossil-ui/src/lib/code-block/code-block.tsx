import Highlight, { defaultProps } from 'prism-react-renderer'

interface CodeBlockProps {
  children: string
}

export const CodeBlock = ({ children }: CodeBlockProps): JSX.Element => {
  return (
    <Highlight {...defaultProps} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            borderRadius: '16px',
            margin: '32px auto',
            padding: '20px',
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
  )
}
