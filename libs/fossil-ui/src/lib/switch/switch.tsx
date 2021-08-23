import './switch.module.scss'
import { FormControlLabel, Switch as MUSwitch } from '@material-ui/core'

/* eslint-disable-next-line */
export interface SwitchProps {
  value?: string
  label: string
  dataTestId?: string
  onChange: () => void
}

export function Switch({
  value,
  label,
  dataTestId,
  onChange,
}: SwitchProps): JSX.Element {
  return (
    <FormControlLabel
      value={value}
      control={<MUSwitch color="primary" />}
      data-testid={dataTestId}
      label={label}
      labelPlacement="start"
      onChange={() => {
        if (onChange) onChange()
      }}
    />
  )
}

export default Switch
