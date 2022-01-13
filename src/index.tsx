import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'
import App from 'App'

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
      sans-serif;
    margin: 0;
    line-height: 1.5rem;
  }

  a {
    color: #9d0d11;
    text-decoration: unset;
    :hover {
      color: #e62429 !important;
    }
  }

  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)

reportWebVitals()
