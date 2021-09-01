import { TextField, BaseTextFieldProps } from '@material-ui/core'

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
      <TextField
        defaultValue=""
        data-testid={dataTestId}
        variant="filled"
        {...rest}
      />
    </div>
  )
}
