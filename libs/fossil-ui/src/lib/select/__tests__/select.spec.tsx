import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Select, SelectProps } from '../select'

describe('<Select />', () => {
  let component: (props: SelectProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<Select {...props} />)
  })

  const options = [
    {
      label: 'Test label 1',
      value: 'test-label-1',
    },
    {
      label: 'Test label 2',
      value: 'test-label-2',
    },
    {
      label: 'Test label 3',
      value: 'test-label-3',
    },
  ]

  const props: SelectProps = {
    dataTestId: 'select-test',
    onChange: jest.fn(),
    options,
    label: 'Select test',
    native: true,
  }

  it('renders correctly with the given props', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('select-test')).toBeTruthy()
  })

  it('displays all the options correctly when clicked', () => {
    const { getByText, getAllByText } = component(props)
    const element = getByText('Select test')

    fireEvent.click(element)

    expect(getAllByText('Test label', { exact: false })).toHaveLength(
      options.length,
    )
  })

  it('displays the option selected', () => {
    props.value = options[0].value
    const { getByText } = component(props)
    const element = getByText('Select test')

    fireEvent.click(element)

    const option = getByText('Test label 2')

    fireEvent.click(option)

    expect(option).toBeTruthy()
  })
})
