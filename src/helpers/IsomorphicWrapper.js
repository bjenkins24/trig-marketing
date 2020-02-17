import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from '@trig-app/core-components';
import theme from '@trig-app/themes';

const isomorphicWrapperTypes = {
  children: PropTypes.node.isRequired,
};

const IsomorphicWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {children}
    </ThemeProvider>
  );
};

IsomorphicWrapper.propTypes = isomorphicWrapperTypes;

export default IsomorphicWrapper;
