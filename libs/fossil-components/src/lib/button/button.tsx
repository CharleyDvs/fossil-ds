import React from 'react'
import cx from 'classnames'
import { CircularProgress } from '@material-ui/core'
import cl from './button.module.scss'

type ButtonStatus = 'success' | 'error' | ''
export interface ButtonProps
  extends React.ButtonHTMLAttributes<React.ReactNode> {
  status?: ButtonStatus
  leftIcon?: React.ReactNode
  label?: string
  loading?: boolean
  rightIcon?: React.ReactNode
  outlined?: boolean
}

export function Button({
  disabled,
  label,
  leftIcon,
  loading,
  outlined,
  rightIcon,
  status,
  ...rest
}: ButtonProps) {
  const buttonClasses = cx(
    cl.button,
    outlined && cl.outlined,
    disabled && cl.disabled,
    status === 'success' && cl.success,
    status === 'error' && cl.error,
  )

  return (
    <button className={buttonClasses} {...rest}>
      {loading ? (
        <CircularProgress className={cl.loading} size={12} />
      ) : (
        <>
          {leftIcon && <div className={cl.leftIcon}>{leftIcon}</div>}
          {label}
          {rightIcon && <div className={cl.rightIcon}>{rightIcon}</div>}
        </>
      )}
    </button>
  )
}

export default Button
