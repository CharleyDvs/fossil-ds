import { render, RenderResult, fireEvent } from '@testing-library/react'
import { ColorDisplay, ColorDisplayProps } from '../color-display'

describe('<ColorDisplay />', () => {
  let component: (props: ColorDisplayProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<ColorDisplay {...props} />)
  })

  const props: ColorDisplayProps = {
    colorCode: '#222',
    colorName: '$test-token',
    dataTestId: 'color-display-token',
  }

  it('renders correctly with the given props', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('color-display-token')).toBeTruthy()
  })

  it('displays the color name and code when the user hover the component', () => {
    const { getByTestId, getByText } = component(props)
    const element = getByTestId('color-display-token')

    fireEvent.mouseEnter(element)

    expect(getByText('$test-token')).toBeTruthy()
    expect(getByText('#222')).toBeTruthy()
  })
})
