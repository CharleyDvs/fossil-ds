import { TextInput } from '../text-input/text-input'

const MockProps: ComponentProp[] = [
  {
    propLabel: 'Inner Text',
    type: 'textInput',
  },
]

type PropType = 'textInput'

interface ComponentProp {
  propLabel: string
  type: PropType
}

/* eslint-disable-next-line */
export interface PropsControlsProps {
  ComponentProps: ComponentProp[]
}

export const PropsControls = ({
  ComponentProps = MockProps,
}: PropsControlsProps) => {
  return (
    <div>
      <ul>
        {ComponentProps.map((propObj, propIdx) => (
          <li key={`${propObj.propLabel}-${propIdx}`}>{propObj.propLabel}</li>
        ))}
      </ul>
    </div>
  )
}
