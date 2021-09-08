import { render, RenderResult } from '@testing-library/react'
import { InsetText, InsetTextProps } from '../inset-text'

describe('<InsetText />', () => {
  let component: (props: InsetTextProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<InsetText {...props} />)
  })

  const props: InsetTextProps = {
    textType: 'info',
    children: 'This is an example',
    dataTestId: 'inset-text-test',
  }

  it('renders correctly with the given props', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('inset-text-test')).toBeTruthy()
  })

  it('displays the given text correctly', () => {
    const { getByText } = component(props)

    expect(getByText('This is an example')).toBeTruthy()
  })
})
