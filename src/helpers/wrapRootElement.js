import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from '@trig-app/core-components';
import theme from '@trig-app/themes';

// eslint-disable-next-line
const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {element}
    </ThemeProvider>
  );
};

export default wrapRootElement;
