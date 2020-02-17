import React from 'react';
import user from '@testing-library/user-event';
// eslint-disable-next-line
import { render, wait } from '../../../test/utils';
import CheckoutForm from '../CheckoutForm';

jest.mock('react-stripe-elements', () => {
  return {
    injectStripe: component => component,
    CardElement: () => null,
  };
});

fetch.mockResponse(JSON.stringify({ clientSecret: '12345' }));

describe('<PaymentForm />', () => {
  it('renders and takes basic props', async () => {
    const mockOnSuccess = jest.fn();

    const { getByLabelText, getByTestId, rerender } = render(
      <CheckoutForm
        stripe={{
          confirmCardPayment: () => {
            return new Promise(resolve => resolve({}));
          },
        }}
        elements={{ getElement: () => null }}
        onSuccess={mockOnSuccess}
      />
    );

    expect(getByLabelText(/Cardholder Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Card Details/i)).toBeInTheDocument();

    user.click(getByTestId('contact-us-button'));

    expect(getByLabelText(/topic/i)).toBeInTheDocument();

    user.type(getByTestId('name-input'), 'Brian Jenkins');
    user.type(getByTestId('email-input'), 'brian@trytrig.com');
    // Before the wait the button should be disabled because we don't have a client
    // secret yet. So this shouldn't hit mockOnSuccess
    user.click(getByTestId('submit-button'));
    await wait();
    user.click(getByTestId('submit-button'));

    await wait(() => expect(mockOnSuccess.mock.calls.length).toEqual(1));
    rerender(
      <CheckoutForm
        stripe={{
          confirmCardPayment: () => {
            return new Promise(resolve => resolve({ error: 'sup' }));
          },
        }}
        elements={{ getElement: () => null }}
        onSuccess={mockOnSuccess}
      />
    );
    await wait(() => expect(mockOnSuccess.mock.calls.length).toEqual(1));
  });
});
