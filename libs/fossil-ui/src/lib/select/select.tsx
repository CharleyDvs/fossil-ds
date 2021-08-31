import {
  FormControl,
  Select as MUSelect,
  SelectProps as MUSelectProps,
  MenuItem,
  InputLabel,
} from '@material-ui/core'

interface SelectOption {
  value: 'string'
  label: 'string'
}

export interface SelectProps extends MUSelectProps {
  dataTestId: 'string'
  selectOptions: SelectOption[]
}

export function Select({ label, selectOptions, ...rest }: SelectProps) {
  return (
    <FormControl variant="filled">
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <MUSelect
        id={`${label}-select`}
        labelId={`${label}-select-label`}
        {...rest}
      >
        {selectOptions.map((option, idx) => (
          <MenuItem key={`${option.label}-${idx}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUSelect>
    </FormControl>
  )
}

export default Select
