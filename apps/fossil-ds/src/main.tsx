import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import { Theme } from '@fossil-ds/fossil-layout'
import App from './app/app'
import './styles.scss'

const components = {
  pre: (props: MDXProviderProps) => <div {...props} />,
  code: (props: MDXProviderProps) => <pre {...props} />,
}

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <MDXProvider components={components}>
          <App />
        </MDXProvider>
      </Theme>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)
