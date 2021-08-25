import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { TextInput } from '../text-input/text-input'
import { Switch } from '../switch/switch'

type PropType = 'textInput' | 'switch'

interface ComponentProp {
  propName: string
  type: PropType
  value?: string
  onChange?: () => void
}

export interface PropsControlsProps {
  propList: ComponentProp[]
  componentName: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    controlList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      listStyle: 'none',
      padding: 0,
      '& li': {
        marginTop: theme.spacing(1),
      },
    },
  }),
)

export const PropsControls = ({
  propList,
  componentName,
}: PropsControlsProps) => {
  const styles = useStyles()

  return (
    <div>
      <h2>{componentName} Props</h2>
      <ul className={styles.controlList}>
        {propList.map((propObj, propIdx) => (
          <li key={`${propObj.propName}-${propIdx}`}>
            {propObj.type === 'textInput' ? (
              <TextInput label={propObj.propName} {...propObj} />
            ) : propObj.type === 'switch' ? (
              <Switch label={propObj.propName} {...propObj} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
