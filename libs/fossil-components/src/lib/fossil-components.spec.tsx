import { render } from '@testing-library/react'

import FossilComponents from './fossil-components'

describe('FossilComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FossilComponents />)
    expect(baseElement).toBeTruthy()
  })
})
