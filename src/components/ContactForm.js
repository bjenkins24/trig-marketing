import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import {
  StringFieldForm,
  TextFieldForm,
  Button,
  Fieldset,
  Form,
} from '@trig-app/core-components';

const Container = styled.div``;

const sendMail = ({ email, message, topic }) => {
  return fetch('/.netlify/functions/sendMail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from: email,
      subject: topic,
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
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Please enter a valid email address.')
            .required('Please enter an email address.'),
          topic: yup.string().required('Please enter a topic.'),
          message: yup.string().required('Please enter a message.'),
        })}
        onSubmit={async values => {
          let result;
          try {
            result = await sendMail(values);
          } catch (error) {
            console.log(error);
          }
          afterSubmit(result);
        }}
      >
        {({ handleSubmit, submitting }) => {
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
                <Button type="submit" disabled={submitting}>
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
