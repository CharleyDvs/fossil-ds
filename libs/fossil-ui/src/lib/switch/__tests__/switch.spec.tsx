import { render, fireEvent, RenderResult } from '@testing-library/react'
import { Switch, SwitchProps } from '../switch'

describe('<Switch />', () => {
  let component: (props: SwitchProps) => RenderResult

  beforeAll(() => {
    component = (props: SwitchProps) => render(<Switch {...props} />)
  })

  const props: SwitchProps = {
    label: 'Test Switch',
    dataTestId: 'test-switch',
    onChange: jest.fn(),
  }

  test('it displays correctly with the given props', () => {
    const { getByTestId, getByText } = component(props)

    expect(getByTestId('test-switch')).toBeTruthy()
    expect(getByText('Test Switch')).toBeTruthy()
  })

  test('it fires onChange when clicked', () => {
    const { getByTestId } = component(props)
    const element = getByTestId('test-switch')

    const { onChange } = props

    fireEvent.click(element)

    expect(onChange).toHaveBeenCalled()
  })
})
