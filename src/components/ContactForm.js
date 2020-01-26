import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import {
  StringFieldForm,
  TextFieldForm,
  Button,
  Fieldset,
} from '@trig-app/core-components';

const Container = styled.div``;

const sendMail = ({ email, message }) => {
  return fetch('/.netlify/functions/sendMail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from: email,
      text: message,
    }),
  });
};

const contactFormTypes = {
  afterSubmit: PropTypes.func,
};

const defaultProps = {
  afterSubmit: () => null,
};

const ContactForm = ({ afterSubmit }) => {
  return (
    <Container>
      <Form
        initialValues={{ email: '', topic: '', message: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          let result;
          try {
            result = await sendMail(values);
          } catch (error) {
            console.log(error);
          }
          afterSubmit(result);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Fieldset width={40}>
                <StringFieldForm
                  name="email"
                  type="email"
                  label="Your email address"
                />
                <StringFieldForm name="topic" label="Topic" />
                <TextFieldForm name="message" label="Message" />
                <Button type="submit" disabled={isSubmitting}>
                  Send Message
                </Button>
              </Fieldset>
            </form>
          );
        }}
      </Form>
    </Container>
  );
};

ContactForm.propTypes = contactFormTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
