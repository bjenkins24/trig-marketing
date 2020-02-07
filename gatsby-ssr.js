import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@trig-app/themes';

// eslint-disable-next-line react/prop-types
const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export { wrapRootElement };
