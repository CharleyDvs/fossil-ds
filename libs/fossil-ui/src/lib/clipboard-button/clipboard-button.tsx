import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip } from '@material-ui/core'

export interface ClipboardButtonProps {
  text: string
  children: React.ReactElement
  dataTestId?: string
}

export const ClipboardButton = ({
  text,
  children,
  dataTestId,
}: ClipboardButtonProps) => {
  const [clipboardText, setClipboardText] = useState('copy to clipboard')

  const handleCopy = () => {
    setClipboardText('copied to the clipboard!')
    setTimeout(() => {
      setClipboardText('copy to clipboard')
    }, 3000)
  }

  return (
    <CopyToClipboard data-testid={dataTestId} text={text} onCopy={handleCopy}>
      <Tooltip title={clipboardText} placement="top" arrow>
        {children}
      </Tooltip>
    </CopyToClipboard>
  )
}
