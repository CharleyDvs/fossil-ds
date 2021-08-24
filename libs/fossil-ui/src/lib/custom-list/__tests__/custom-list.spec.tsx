import { render, fireEvent, RenderResult } from '@testing-library/react'
import { CustomList, CustomListProps, CollapseListOption } from '../custom-list'
import { HiFolder, HiDocument } from 'react-icons/hi'

describe('<CustomList />', () => {
  let component: (props: CustomListProps) => RenderResult

  beforeEach(() => {
    component = (props) => render(<CustomList {...props} />)
  })

  const collapseListItems: CollapseListOption[] = [
    { text: 'Sub-item 1', icon: <HiDocument />, onClick: jest.fn() },
    { text: 'Sub-item 2', icon: <HiDocument /> },
    { text: 'Sub-item 3', icon: <HiDocument /> },
  ]

  const listItems: CollapseListOption[] = [
    { text: 'Item 1', onClick: jest.fn() },
    {
      text: 'Item 2',
      isCollapse: true,
      icon: <HiFolder />,
      collapseListItems,
    },
    { text: 'Item 3' },
  ]

  const props: CustomListProps = {
    dataTestId: 'custom-list-test',
    listItems,
  }

  it('renders correctly with the given props', () => {
    const { getByTestId, getByText } = component(props)

    expect(getByTestId('custom-list-test')).toBeTruthy()
    expect(getByText('Item 1')).toBeTruthy()
    expect(getByText('Item 2')).toBeTruthy()
    expect(getByText('Item 3')).toBeTruthy()
  })

  it('fires onClick when an item is clicked', () => {
    const { getByText } = component(props)
    const element = getByText('Item 1')

    const { onClick } = listItems[0]

    fireEvent.click(element)

    expect(onClick).toHaveBeenCalled()
  })

  it('displays list items when a collapsable item is clicked', () => {
    const { getByText } = component(props)
    const element = getByText('Item 2')

    fireEvent.click(element)

    expect(getByText('Sub-item 1')).toBeTruthy()
  })

  it('fires onClick when a collapsable list item is clicked', () => {
    const { getByText } = component(props)
    const element = getByText('Item 2')

    fireEvent.click(element)

    const { onClick } = collapseListItems[0]
    const subItem = getByText('Sub-item 1')

    fireEvent.click(subItem)

    expect(onClick).toHaveBeenCalled()
  })
})
