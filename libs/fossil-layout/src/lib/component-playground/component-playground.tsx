import React, { useState, useEffect } from 'react'
import { PropsControls, PropsControlsProps } from '@fossil-ds/fossil-ui'

/* eslint-disable-next-line */
export interface ComponentPlaygroundProps extends PropsControlsProps {
  component: React.ReactElement<
    React.ReactNode,
    string | React.JSXElementConstructor<React.ReactNode>
  >
}

type ComponentPlaygroundState = { [k: string]: string | boolean }

export function ComponentPlayground({
  componentName,
  component,
  propList,
}: ComponentPlaygroundProps) {
  const [currentComponentProps, setCurrentComponentProps] =
    useState<ComponentPlaygroundState>({})

  const currentPropList = propList.map((propObj) => {
    const { propName, type } = propObj

    if (type === 'textInput') {
      propObj.onChange = (e: React.ChangeEvent<Record<string, string>>) => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: e.currentTarget.value,
        })
      }
    }

    if (type === 'switch') {
      propObj.onChange = (e: React.ChangeEvent<Record<string, string>>) => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: currentComponentProps[propName] === 'on' ? false : true,
        })
      }
    }

    propObj.value = currentComponentProps[propObj.propName]
    return propObj
  })

  useEffect(() => {
    const propsObj: ComponentPlaygroundState = {}

    propList.forEach((propObj) => {
      const { type, propName } = propObj

      if (type === 'textInput') propsObj[propName] = ''
      if (type === 'switch') propsObj[propName] = false
    })

    setCurrentComponentProps(propsObj)
  }, [propList])

  useEffect(() => {
    console.log(currentComponentProps)
  }, [currentComponentProps])

  return (
    <div>
      <div>
        <h2>{componentName}</h2>
        {React.cloneElement(component, currentComponentProps)}
      </div>
      <PropsControls propList={currentPropList} componentName={componentName} />
    </div>
  )
}

export default ComponentPlayground
