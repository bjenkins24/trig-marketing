import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import {
  StringFieldForm,
  Form,
  Body2,
  Button,
  Fieldset,
  Label,
  toast,
} from '@trig-app/core-components';
import { injectStripe, CardElement } from 'react-stripe-elements';

const CardContainer = styled.div`
  border-radius: 0.4rem;
  border: 0.1rem solid #c0bfbf;
  padding: 0.95rem 1.6rem;
`;

const ChargeDescription = styled(Body2)`
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const checkoutFormTypes = {
  stripe: PropTypes.shape({
    confirmCardPayment: PropTypes.func,
  }),
  elements: PropTypes.shape({
    getElement: PropTypes.func,
  }),
  onSuccess: PropTypes.func,
};

const defaultProps = {
  stripe: null,
  elements: null,
  onSuccess: () => null,
};

const CheckoutForm = ({ stripe, elements, onSuccess }) => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/paymentIntent')
      .then(response => response.json())
      .then(data => setClientSecret(data.clientSecret));
  }, []);

  return (
    <Form
      initialValues={{ name: '', email: '' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('Please enter a valid email address.')
          .required('Please enter an email address.'),
        name: yup.string().required("Please enter the cardholder's name"),
      })}
      onSubmit={async values => {
        const { name, email } = values;
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement('card'),
            billing_details: {
              name,
              email,
            },
          },
        });
        if (typeof result.error !== 'undefined') {
          return toast({
            type: 'error',
            message:
              "Hmm looks like something went wrong! Your payment didn't go through. If this continues to happen, please contact us at support@trytrig.com",
          });
        }
        return onSuccess(result);
      }}
    >
      {({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Fieldset width="100%">
              <StringFieldForm label="Cardholder Name" name="name" />
              <StringFieldForm type="email" label="Email" name="email" />
              <Label>
                <span
                  css={`
                    display: block;
                    margin-bottom: 0.8rem;
                  `}
                >
                  Card details
                </span>
                <CardContainer>
                  <CardElement
                    style={{
                      base: {
                        fontSize: '16px',
                        fontFamily: 'hero new,sans-serif',
                        color: '#2C2929',
                        lineHeight: '1.7',
                        '::placeholder': {
                          color: '#C0BFBF',
                        },
                      },
                    }}
                  />
                </CardContainer>
              </Label>
              <ChargeDescription forwardedAs="p">
                Your card will be immediately charged $40.00. This charge is{' '}
                <strong>non-recurring</strong>.
              </ChargeDescription>
              <ChargeDescription forwardedAs="p">
                Your payment is 100% refundable before our{' '}
                <em>December 14, 2020</em> release, by simply contacting us.
              </ChargeDescription>
              <Button
                type="submit"
                size="hg"
                css={`
                  width: 100%;
                  height: 9rem;
                `}
                disabled={submitting || !clientSecret}
              >
                Pay $40 and Reserve <br />
                Your Lifetime Subscription
              </Button>
            </Fieldset>
          </form>
        );
      }}
    </Form>
  );
};

CheckoutForm.propTypes = checkoutFormTypes;
CheckoutForm.defaultProps = defaultProps;

export default injectStripe(CheckoutForm);
