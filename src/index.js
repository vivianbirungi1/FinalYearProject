import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import ThemeContextWrapper from './components/themeContextWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
  <React.StrictMode>
    <App />
  </React.StrictMode>{ ' ' }
  </ThemeContextWrapper>,
  document.getElementById('root')
);


