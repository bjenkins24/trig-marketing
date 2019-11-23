import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@trig-app/themes';

const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default wrapRootElement;