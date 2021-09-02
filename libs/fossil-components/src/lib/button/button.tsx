import React from 'react'
import cx from 'classnames'
import { CircularProgress } from '@material-ui/core'
import { HiCheck, HiX } from 'react-icons/hi'
import cl from './button.module.scss'

type ButtonStatus = 'success' | 'error' | ''
export interface ButtonProps
  extends React.ButtonHTMLAttributes<React.ReactNode> {
  status?: ButtonStatus
  leftIcon?: React.ReactNode
  label?: string
  loading?: boolean
  rightIcon?: React.ReactNode
  secondary?: boolean
}

export function Button({
  disabled,
  label,
  leftIcon,
  loading,
  secondary,
  rightIcon,
  status,
  ...rest
}: ButtonProps) {
  const isError = status === 'error'
  const isSuccess = status === 'success'
  const buttonClasses = cx(
    cl.button,
    secondary && cl.secondary,
    disabled && cl.disabled,
    loading && cl.loading,
    status === 'success' && cl.success,
    isError && cl.error,
  )
  const ICON_SIZE = 16

  return (
    <button className={buttonClasses} {...rest}>
      {loading ? (
        <CircularProgress className={cl.loadingIcon} size={ICON_SIZE} />
      ) : (
        <>
          {leftIcon && (
            <div className={cl.leftIcon}>
              {isSuccess ? (
                <HiCheck size={ICON_SIZE} />
              ) : isError ? (
                <HiX size={ICON_SIZE} />
              ) : (
                leftIcon
              )}
            </div>
          )}
          {label}
          {rightIcon && (
            <div className={cl.rightIcon}>
              {isSuccess ? (
                <HiCheck size={ICON_SIZE} />
              ) : isError ? (
                <HiX size={ICON_SIZE} />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </>
      )}
    </button>
  )
}

export default Button
