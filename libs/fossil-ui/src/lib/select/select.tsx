import {
  FormControl,
  Select as MUSelect,
  SelectProps as MUSelectProps,
  MenuItem,
  InputLabel,
} from '@material-ui/core'

interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends MUSelectProps {
  dataTestId?: string
  options: SelectOption[]
}

export function Select({ dataTestId, label, options, ...rest }: SelectProps) {
  return (
    <FormControl variant="filled" style={{ minWidth: '190px' }}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <MUSelect
        data-testid={dataTestId}
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
    </FormControl>
  )
}

export default Select
