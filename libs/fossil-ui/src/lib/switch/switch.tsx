import { FormControlLabel, Switch as MUSwitch } from '@material-ui/core'
import React from 'react'

/* eslint-disable-next-line */
export interface SwitchProps {
  value?: string | boolean
  label: string
  dataTestId?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<Record<string, string>>) => void
}

export function Switch({
  value,
  label,
  dataTestId,
  disabled,
  onChange,
}: SwitchProps): JSX.Element {
  return (
    <FormControlLabel
      disabled={disabled}
      value={value}
      control={<MUSwitch color="primary" />}
      data-testid={dataTestId}
      label={label}
      labelPlacement="start"
      onChange={(e: React.ChangeEvent<Record<string, string>>) => {
        if (onChange) onChange(e)
      }}
    />
  )
}

export default Switch
