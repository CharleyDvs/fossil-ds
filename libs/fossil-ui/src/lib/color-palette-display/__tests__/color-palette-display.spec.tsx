import { render, RenderResult, fireEvent } from '@testing-library/react'
import {
  ColorPaletteDisplay,
  ColorPaletteDisplayProps,
} from '../color-palette-display'

describe('<ColorPaletteDisplay />', () => {
  let component: (props: ColorPaletteDisplayProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<ColorPaletteDisplay {...props} />)
  })

  const colorList = [
    {
      colorName: '$token-example-color-1',
      colorCode: '#07a2ff',
    },
    {
      colorName: '$token-example-color-2',
      colorCode: '#0070b3',
    },
    {
      colorName: '$token-example-color-3',
      colorCode: '#003c60',
    },
    {
      colorName: '$token-example-color-4',
      colorCode: '#00304d',
    },
    {
      colorName: '$token-example-color-5',
      colorCode: '#00243a',
    },
  ]

  const props: ColorPaletteDisplayProps = {
    colorList,
    dataTestId: 'color-palette-test',
  }

  it('renders correctly with the given props', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('color-palette-test')).toBeTruthy()
  })

  it('display the color name and code when hovered', () => {
    const { getByTestId, getByText } = component(props)

    colorList.forEach((color, idx) => {
      const element = getByTestId(`color-palette-test-children-${idx}`)

      fireEvent.mouseEnter(element)

      expect(getByText(color.colorName)).toBeTruthy()
      expect(getByText(color.colorCode)).toBeTruthy()
    })
  })
})
