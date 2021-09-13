import { render, RenderResult, fireEvent } from '@testing-library/react'
import { ClipboardButton, ClipboardButtonProps } from '../clipboard-button'
import { HiClipboard } from 'react-icons/hi'

describe('<ClipboardButton />', () => {
  let component: (props: ClipboardButtonProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<ClipboardButton {...props} />)
  })

  const props: ClipboardButtonProps = {
    text: 'This is an example text',
    children: <HiClipboard />,
    dataTestId: 'clipboard-button-test',
  }

  it('renders correctly with the given props', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('clipboard-button-test')).toBeTruthy()
  })

  it('displays a tooltip when the component is hovered', () => {
    const { getByTestId, getByText } = component(props)
    const element = getByTestId('clipboard-button-test')

    fireEvent.mouseEnter(element)

    expect(getByText('copy to clipboard')).toBeTruthy()
  })

  it('signals the user changing the text in the tootip to indicate if the text has been copied', () => {
    const { getByTestId, getByText } = component(props)
    const element = getByTestId('clipboard-button-test')

    fireEvent.click(element)

    expect(getByText('copied to the clipboard!')).toBeTruthy()
  })
})
