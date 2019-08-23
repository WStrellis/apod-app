import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Theme from "./components/theme_provider/theme.jsx";
import App from './components/app/App_noapi.dev.jsx';

ReactDOM.render(
  <Theme>
    <App />
  </Theme>
  , document.getElementById('root'));
