import { render, fireEvent, RenderResult } from '@testing-library/react'
import { TextLink, TextLinkProps } from '../text-link'
import { HiArrowRight } from 'react-icons/hi'

describe('<TextLink />', () => {
  let component: (props: TextLinkProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<TextLink {...props} />)
  })

  const props: TextLinkProps = {
    children: 'Test link',
    dataTestId: 'test-link',
    icon: <HiArrowRight />,
    onClick: jest.fn(),
  }

  it('displays correctly with the given props', () => {
    const { getByTestId, getByText } = component(props)

    expect(getByTestId('test-link')).toBeTruthy()
    expect(getByText('Test link')).toBeTruthy()
  })

  it('fires onClick when clicked', () => {
    const { getByTestId } = component(props)
    const element = getByTestId('test-link')

    const { onClick } = props

    fireEvent.click(element)

    expect(onClick).toHaveBeenCalled()
  })
})
