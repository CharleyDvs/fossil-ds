import {
  FormControl,
  Select as MUSelect,
  SelectProps as MUSelectProps,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'

interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends MUSelectProps {
  dataTestId?: string
  helperText?: string
  options: SelectOption[]
}

export function Select({
  dataTestId,
  disabled,
  error,
  label,
  options,
  helperText,
  ...rest
}: SelectProps) {
  return (
    <FormControl
      variant="filled"
      style={{ minWidth: '190px' }}
      error={error}
      disabled={disabled}
    >
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <MUSelect
        data-testid={dataTestId}
        disabled={disabled}
        error={error}
        id={`${label}-select`}
        labelId={`${label}-select-label`}
        {...rest}
      >
        {options.map((option, idx) => (
          <MenuItem key={`${option.label}-${idx}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default Select
