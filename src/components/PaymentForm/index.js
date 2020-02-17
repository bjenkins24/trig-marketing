import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const paymentFormTypes = {
  onSuccess: PropTypes.func,
};

const defaultProps = {
  onSuccess: () => null,
};

const PaymentForm = ({ onSuccess }) => {
  return (
    <Elements>
      <CheckoutForm onSuccess={onSuccess} />
    </Elements>
  );
};

PaymentForm.propTypes = paymentFormTypes;
PaymentForm.defaultProps = defaultProps;

export default PaymentForm;
