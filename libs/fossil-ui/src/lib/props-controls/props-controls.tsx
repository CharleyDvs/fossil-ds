import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { TextInput } from '../text-input/text-input'
import { Switch } from '../switch/switch'
import { Select, SelectOption } from '../select/select'

type PropType = 'textInput' | 'switch' | 'select'

export interface ComponentProp {
  propName: string
  type: PropType
  value?: string | boolean | unknown
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void
  options?: SelectOption[]
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
        {propList.map((propObj, propIdx) => {
          const { propName, type, ...rest } = propObj

          return (
            <li key={`${propName}-${propIdx}`}>
              {type === 'textInput' ? (
                <TextInput label={propName} {...rest} />
              ) : type === 'switch' ? (
                <Switch label={propName} {...rest} />
              ) : type === 'select' ? (
                <Select label={propName} {...rest} />
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
