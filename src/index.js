import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Theme from './components/theme_provider/theme.jsx'
// import App from './components/app/App_noapi.dev.jsx'
import App from './components/app/App.jsx'
import './styles/_rcs-custom-scroll.scss'

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
)
