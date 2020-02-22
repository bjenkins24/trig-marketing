import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from '@trig-app/core-components';
import { StripeProvider } from 'react-stripe-elements';
import theme from '@trig-app/themes';
import '@stripe/stripe-js';

let apiKey = 'pk_test_fa5gJKRjNx5ybeNGn4T2Ughw';
if (process.env.NODE_ENV === 'production') {
  apiKey = 'pk_live_hk5KCpK63rHYijfsdYl7qupz';
}

const isomorphicWrapperTypes = {
  children: PropTypes.node.isRequired,
};

const IsomorphicWrapper = ({ children }) => {
  const [stripeInstance, setStripeInstance] = useState(null);

  useLayoutEffect(() => {
    setStripeInstance(window.Stripe(apiKey));
  }, []);

  return (
    <StripeProvider stripe={stripeInstance}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        {children}
      </ThemeProvider>
    </StripeProvider>
  );
};

IsomorphicWrapper.propTypes = isomorphicWrapperTypes;

export default IsomorphicWrapper;
