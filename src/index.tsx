import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reportWebVitals from 'reportWebVitals'
import App from 'App'

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
      sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)

reportWebVitals()
