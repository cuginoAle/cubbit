import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from './themes/baseline';
import { ThemeProvider } from 'styled-components';
import theme, { Typography } from 'themes/default'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Typography />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

