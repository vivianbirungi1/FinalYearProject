import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import ThemeContextWrapper from './components/themeContextWrapper';

// theme context wrapper added here to ensure entire site is affected when dark mode is triggered.
// main react component App is rendered here. root is marked in HTML, whatever is in the root, will display on the front end.
ReactDOM.render(
  <ThemeContextWrapper>
  <React.StrictMode>
    <App />
  </React.StrictMode>{ ' ' }
  </ThemeContextWrapper>,
  document.getElementById('root')
);


