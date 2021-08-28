import React from 'react'
import cx from 'classnames'
import { CircularProgress } from '@material-ui/core'
import cl from './button.module.scss'

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<React.ReactNode> {
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
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        cl.button,
        outlined && cl.outlined,
        disabled && cl.disabled,
      )}
      {...rest}
    >
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
