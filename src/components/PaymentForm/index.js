import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const apiKey = 'pk_test_fa5gJKRjNx5ybeNGn4T2Ughw';

const paymentFormTypes = {
  onSuccess: PropTypes.func,
};

const defaultProps = {
  onSuccess: () => null,
};

const PaymentForm = ({ onSuccess }) => {
  const [stripeInstance, setStripeInstance] = useState(null);

  const stripeListener = () => {
    document.querySelector('#stripe-js').addEventListener('load', () => {
      setStripeInstance(window.Stripe(apiKey));
    });
  };

  useEffect(() => {
    if (window.Stripe) {
      setStripeInstance(window.Stripe(apiKey));
    } else {
      setTimeout(stripeListener);
    }
    return clearTimeout(stripeListener);
  }, []);

  return (
    <>
      <Helmet>
        <script id="stripe-js" src="https://js.stripe.com/v3/" async />
      </Helmet>
      <StripeProvider stripe={stripeInstance}>
        <Elements>
          <CheckoutForm onSuccess={onSuccess} />
        </Elements>
      </StripeProvider>
    </>
  );
};

PaymentForm.propTypes = paymentFormTypes;
PaymentForm.defaultProps = defaultProps;

export default PaymentForm;
