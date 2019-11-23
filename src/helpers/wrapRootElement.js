import React from 'react';
import { ThemeProvider } from 'styled-components';

const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default wrapRootElement;