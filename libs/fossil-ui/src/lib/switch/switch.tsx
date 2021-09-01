import {
  FormControlLabel,
  Switch as MUSwitch,
  SwitchProps as MUSwitchProps,
} from '@material-ui/core'
import React from 'react'

/* eslint-disable-next-line */
export interface SwitchProps extends MUSwitchProps {
  label: string
  dataTestId?: string
}

export function Switch({
  value,
  label,
  dataTestId,
  disabled,
  ...rest
}: SwitchProps): JSX.Element {
  return (
    <FormControlLabel
      disabled={disabled}
      value={value}
      control={<MUSwitch color="primary" {...rest} />}
      data-testid={dataTestId}
      label={label}
      labelPlacement="start"
    />
  )
}

export default Switch
