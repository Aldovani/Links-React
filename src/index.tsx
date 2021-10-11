import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './pages/index';
import { GlobalStyles } from './styles/global';
import reportWebVitals from './reportWebVitals';
import {palette} from './styles/themes/palette';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
