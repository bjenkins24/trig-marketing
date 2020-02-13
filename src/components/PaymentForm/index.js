import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const apiKey = 'pk_test_fa5gJKRjNx5ybeNGn4T2Ughw';

const PaymentForm = () => {
  const [stripeInstance, setStripeInstance] = useState(null);

  useEffect(() => {
    if (window.Stripe) {
      setStripeInstance(window.Stripe(apiKey));
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        setStripeInstance(window.Stripe(apiKey));
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <script id="stripe-js" src="https://js.stripe.com/v3/" async />
      </Helmet>
      <StripeProvider stripe={stripeInstance}>
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    </>
  );
};

export default PaymentForm;
