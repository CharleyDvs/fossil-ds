import React, { useState, useEffect } from 'react'
import { PropsControls, PropsControlsProps } from '@fossil-ds/fossil-ui'
import { Alert } from '@material-ui/lab'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

/* eslint-disable-next-line */
export interface ComponentPlaygroundProps extends PropsControlsProps {
  component:
    | React.ReactElement<
        React.ReactNode,
        string | React.JSXElementConstructor<React.ReactNode>
      >
    | React.ReactElement<
        React.ReactNode,
        string | React.JSXElementConstructor<React.ReactNode>
      >[]
  shortDescription?: string
}

type ComponentPlaygroundState = { [k: string]: string | boolean }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playground: {
      background: '#222',
      borderRadius: '12px',
      boxShadow: '0px 0px 15px #2a2a2a',
      color: '#dfdfdf',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto',
      maxWidth: '900px',
      height: '500px',
      padding: theme.spacing(2),
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
      padding: theme.spacing(2),
    },
    componentContainer: {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '80%',
    },
    playgroundTitle: {
      position: 'absolute',
      top: 0,
      left: theme.spacing(2),
    },
    description: {
      position: 'absolute',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
      width: '70%',
    },
  }),
)

export function ComponentPlayground({
  componentName,
  component,
  propList,
  shortDescription,
}: ComponentPlaygroundProps) {
  const styles = useStyles()
  const [currentComponentProps, setCurrentComponentProps] =
    useState<ComponentPlaygroundState>({})

  const currentPropList = propList.map((propObj) => {
    const { propName, type } = propObj

    if (type === 'textInput') {
      propObj.value = currentComponentProps[propName]
      propObj.onChange = (e: React.ChangeEvent<Record<string, string>>) => {
        setCurrentComponentProps({
          ...currentComponentProps,
          [propName]: e.currentTarget.value,
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
    })

    setCurrentComponentProps(propsObj)
  }, [propList, componentName])

  return (
    <div className={styles.playground}>
      <div className={styles.componentContainer}>
        <h1 className={styles.playgroundTitle}>{componentName}</h1>
        {Array.isArray(component)
          ? component.map((compElem, compIdx) => (
              <div key={`${componentName}-example-${compIdx}`}>
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

export default ComponentPlayground
