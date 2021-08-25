import React from 'react'
import './button.module.scss'

/* eslint-disable-next-line */
export interface ButtonProps {
  leftIcon?: React.ReactNode
  label?: string
  rightIcon?: React.ReactNode
  onClick?: () => void
}

export function Button({ label, leftIcon, rightIcon, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

export default Button
