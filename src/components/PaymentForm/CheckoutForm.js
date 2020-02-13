import React from 'react';
import PropTypes from 'prop-types';
import { injectStripe, CardElement } from 'react-stripe-elements';

const checkoutFormTypes = {
  stripe: PropTypes.shape({
    createToken: PropTypes.func,
  }),
};
const defaultProps = {
  stripe: null,
};

const CheckoutForm = ({ stripe }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (stripe) {
      stripe.createToken().then(payload => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Card details
        <CardElement />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

CheckoutForm.propTypes = checkoutFormTypes;
CheckoutForm.defaultProps = defaultProps;

export default injectStripe(CheckoutForm);
