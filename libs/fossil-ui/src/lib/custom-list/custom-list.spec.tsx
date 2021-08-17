import { render } from '@testing-library/react'

import { CustomList } from './custom-list'

describe('CustomList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomList />)
    expect(baseElement).toBeTruthy()
  })
})
