import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@fossil-ds/fossil-documentation'
import { Theme } from '@fossil-ds/fossil-layout'
import App from './app/app'
import './styles.scss'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <MDXProvider>
          <App />
        </MDXProvider>
      </Theme>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)
