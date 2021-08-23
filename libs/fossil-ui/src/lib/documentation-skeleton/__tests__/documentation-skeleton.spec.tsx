import { render, RenderResult } from '@testing-library/react'
import {
  DocumentationSkeleton,
  DocumentationSkeletonProps,
} from '../documentation-skeleton'

describe('<DocumentationSkeleton />', () => {
  let component: (props: DocumentationSkeletonProps) => RenderResult

  beforeAll(() => {
    component = (props) => render(<DocumentationSkeleton {...props} />)
  })

  const props: DocumentationSkeletonProps = {
    dataTestId: 'skeleton-test',
  }

  it('renders correctly', () => {
    const { getByTestId } = component(props)

    expect(getByTestId('skeleton-test')).toBeTruthy()
  })
})
