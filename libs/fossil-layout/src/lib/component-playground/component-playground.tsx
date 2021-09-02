import React, { useState, useEffect } from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { PropsControls, PropsControlsProps } from '@fossil-ds/fossil-ui'
import { tokens } from '@fossil-ds/shared/styles'

type ReactComponent = React.ReactElement<
  React.ReactNode,
  string | React.JSXElementConstructor<React.ReactNode>
>
/* eslint-disable-next-line */
export interface ComponentPlaygroundProps extends PropsControlsProps {
  component: ReactComponent | ReactComponent[]
  shortDescription?: string
}

type ComponentPlaygroundState = { [k: string]: unknown }

const useStyles = makeStyles({
  playground: {
    background: tokens.grey[90].value,
    borderRadius: tokens.spacing[4].value,
    boxShadow: '0px 0px 15px #2a2a2a',
    color: '#dfdfdf',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '900px',
    height: '500px',
    padding: tokens.spacing[4].value,
    position: 'relative',
  },
  controls: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    background: '#fdfdfd',
    borderRadius: '12px',
    color: '#222',
    display: 'flex',
    flexFlow: 'column wrap',
    overflowY: 'auto',
    padding: tokens.spacing[4].value,
    minWidth: '280px',
  },
  componentContainer: {
    alignContent: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    maxWidth: '80%',
  },
  componentWrapper: {
    margin: '4px 8px',
    '& > *': {
      transition: 'all ease .5s',
    },
  },
  playgroundTitle: {
    position: 'absolute',
    top: tokens.spacing[4].value,
    left: tokens.spacing[4].value,
  },
  description: {
    bottom: tokens.spacing[4].value,
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: '80%',
  },
})

export const ComponentPlayground = ({
  componentName,
  component,
  propList,
  shortDescription,
}: ComponentPlaygroundProps): JSX.Element => {
  const styles = useStyles()
  const [currentComponentProps, setCurrentComponentProps] =
    useState<ComponentPlaygroundState>({})

  const currentPropList = propList.map((propObj) => {
    const { propName, type } = propObj

    if (type === 'textInput') {
      propObj.value = currentComponentProps[propName]
      propObj.onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: e.target.value,
        })
      }
    }

    if (type === 'select') {
      propObj.value = currentComponentProps[propName]
      propObj.onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: e.target.value,
        })
      }
    }

    if (type === 'switch') {
      propObj.onChange = () => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: !currentComponentProps[propName],
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

      if (type === 'textInput') propsObj[propName] = componentName
      if (type === 'switch') propsObj[propName] = false
      if (type === 'select') propsObj[propName] = ''
    })

    setCurrentComponentProps(propsObj)
  }, [propList, componentName])

  return (
    <div className={styles.playground}>
      <div className={styles.componentContainer}>
        <h1 className={styles.playgroundTitle}>{componentName}</h1>
        {Array.isArray(component)
          ? component.map((compElem, compIdx) => (
              <div
                className={styles.componentWrapper}
                key={`${componentName}-example-${compIdx}`}
              >
                {React.cloneElement(compElem, currentComponentProps)}
              </div>
            ))
          : React.cloneElement(component, currentComponentProps)}
      </div>
      <div className={styles.controls}>
        <PropsControls
          propList={currentPropList}
          componentName={componentName}
        />
      </div>
      {shortDescription && (
        <Alert className={styles.description} severity="info">
          {shortDescription}
        </Alert>
      )}
    </div>
  )
}
