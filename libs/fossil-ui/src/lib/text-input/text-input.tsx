import { TextField, BaseTextFieldProps } from '@material-ui/core'

/* eslint-disable-next-line */
export interface TextInputProps extends BaseTextFieldProps {
  dataTestId?: string
}

export const TextInput = ({
  dataTestId,
  className,
  ...rest
}: TextInputProps) => {
  return (
    <div>
      <TextField data-testid={dataTestId} {...rest} variant="filled" />
    </div>
  )
}
