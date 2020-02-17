import React from 'react';
import PropTypes from 'prop-types';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

let apiKey = 'pk_test_fa5gJKRjNx5ybeNGn4T2Ughw';
if (process.env.NODE_ENV === 'production') {
  apiKey = 'pk_live_hk5KCpK63rHYijfsdYl7qupz';
}

const paymentFormTypes = {
  onSuccess: PropTypes.func,
};

const defaultProps = {
  onSuccess: () => null,
};

const PaymentForm = ({ onSuccess }) => {
  return (
    <>
      <StripeProvider apiKey={apiKey}>
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
