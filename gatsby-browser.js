import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import IsomorphicWrapper from './src/helpers/IsomorphicWrapper';
import './consoleOverrides';

let apiKey = 'pk_test_fa5gJKRjNx5ybeNGn4T2Ughw';
if (process.env.NODE_ENV === 'production') {
  apiKey = 'pk_live_hk5KCpK63rHYijfsdYl7qupz';
}

// eslint-disable-next-line
const wrapRootElement = ({ element }) => {
  return (
    <IsomorphicWrapper>
      <StripeProvider stripe={window.Stripe(apiKey)}>{element}</StripeProvider>
    </IsomorphicWrapper>
  );
};

export { wrapRootElement };
