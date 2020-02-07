import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@trig-app/themes';
import { ToastContainer } from '@trig-app/core-components';
import './consoleOverrides';

// eslint-disable-next-line react/prop-types
const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {element}
    </ThemeProvider>
  );
};

export { wrapRootElement };
